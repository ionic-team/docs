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
function IconLightMode(props) {
  return react_1.default.createElement(
    'svg',
    {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    react_1.default.createElement('path', {
      d: 'M4.30769 3.38462C4.30769 2.20692 4.48115 1.015 4.92308 0C1.98346 1.27962 0 4.28154 0 7.69231C0 12.2804 3.71962 16 8.30769 16C11.7185 16 14.7204 14.0165 16 11.0769C14.985 11.5188 13.7931 11.6923 12.6154 11.6923C8.02731 11.6923 4.30769 7.97269 4.30769 3.38462Z',
      fill: 'currentColor',
    }),
  );
}
exports.default = IconLightMode;
