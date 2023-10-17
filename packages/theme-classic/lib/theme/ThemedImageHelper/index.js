'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const useBaseUrl_1 = tslib_1.__importDefault(require('@docusaurus/useBaseUrl'));
const ThemedImage_1 = tslib_1.__importDefault(require('@theme/ThemedImage'));
function ThemedImageHelper({logo}) {
  const sources = {
    light: (0, useBaseUrl_1.default)(logo.src),
    dark: (0, useBaseUrl_1.default)(logo.srcDark || logo.src),
    ...logo.sources,
  };
  return react_1.default.createElement(ThemedImage_1.default, {
    className: logo.className,
    sources: sources,
    height: logo.height,
    width: logo.width,
    alt: logo.alt,
    style: logo.style,
  });
}
exports.default = ThemedImageHelper;
