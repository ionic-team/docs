import path from 'path';

module.exports = function () {
  return {
    name: 'docusaurus-theme',
    getClientModules() {
      return [
        'modern-normalize/modern-normalize.css',
        '@ionic-internal/ionic-ds/dist/tokens.css',
        path.join(__dirname, './styles/custom.css'),
      ];
    },
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
};
