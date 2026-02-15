// eslint.config.js
import eslintPluginJs from "@eslint/js";

export default [
  // Basis-Empfehlungen von ESLint
  eslintPluginJs.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js-Globals
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
        // Browser-Globals (falls du auch Browser-Code hast)
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      // Eigene Regeln hier ergänzen
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
