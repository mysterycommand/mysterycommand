module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['.babelrc', 'ts*.json'],
      options: { parser: 'json-stringify' },
    },
  ],
};
