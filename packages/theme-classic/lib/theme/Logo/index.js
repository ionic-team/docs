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
const ThemedImageHelper_1 = tslib_1.__importDefault(
  require('../ThemedImageHelper'),
);
function Logo(props) {
  const {logo} = (0, theme_common_1.useThemeConfig)();
  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = (0, useBaseUrl_1.default)(
    (logo === null || logo === void 0 ? void 0 : logo.href) || '/',
  );
  return react_1.default.createElement(
    Link_1.default,
    {
      to: logoLink,
      ...propsRest,
      ...((logo === null || logo === void 0 ? void 0 : logo.target) && {
        target: logo.target,
      }),
    },
    logo &&
      react_1.default.createElement(ThemedImageHelper_1.default, {logo: logo}),
  );
}
exports.default = Logo;
