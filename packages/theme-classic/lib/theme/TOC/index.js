"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const TOC_1 = tslib_1.__importDefault(require("@theme-init/TOC"));
const EditThisPage_1 = tslib_1.__importDefault(require("@theme/EditThisPage"));
const react_1 = tslib_1.__importDefault(require("react"));
const internal_1 = require("@docusaurus/theme-common/internal");
function TOC(props) {
    const { toc, metadata: { editUrl }, } = (0, internal_1.useDoc)() || {};
    const isEmpty = toc.length <= 0;
    if (isEmpty)
        return null;
    return (react_1.default.createElement("div", { className: "toc-wrapper" },
        react_1.default.createElement("h2", null, "Contents"),
        react_1.default.createElement(TOC_1.default, { toc: toc, ...props }),
        editUrl && react_1.default.createElement("hr", null),
        editUrl && react_1.default.createElement(EditThisPage_1.default, { editUrl: editUrl })));
}
exports.default = TOC;
