"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const index_module_scss_1 = tslib_1.__importDefault(require("./index.module.scss"));
function DocCardList(props) {
    return react_1.default.createElement("div", { className: (0, clsx_1.default)('doc-card-list', index_module_scss_1.default.cards, props.className) }, props.children);
}
exports.default = DocCardList;
