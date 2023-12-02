"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const Link_1 = tslib_1.__importDefault(require("@docusaurus/Link"));
const useBaseUrl_1 = tslib_1.__importDefault(require("@docusaurus/useBaseUrl"));
const index_module_scss_1 = tslib_1.__importDefault(require("./index.module.scss"));
function DocCard(props) {
    const isStatic = typeof props.href === 'undefined';
    const isOutbound = typeof props.href !== 'undefined' ? /^http/.test(props.href) : false;
    const header = props.header === 'undefined' ? null : (react_1.default.createElement("header", { className: (0, clsx_1.default)('ds-heading-5', index_module_scss_1.default.cardHeader) }, props.header));
    const hoverIcon = props.hoverIcon || props.icon;
    const content = (react_1.default.createElement(react_1.default.Fragment, null,
        props.img && react_1.default.createElement("img", { src: (0, useBaseUrl_1.default)(props.img), className: index_module_scss_1.default.cardImage }),
        react_1.default.createElement("div", { className: index_module_scss_1.default.cardContainer },
            (props.icon || hoverIcon) && (react_1.default.createElement("div", { className: index_module_scss_1.default.cardIconRow },
                props.icon && (react_1.default.createElement("img", { src: (0, useBaseUrl_1.default)(props.icon), className: (0, clsx_1.default)(index_module_scss_1.default.cardIcon, index_module_scss_1.default.cardIconDefault) })),
                hoverIcon && react_1.default.createElement("img", { src: (0, useBaseUrl_1.default)(hoverIcon), className: (0, clsx_1.default)(index_module_scss_1.default.cardIcon, index_module_scss_1.default.cardIconHover) }))),
            props.header && header,
            react_1.default.createElement("div", { className: index_module_scss_1.default.cardContent }, props.children))));
    const className = (0, clsx_1.default)({
        [index_module_scss_1.default.cardWithImage]: typeof props.img !== 'undefined',
        [index_module_scss_1.default.cardWithoutImage]: typeof props.img === 'undefined',
    });
    if (isStatic) {
        return react_1.default.createElement("div", { className: (0, clsx_1.default)(className, index_module_scss_1.default.card, 'doc-card') }, content);
    }
    if (isOutbound) {
        return (react_1.default.createElement("a", { className: (0, clsx_1.default)(className, index_module_scss_1.default.card, 'doc-card'), href: props.href, target: "_blank" }, content));
    }
    return (react_1.default.createElement(Link_1.default, { to: props.href, className: (0, clsx_1.default)(className, index_module_scss_1.default.card, 'doc-card') }, content));
}
exports.default = DocCard;
