"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const internal_1 = require("@docusaurus/theme-common/internal");
const DocsVersionDropdownNavbarItem_1 = tslib_1.__importDefault(require("@theme/NavbarItem/DocsVersionDropdownNavbarItem"));
const Translate_1 = require("@docusaurus/Translate");
const ColorModeToggle_1 = tslib_1.__importDefault(require("@theme/Navbar/ColorModeToggle"));
const Close_1 = tslib_1.__importDefault(require("@theme/Icon/Close"));
const Logo_1 = tslib_1.__importDefault(require("@theme/Navbar/Logo"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const index_module_scss_1 = tslib_1.__importDefault(require("./index.module.scss"));
function CloseButton() {
    const mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    return (react_1.default.createElement("button", { type: "button", "aria-label": (0, Translate_1.translate)({
            id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
            message: 'Close navigation bar',
            description: 'The ARIA label for close button of mobile sidebar',
        }), className: "clean-btn navbar-sidebar__close", onClick: () => mobileSidebar.toggle() },
        react_1.default.createElement(Close_1.default, null)));
}
function NavbarMobileSidebarHeader() {
    //TODO: strongly typed theme config
    const { sidebar: { backButton, versionDropdown }, } = (0, internal_1.useThemeConfig)();
    if (versionDropdown && !('dropdownItemsBefore' in versionDropdown)) {
        versionDropdown.dropdownItemsBefore = [];
    }
    if (versionDropdown && !('dropdownItemsAfter' in versionDropdown)) {
        versionDropdown.dropdownItemsAfter = [];
    }
    return (react_1.default.createElement("div", { className: "navbar-sidebar__brand" },
        backButton && (react_1.default.createElement("a", { ...backButton.url, className: (0, clsx_1.default)(index_module_scss_1.default.backButton, backButton.class, 'back-button') },
            react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M16 7H3.85011L9.4502 1.39991L8 0L0 8L8 16L9.39986 14.6L3.85011 9H16V7Z", fill: "currentColor" })))),
        react_1.default.createElement(Logo_1.default, null),
        react_1.default.createElement(ColorModeToggle_1.default, { className: "margin-right--md" }),
        versionDropdown && react_1.default.createElement(DocsVersionDropdownNavbarItem_1.default, { ...versionDropdown }),
        react_1.default.createElement(CloseButton, null)));
}
exports.default = NavbarMobileSidebarHeader;
