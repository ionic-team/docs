'use strict';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const Link_1 = tslib_1.__importDefault(require('@docusaurus/Link'));
const useBaseUrl_1 = tslib_1.__importDefault(require('@docusaurus/useBaseUrl'));
const theme_common_1 = require('@docusaurus/theme-common');
const ThemedImage_1 = tslib_1.__importDefault(require('@theme/ThemedImage'));
const index_module_scss_1 = tslib_1.__importDefault(
  require('./index.module.scss'),
);
const clsx_1 = tslib_1.__importDefault(require('clsx'));
function LogoThemedImage({logo, alt, imageClassName}) {
  const sources = {
    light: (0, useBaseUrl_1.default)(logo.src),
    dark: (0, useBaseUrl_1.default)(logo.srcDark || logo.src),
  };
  const themedImage = react_1.default.createElement(ThemedImage_1.default, {
    className: logo.className,
    sources: sources,
    height: logo.height,
    width: logo.width,
    alt: alt,
    style: logo.style,
  });
  // Is this extra div really necessary?
  // introduced in https://github.com/facebook/docusaurus/pull/5666
  return imageClassName
    ? react_1.default.createElement(
        'div',
        {className: imageClassName},
        themedImage,
      )
    : themedImage;
}
function Logo(props) {
  var _a;
  //TODO: strongly typed theme type
  const {logo} = (0, theme_common_1.useThemeConfig)();
  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = (0, useBaseUrl_1.default)(
    (logo === null || logo === void 0 ? void 0 : logo.href) || '/',
  );
  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = 'site logo';
  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt =
    (_a = logo === null || logo === void 0 ? void 0 : logo.alt) !== null &&
    _a !== void 0
      ? _a
      : fallbackAlt;
  const {html: logoHtml, ...logoRest} = logo.after || {};
  return react_1.default.createElement(
    'div',
    {className: index_module_scss_1.default.logo},
    react_1.default.createElement(
      Link_1.default,
      {
        to: logoLink,
        ...propsRest,
        ...((logo === null || logo === void 0 ? void 0 : logo.target) && {
          target: logo.target,
        }),
      },
      logo &&
        react_1.default.createElement(LogoThemedImage, {
          logo: logo,
          alt: alt,
          imageClassName: imageClassName,
        }),
    ),
    logo.after &&
      react_1.default.createElement('div', {
        dangerouslySetInnerHTML: {__html: logoHtml},
        ...logoRest,
        className: (0, clsx_1.default)(logoRest.class, 'logo__after'),
      }),
  );
}
exports.default = Logo;
