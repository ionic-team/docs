"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useIsBrowser_1 = tslib_1.__importDefault(require("@docusaurus/useIsBrowser"));
const IdealImage_1 = tslib_1.__importDefault(require("@theme/IdealImage"));
const theme_common_1 = require("@docusaurus/theme-common");
const clsx_1 = require("clsx");
const index_module_scss_1 = tslib_1.__importDefault(require("./index.module.scss"));
const theme_1 = tslib_1.__importDefault(require("./assets/theme"));
function ThemedIdealImage(props) {
    const isBrowser = (0, useIsBrowser_1.default)();
    const { colorMode } = (0, theme_common_1.useColorMode)();
    const { className, src, srcDark, ...propsRest } = props;
    const clientThemes = colorMode === 'dark' ? ['dark'] : ['light'];
    const renderedSourceNames = isBrowser
        ? clientThemes
        : // We need to render both images on the server to avoid flash
            // See https://github.com/facebook/docusaurus/pull/3730
            ['light', 'dark'];
    return (react_1.default.createElement(react_1.default.Fragment, null, renderedSourceNames.map((sourceName) => {
        let srcThemed = sourceName === 'light' ? src : srcDark !== null && srcDark !== void 0 ? srcDark : src;
        if (typeof srcThemed !== 'string' && 'src' in srcThemed) {
            srcThemed.src = {
                ...srcThemed.src,
                width: propsRest.width,
                height: propsRest.height,
            };
        }
        return (react_1.default.createElement(IdealImage_1.default, { img: srcThemed, key: sourceName, className: (0, clsx_1.clsx)(index_module_scss_1.default.themedImage, index_module_scss_1.default[`themedImage--${sourceName}`], className), theme: theme_1.default, ...propsRest }));
    })));
}
exports.default = ThemedIdealImage;
