'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const useIsBrowser_1 = tslib_1.__importDefault(
  require('@docusaurus/useIsBrowser'),
);
const IdealImage_1 = tslib_1.__importDefault(require('@theme/IdealImage'));
const theme_common_1 = require('@docusaurus/theme-common');
const clsx_1 = require('clsx');
const index_module_scss_1 = tslib_1.__importDefault(
  require('./index.module.scss'),
);
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function ThemedIdealImage(props) {
  const isBrowser = (0, useIsBrowser_1.default)();
  const {colorMode} = (0, theme_common_1.useColorMode)();
  const {className, ...propsRest} = props;
  const clientThemes = colorMode === 'dark' ? ['dark'] : ['light'];
  const renderedSourceNames = isBrowser
    ? clientThemes
    : // We need to render both images on the server to avoid flash
      // See https://github.com/facebook/docusaurus/pull/3730
      ['light', 'dark'];
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    renderedSourceNames.map((sourceName) => {
      let key =
        sourceName === 'light'
          ? 'src'
          : `src${capitalizeFirstLetter(sourceName)}`;
      if (!(key in propsRest)) {
        key = 'src';
      }
      if (typeof propsRest[key] !== 'string' && 'src' in propsRest[key]) {
        propsRest[key].src = {
          ...propsRest[key].src,
          width: propsRest.width,
          height: propsRest.height,
        };
      }
      return react_1.default.createElement(IdealImage_1.default, {
        img: propsRest[key],
        key: sourceName,
        className: (0, clsx_1.clsx)(
          index_module_scss_1.default.themedImage,
          index_module_scss_1.default[`themedImage--${sourceName}`],
          className,
        ),
        ...propsRest,
      });
    }),
  );
}
exports.default = ThemedIdealImage;
