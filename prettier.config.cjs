// prettier.config.cjs
module.exports = {
  // Standardoptionen
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  // Overrides für bestimmte Dateitypen
  overrides: [
    {
      files: '*.ejs',
      options: {
        parser: 'html', // EJS wird als HTML behandelt
      },
    },
  ],
};
