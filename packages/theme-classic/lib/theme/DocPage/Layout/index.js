"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const internal_1 = require("@docusaurus/theme-common/internal");
const Layout_1 = tslib_1.__importDefault(require("@theme/Layout"));
const BackToTopButton_1 = tslib_1.__importDefault(require("@theme/BackToTopButton"));
const Sidebar_1 = tslib_1.__importDefault(require("@theme/DocPage/Layout/Sidebar"));
const Main_1 = tslib_1.__importDefault(require("@theme/DocPage/Layout/Main"));
const Navbar_1 = tslib_1.__importDefault(require("@theme-original/Navbar"));
const styles_module_css_1 = tslib_1.__importDefault(require("./styles.module.css"));
function DocPageLayout({ children }) {
    const sidebar = (0, internal_1.useDocsSidebar)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0, react_1.useState)(false);
    return (react_1.default.createElement(Layout_1.default, { wrapperClassName: styles_module_css_1.default.docsWrapper },
        react_1.default.createElement(BackToTopButton_1.default, null),
        react_1.default.createElement("div", { className: styles_module_css_1.default.docPage },
            sidebar && (react_1.default.createElement(Sidebar_1.default, { sidebar: sidebar.items, hiddenSidebarContainer: hiddenSidebarContainer, setHiddenSidebarContainer: setHiddenSidebarContainer })),
            react_1.default.createElement("div", { className: styles_module_css_1.default.mainWrapper },
                react_1.default.createElement(Navbar_1.default, null),
                react_1.default.createElement(Main_1.default, { hiddenSidebarContainer: hiddenSidebarContainer }, children)))));
}
exports.default = DocPageLayout;
