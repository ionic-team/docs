"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
module.exports = function () {
    return {
        name: 'docusaurus-theme',
        getClientModules() {
            return [
                require.resolve('modern-normalize/modern-normalize.css'),
                require.resolve('@ionic-internal/design-system/dist/reset/index.css'),
                require.resolve('@ionic-internal/design-system/dist/tokens/index.css'),
                path_1.default.join(__dirname, './styles/custom.css'),
            ];
        },
        getThemePath() {
            return '../lib/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
    };
};
