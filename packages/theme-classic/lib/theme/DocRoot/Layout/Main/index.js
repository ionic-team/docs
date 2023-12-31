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
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const internal_1 = require("@docusaurus/theme-common/internal");
const Navbar_1 = tslib_1.__importDefault(require("@theme/Navbar"));
const styles_module_css_1 = tslib_1.__importDefault(require("./styles.module.css"));
function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
    const sidebar = (0, internal_1.useDocsSidebar)();
    return (react_1.default.createElement("main", { className: (0, clsx_1.default)(styles_module_css_1.default.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles_module_css_1.default.docMainContainerEnhanced) },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("div", { className: (0, clsx_1.default)('container padding-top--md padding-bottom--lg', styles_module_css_1.default.docItemWrapper, hiddenSidebarContainer && styles_module_css_1.default.docItemWrapperEnhanced) }, children)));
}
exports.default = DocRootLayoutMain;
