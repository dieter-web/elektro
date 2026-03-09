import fs from 'fs/promises';
import MarkdownIt from 'markdown-it';

import { createChartHtml } from '../src/module/chart.mjs';
import { createTableHtml } from '../src/module/table.mjs';
import { createSvgD3Html } from '../src/module/svgD3.mjs';
import { loadTaskConfig } from '../src/module/utils.mjs';
// import { createEditorHtml } from "../src/module/editor.mjs";

const md = new MarkdownIt({
  html: true,
  typographer: true,
});

export const registerRoute = async (router, baseRoute, routeConfig) => {
  // Hilfsobjekt für Standardwerte
  const defaultRenderVars = {
    layout: routeConfig.layout ?? 'layout/main.ejs',
    navTitle: routeConfig.navTitle ?? '',
    navRoot: routeConfig.navRoot ?? '/',
    navItems: routeConfig.navItems ?? [],
  };
  const fullPath = computeFullPath(baseRoute, routeConfig.path);

  // 1. Interactive Aufgabe
  if (routeConfig.task) {
    // GET: Formular anzeigen
    router.get(fullPath, async (req, res) => {
      // Läd die Aufgabe
      const { meta } = await loadTaskConfig(routeConfig.task);
      res.render('aufgabe', {
        ...defaultRenderVars,
        // meta,
        result: null,
        tableHtml: '',
        chartHtml: '',
        svgD3Html: '',
        editorHtml: '',
        data: { meta },
      });
    });

    // POST: Berechnung und Ausgabe
    router.post(fullPath, async (req, res) => {
      try {
        const { meta, handler } = await loadTaskConfig(routeConfig.task);

        const result = await handler(req.body);

        const tableHtml = createTableHtml(result);

        let chartHtml = '<div id="chart"></div>';
        if (result && result.chartData)
          chartHtml = createChartHtml(result.chartData);

        let svgD3Html = '<div id="svgD3"></div>';
        if (result && result.svgD3Data)
          svgD3Html = createSvgD3Html(result.svgD3Data);

        res.render('aufgabe', {
          ...defaultRenderVars,
          data: {
            meta,
            result,
            tableHtml,
            chartHtml,
            svgD3Html,
          },
        });
      } catch (err) {
        console.error(err);
        res.status(500).send('Fehler bei der Berechnung');
      }
    });

    return; // keine weitere Verarbeitung für dieses routeConfig-Eintrag
  }

  // 2. bestehender Markdown/Content-Flow
  const hasView = await viewExists(`views/pages${fullPath}.ejs`);
  const template = pickTemplate(fullPath, routeConfig, hasView);
  const types = routeConfig.content
    ? ['markdown', 'formulas', 'examples', 'interactive'].filter(
        (t) => routeConfig.content[t]
      )
    : [];

  router.get(fullPath, async (req, res, next) => {
    try {
      const opts = {
        ...defaultRenderVars,
        layout: routeConfig.layout,
        setTypes: types,
      };

      if (!hasView && types.length > 0) {
        const content = await loadContent(routeConfig.content || {});
        opts.markdownContent = types.includes('markdown')
          ? md.render(content.markdown || '')
          : '';
        opts.formulasContent = types.includes('formulas')
          ? content.formulas || ''
          : '';
        opts.examplesContent = types.includes('examples')
          ? content.examples || ''
          : '';
        opts.interactiveContent = types.includes('interactive')
          ? content.interactive || ''
          : '';
      } else {
        opts.markdownContent = '';
        opts.formulasContent = '';
        opts.examplesContent = '';
        opts.interactiveContent = '';
      }
      res.render(template, opts);
    } catch (err) {
      next(err);
    }
  });

  // 3. Rekursion für Kinder
  if (routeConfig.children) {
    for (const child of routeConfig.children) {
      await registerRoute(router, fullPath, child);
    }
  }
};

// Helper-Funktion

async function loadContent(config) {
  const {
    markdown = '',
    formulas = '',
    examples = '',
    interactive = '',
  } = config;

  try {
    // Paralleles Einlesen aller vier Dateien

    const [m, f, e, i] = await Promise.all([
      markdown && fs.readFile(`content/${markdown}`, 'utf8'),

      formulas && fs.readFile(`content/${formulas}`, 'utf8'),

      examples && (await fs.readFile(`content/${examples}`, 'utf8')),

      interactive && (await fs.readFile(`content/${interactive}`, 'utf8')),
    ]);

    /*
    const m = markdown && (await fs.readFile(`content/${markdown}`, 'utf-8'));
    const f = formulas && (await fs.readFile(`content/${formulas}`, 'utf-8'));
    const e = examples && (await import(`../content/${examples}`));
    const i = interactive && (await import(`../content/${interactive}`));
*/
    return {
      markdown: m || '',
      formulas: f || '',
      examples: e || '',
      interactive: i || '',
    };
  } catch (error) {
    console.error('Fehler beim laden der Inhalte:', error);
    // Fallback auf leere Strings, falls eine Datei nicht gelesen werden kann
    return {
      markdown: '',
      formulas: '',
      examples: '',
      interactive: '',
    };
  }
}
// Route zu Path
function computeFullPath(base, sub) {
  if (sub === '/') return '/';
  return `/${base}/${sub}`.replace(/\/+/g, '/');
}

async function viewExists(viewPath) {
  try {
    await fs.access(`${viewPath}.ejs`);
    return true;
  } catch {
    return false;
  }
}

function pickTemplate(path, routeConfig, hasView) {
  if (hasView) return `views/pages${path}`;
  if (routeConfig.content) return 'pages/content';
  return path === '/' ? 'pages/home' : 'pages/404';
}
