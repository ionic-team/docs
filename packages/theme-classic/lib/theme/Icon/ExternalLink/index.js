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
const styles_module_css_1 = tslib_1.__importDefault(require("./styles.module.css"));
function IconExternalLink({ width = 9, height = 9 }) {
    return (react_1.default.createElement("svg", { className: styles_module_css_1.default.iconExternalLink, xmlns: "http://www.w3.org/2000/svg", width: width, height: height, "aria-hidden": "true" },
        react_1.default.createElement("path", { fill: "currentColor", d: "M9 7.91H7.33V2.9L1.22 9 0 7.78l6.11-6.1H1.08V0H9v7.91Z" })));
}
exports.default = IconExternalLink;
