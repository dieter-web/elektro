import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import routes from "./routes/main.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Static Files für Frontend !!
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/data", express.static(path.join(__dirname,"data")));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules", "bootstrap", "dist")),
);
app.use(
  "/d3",
  express.static(path.join(__dirname, "node_modules", "d3", "dist")),
);
app.use(
  "/math",
  express.static(
    path.join(__dirname, "node_modules", "mathjs", "lib", "browser"),
  ),
);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View Engine + Layout
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layout/main");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(expressLayouts);

// Routes
app.use("/", routes);

// app.set('content',path.join(__dirname, 'content'));
// app.use('/',aufgabenRoute)
// app.use('/',serviceRoutes);

// 404-Handler
app.use((req, res, next) => {
  res.status(404).render("error", {
    message: "Seite nicht gefunden",
    error: req.app.get("env") === "development" ? { status: 404 } : {},
  });
  next();
});

// Fehler-Handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: "Fehler",
    message: err.message,
    error: err,
  });
  next();
});

export default app;
