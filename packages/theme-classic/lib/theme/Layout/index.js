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
const clsx_1 = require("clsx");
const ErrorBoundary_1 = tslib_1.__importDefault(require("@docusaurus/ErrorBoundary"));
const theme_common_1 = require("@docusaurus/theme-common");
const internal_1 = require("@docusaurus/theme-common/internal");
const SkipToContent_1 = tslib_1.__importDefault(require("@theme/SkipToContent"));
const AnnouncementBar_1 = tslib_1.__importDefault(require("@theme/AnnouncementBar"));
const Footer_1 = tslib_1.__importDefault(require("@theme/Footer"));
const Provider_1 = tslib_1.__importDefault(require("@theme/Layout/Provider"));
const ErrorPageContent_1 = tslib_1.__importDefault(require("@theme/ErrorPageContent"));
const styles_module_css_1 = tslib_1.__importDefault(require("./styles.module.css"));
function Layout(props) {
    const { children, noFooter, wrapperClassName, 
    // Not really layout-related, but kept for convenience/retro-compatibility
    title, description, } = props;
    (0, internal_1.useKeyboardNavigation)();
    return (react_1.default.createElement(Provider_1.default, null,
        react_1.default.createElement(theme_common_1.PageMetadata, { title: title, description: description }),
        react_1.default.createElement(SkipToContent_1.default, null),
        react_1.default.createElement(AnnouncementBar_1.default, null),
        react_1.default.createElement("div", { id: theme_common_1.SkipToContentFallbackId, className: (0, clsx_1.clsx)(theme_common_1.ThemeClassNames.wrapper.main, styles_module_css_1.default.mainWrapper, wrapperClassName) },
            react_1.default.createElement(ErrorBoundary_1.default, { fallback: (params) => react_1.default.createElement(ErrorPageContent_1.default, { ...params }) }, children)),
        !noFooter && react_1.default.createElement(Footer_1.default, null)));
}
exports.default = Layout;
