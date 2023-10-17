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
const clsx_1 = tslib_1.__importDefault(require('clsx'));
const internal_1 = require('@docusaurus/theme-common/internal');
const ProductDropdown_1 = tslib_1.__importDefault(
  require('../../../ProductDropdown'),
);
function NavbarMobileSidebarLayout({header, primaryMenu, secondaryMenu}) {
  const {shown: secondaryMenuShown} = (0, internal_1.useNavbarSecondaryMenu)();
  return react_1.default.createElement(
    'div',
    {className: 'navbar-sidebar'},
    header,
    react_1.default.createElement(ProductDropdown_1.default, null),
    react_1.default.createElement(
      'div',
      {
        className: (0, clsx_1.default)('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        }),
      },
      react_1.default.createElement(
        'div',
        {className: 'navbar-sidebar__item menu'},
        primaryMenu,
      ),
      react_1.default.createElement(
        'div',
        {className: 'navbar-sidebar__item menu'},
        secondaryMenu,
      ),
    ),
  );
}
exports.default = NavbarMobileSidebarLayout;
