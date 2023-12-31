"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const index_module_scss_1 = tslib_1.__importDefault(require("./index.module.scss"));
const theme_common_1 = require("@docusaurus/theme-common");
const useBaseUrl_1 = tslib_1.__importDefault(require("@docusaurus/useBaseUrl"));
const Logo_1 = tslib_1.__importDefault(require("@theme/Navbar/Logo"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const ThemedIdealImage_1 = tslib_1.__importDefault(require("@theme/ThemedIdealImage"));
const Close_1 = tslib_1.__importDefault(require("@theme/Icon/Close"));
const ThemedImage_1 = tslib_1.__importDefault(require("@theme/ThemedImage"));
const internal_1 = require("@docusaurus/theme-common/internal");
const icon_more_png_1 = tslib_1.__importDefault(require("./assets/light/icon-more.png"));
const icon_more_png_2 = tslib_1.__importDefault(require("./assets/dark/icon-more.png"));
const assets_1 = tslib_1.__importDefault(require("./assets"));
const useDocusaurusContext_1 = tslib_1.__importDefault(require("@docusaurus/useDocusaurusContext"));
const ExternalLink_1 = tslib_1.__importDefault(require("@theme/Icon/ExternalLink"));
const slugify_1 = tslib_1.__importDefault(require("slugify"));
const IconMoreThemed = {
    src: icon_more_png_1.default,
    srcDark: icon_more_png_2.default,
    width: 12,
    height: 12,
    alt: 'more icon',
};
const isExternalLink = (link) => {
    const { siteConfig: { url }, } = (0, useDocusaurusContext_1.default)();
    return !link.startsWith('/') && !link.startsWith(url);
};
const addUrlProps = (url) => {
    if (isExternalLink(url.href)) {
        return {
            ...url,
            target: '_blank',
            rel: 'noopener',
        };
    }
    return {};
};
const getTextLinks = (customTextLinks) => {
    if (!customTextLinks)
        return assets_1.default.textLinks;
    const textLinks = customTextLinks.reduce((acc, curr) => {
        let hasKey = false;
        acc = acc.map((data) => {
            const originalSlug = (0, slugify_1.default)(data.label, { lower: true });
            const customSlug = (0, slugify_1.default)(curr.label, { lower: true });
            if (curr.key === originalSlug || (curr.label && customSlug === originalSlug)) {
                hasKey = true;
                return { ...data, ...curr };
            }
            else {
                return data;
            }
        });
        return hasKey ? acc : [...acc, curr];
    }, assets_1.default.textLinks);
    return textLinks;
};
const getIconLinks = (customIconLinks) => {
    if (!customIconLinks)
        return assets_1.default.iconLinks;
    const iconLinks = customIconLinks.reduce((acc, curr) => {
        let hasKey = false;
        acc = acc.map((data) => {
            if (curr.key === data.key) {
                hasKey = true;
                return { ...data, ...curr };
            }
            else {
                return data;
            }
        });
        return hasKey ? acc : [...acc, curr];
    }, assets_1.default.iconLinks);
    return iconLinks;
};
const getIsUrlActive = (url, { siteUrl, baseUrl }) => {
    const docsHomeRegex = /^https:\/\/ionic.io\/docs\/?$/g;
    const isDocsHome = docsHomeRegex.exec(siteUrl + baseUrl);
    if (isDocsHome)
        return false;
    return url.href.includes(siteUrl + baseUrl);
};
function ProductDropdownMobile(props) {
    const { products, os } = assets_1.default;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    //TODO: strongly typed theme config
    const { sidebar: { productDropdown: { title, logo, textLinks: customTextLinks, iconLinks: customIconLinks }, }, } = (0, theme_common_1.useThemeConfig)();
    const { siteConfig: { url: siteUrl, baseUrl }, } = (0, useDocusaurusContext_1.default)();
    const { shown } = (0, internal_1.useNavbarMobileSidebar)();
    (0, react_1.useEffect)(() => {
        shown && setIsOpen(false);
    }, [shown]);
    const textLinks = getTextLinks(customTextLinks);
    const iconLinks = getIconLinks(customIconLinks);
    const { src, srcDark, ...restLogo } = logo;
    const sources = {
        light: (0, useBaseUrl_1.default)(logo.src),
        dark: (0, useBaseUrl_1.default)(logo.srcDark || logo.src),
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)('product-dropdown product-dropdown--mobile', index_module_scss_1.default.productDropdownMobile) },
        react_1.default.createElement("button", { className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownButton, 'ds-heading-6'), onClick: () => setIsOpen(!isOpen) },
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownButtonStart },
                logo && react_1.default.createElement(ThemedImage_1.default, { sources: sources, ...restLogo }),
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownButtonTextWrapper },
                    react_1.default.createElement("span", { className: index_module_scss_1.default.productDropdownButtonText }, title))),
            react_1.default.createElement(ThemedIdealImage_1.default, { ...IconMoreThemed })),
        react_1.default.createElement("div", { className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownMobileMenu, {
                [index_module_scss_1.default.productDropdownMobileMenuOpen]: isOpen,
            }) },
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownMobileMenuHeader },
                react_1.default.createElement(Logo_1.default, null),
                react_1.default.createElement("button", { className: "navbar-sidebar__close", onClick: () => setIsOpen(false) },
                    react_1.default.createElement(Close_1.default, null))),
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownMobileMenuStart },
                react_1.default.createElement("article", null,
                    react_1.default.createElement("h2", { className: "ds-overline-1" }, "Products"),
                    react_1.default.createElement("ul", null, products.map(({ logo, title, url }, i) => (react_1.default.createElement("li", { key: i, className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownItem, {
                            [index_module_scss_1.default.productDropdownItemActive]: getIsUrlActive(url, {
                                siteUrl,
                                baseUrl,
                            }),
                        }) },
                        react_1.default.createElement("a", { className: (0, clsx_1.default)('ds-heading-5', index_module_scss_1.default.productDropdownMobileItemLink), ...url },
                            react_1.default.createElement(ThemedIdealImage_1.default, { ...logo }),
                            title)))))),
                react_1.default.createElement("article", null,
                    react_1.default.createElement("h2", { className: "ds-overline-1" }, "Open Source"),
                    react_1.default.createElement("ul", null, os.map(({ logo, title, url }, i) => {
                        const updatedUrl = addUrlProps(url);
                        return (react_1.default.createElement("li", { key: i, className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownMobileItem, {
                                [index_module_scss_1.default.productDropdownMobileItemActive]: getIsUrlActive(url, { siteUrl, baseUrl }),
                            }) },
                            react_1.default.createElement("a", { className: (0, clsx_1.default)('ds-heading-5', index_module_scss_1.default.productDropdownMobileItemLink), ...updatedUrl },
                                react_1.default.createElement(ThemedIdealImage_1.default, { ...logo }),
                                react_1.default.createElement("span", { className: index_module_scss_1.default.productDropdownItemText },
                                    title,
                                    isExternalLink(url.href) && react_1.default.createElement(ExternalLink_1.default, null)))));
                    })))),
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownMobileMenuEnd },
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownMobileMenuEndLinks }, textLinks.map(({ label, url }, i) => (react_1.default.createElement("a", { className: "ds-paragraph-4", key: i, ...url }, label)))),
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownMobileMenuEndIcons }, iconLinks.map(({ logo, url }, i) => (react_1.default.createElement("a", { key: i, ...url },
                    react_1.default.createElement(ThemedIdealImage_1.default, { ...logo })))))))));
}
function ProductDropdownDesktop(props) {
    const { products, os } = assets_1.default;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    //TODO: strongly typed theme config
    const { sidebar: { productDropdown: { title, logo, textLinks: customTextLinks, iconLinks: customIconLinks }, }, } = (0, theme_common_1.useThemeConfig)();
    const { siteConfig: { url: siteUrl, baseUrl }, } = (0, useDocusaurusContext_1.default)();
    const textLinks = getTextLinks(customTextLinks);
    const iconLinks = getIconLinks(customIconLinks);
    const { src, srcDark, ...restLogo } = logo;
    const sources = {
        light: (0, useBaseUrl_1.default)(logo.src),
        dark: (0, useBaseUrl_1.default)(logo.srcDark || logo.src),
    };
    return (react_1.default.createElement("div", { onMouseLeave: () => setIsOpen(false), className: (0, clsx_1.default)(index_module_scss_1.default.productDropdown, 'product-dropdown', 'dropdown', {
            'dropdown--hoverable': isOpen,
        }) },
        react_1.default.createElement("button", { className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownButton, 'ds-heading-6'), onClick: () => setIsOpen(!isOpen) },
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownButtonStart },
                logo && react_1.default.createElement(ThemedImage_1.default, { sources: sources, ...restLogo }),
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownButtonTextWrapper },
                    react_1.default.createElement("span", { className: index_module_scss_1.default.productDropdownButtonText }, title))),
            react_1.default.createElement(ThemedIdealImage_1.default, { ...IconMoreThemed })),
        react_1.default.createElement("div", { className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownMenu, 'dropdown__menu', {
                'dropdown--show': true,
            }) },
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownStart },
                react_1.default.createElement("article", null,
                    react_1.default.createElement("h2", { className: "ds-overline-1" }, "Products"),
                    react_1.default.createElement("ul", null, products.map(({ logo, title, url }, i) => {
                        return (react_1.default.createElement("li", { key: i, className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownItem, {
                                [index_module_scss_1.default.productDropdownItemActive]: getIsUrlActive(url, {
                                    siteUrl,
                                    baseUrl,
                                }),
                            }) },
                            react_1.default.createElement("a", { className: (0, clsx_1.default)('ds-heading-5', index_module_scss_1.default.productDropdownItemLink), ...url },
                                react_1.default.createElement(ThemedIdealImage_1.default, { ...logo }),
                                title)));
                    }))),
                react_1.default.createElement("article", null,
                    react_1.default.createElement("h2", { className: "ds-overline-1" }, "Open Source"),
                    react_1.default.createElement("ul", null, os.map(({ logo, title, url }, i) => {
                        const updatedUrl = addUrlProps(url);
                        return (react_1.default.createElement("li", { key: i, className: (0, clsx_1.default)(index_module_scss_1.default.productDropdownItem, {
                                [index_module_scss_1.default.productDropdownItemActive]: getIsUrlActive(url, {
                                    siteUrl,
                                    baseUrl,
                                }),
                            }) },
                            react_1.default.createElement("a", { className: (0, clsx_1.default)('ds-heading-5', index_module_scss_1.default.productDropdownItemLink), ...updatedUrl },
                                react_1.default.createElement(ThemedIdealImage_1.default, { ...logo }),
                                react_1.default.createElement("span", { className: index_module_scss_1.default.productDropdownItemText },
                                    title,
                                    isExternalLink(url.href) && react_1.default.createElement(ExternalLink_1.default, null)))));
                    })))),
            react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownEnd },
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownEndLinks }, textLinks.map(({ label, url }, i) => (react_1.default.createElement("a", { key: i, className: "ds-paragraph-4", ...url }, label)))),
                react_1.default.createElement("div", { className: index_module_scss_1.default.productDropdownIcons }, iconLinks.map(({ logo, url }, i) => (react_1.default.createElement("a", { key: i, ...url },
                    react_1.default.createElement(ThemedIdealImage_1.default, { ...logo })))))))));
}
function ProductDropdown(props) {
    const windowSize = (0, theme_common_1.useWindowSize)();
    //TODO: strongly typed theme config
    const { sidebar: { productDropdown }, } = (0, theme_common_1.useThemeConfig)();
    if (!productDropdown) {
        return null;
    }
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderProductDropdownDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderProductDropdownMobile = windowSize === 'mobile';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        shouldRenderProductDropdownDesktop && react_1.default.createElement(ProductDropdownDesktop, { ...props }),
        shouldRenderProductDropdownMobile && react_1.default.createElement(ProductDropdownMobile, { ...props })));
}
exports.default = ProductDropdown;
