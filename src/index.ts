import path from 'path';

module.exports = function () {
  return {
    name: 'docusaurus-theme',
    getClientModules() {
      return [
        require.resolve('modern-normalize/modern-normalize.css'),
        require.resolve('@ionic-internal/ionic-ds/dist/tokens.css'),
        path.join(__dirname, './styles/custom.css'),
      ];
    },
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
};
