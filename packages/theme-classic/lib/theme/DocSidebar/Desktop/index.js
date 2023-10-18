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
const ProductDropdown_1 = tslib_1.__importDefault(
  require('../../ProductDropdown'),
);
const DocsVersionDropdownNavbarItem_1 = tslib_1.__importDefault(
  require('@theme/NavbarItem/DocsVersionDropdownNavbarItem'),
);
const clsx_1 = tslib_1.__importDefault(require('clsx'));
const theme_common_1 = require('@docusaurus/theme-common');
const Logo_1 = tslib_1.__importDefault(require('@theme/Logo'));
const CollapseButton_1 = tslib_1.__importDefault(
  require('@theme/DocSidebar/Desktop/CollapseButton'),
);
const Content_1 = tslib_1.__importDefault(
  require('@theme/DocSidebar/Desktop/Content'),
);
const styles_module_scss_1 = tslib_1.__importDefault(
  require('./styles.module.scss'),
);
function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  //TODO: strongly typed theme config
  const {
    navbar: {hideOnScroll, items},
    docs: {
      sidebar: {hideable},
    },
    sidebar: {backButton},
  } = (0, theme_common_1.useThemeConfig)();
  const dropdownItem = items.find(
    (item) => item.type === 'docsVersionDropdown',
  );
  return react_1.default.createElement(
    'div',
    {
      className: (0, clsx_1.default)(
        styles_module_scss_1.default.sidebar,
        hideOnScroll && styles_module_scss_1.default.sidebarWithHideableNavbar,
        isHidden && styles_module_scss_1.default.sidebarHidden,
      ),
    },
    react_1.default.createElement(
      'div',
      {className: styles_module_scss_1.default.sidebarTop},
      backButton &&
        react_1.default.createElement(
          'a',
          {
            ...backButton.url,
            className: (0, clsx_1.default)(backButton.class, 'back-button'),
          },
          react_1.default.createElement(
            'svg',
            {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            react_1.default.createElement('path', {
              d: 'M16 7H3.85011L9.4502 1.39991L8 0L0 8L8 16L9.39986 14.6L3.85011 9H16V7Z',
              fill: 'currentColor',
            }),
          ),
        ),
      react_1.default.createElement(
        'div',
        {className: styles_module_scss_1.default.sidebarTopEnd},
        react_1.default.createElement(Logo_1.default, null),
        dropdownItem &&
          react_1.default.createElement(
            DocsVersionDropdownNavbarItem_1.default,
            {...dropdownItem},
          ),
      ),
    ),
    react_1.default.createElement(ProductDropdown_1.default, null),
    react_1.default.createElement(Content_1.default, {
      path: path,
      sidebar: sidebar,
    }),
    hideable &&
      react_1.default.createElement(CollapseButton_1.default, {
        onClick: onCollapse,
      }),
  );
}
exports.default = react_1.default.memo(DocSidebarDesktop);
