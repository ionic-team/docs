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
const Layout_1 = tslib_1.__importDefault(require("@theme/Navbar/Layout"));
const Content_1 = tslib_1.__importDefault(require("@theme/Navbar/Content"));
function Navbar() {
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement(Content_1.default, null)));
}
exports.default = Navbar;
