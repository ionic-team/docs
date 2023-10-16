import path from 'path';

module.exports = function () {
  return {
    name: 'docusaurus-theme',
    getClientModules() {
      return [
        require.resolve('modern-normalize/modern-normalize.css'),
        require.resolve('@ionic-internal/design-system/dist/reset/index.css'),
        require.resolve('@ionic-internal/design-system/dist/tokens/index.css'),
        path.join(__dirname, './styles/custom.css'),
      ];
    },
    getThemePath() {
      return '../lib/theme';
    },
    getTypeScriptThemePath() {
      return '../src/theme';
    },
  };
};
