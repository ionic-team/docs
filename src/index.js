const path = require('path');
const fs = require('fs');

const basePath = path.resolve(__dirname, './css');

const filename = fs.readdirSync(basePath, (err, files) => {
  return files[0];
});

const index = filename[0].split('-')[1].split('.scss')[0];
const newIndex = +index + 1;

const newFilename = `custom-${newIndex}.scss`;

fs.rename(
  path.resolve(basePath, `./${filename}`),
  path.resolve(basePath, `./${newFilename}`),
  () => {},
);

module.exports = function () {
  return {
    name: 'docusaurus-theme-ionic-internal',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getClientModules() {
      return path.resolve(__dirname, `./css/${newFilename}`);
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://code.ionicframework.com',
            },
          },
          // {
          //   tagName: 'link',
          //   attributes: {
          //     rel: 'stylesheet',
          //     href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap',
          //   },
          // },
        ],
      };
    },
  };
};
