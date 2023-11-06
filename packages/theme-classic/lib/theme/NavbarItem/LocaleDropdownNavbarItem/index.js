'use strict';
/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/NavbarItem/LocaleDropdownNavbarItem/index.tsx
 *
 * Reasons for overriding:
 * - Add a span with a visually hidden class in order to hide the text. We only want to show the language icon.
 * - Removed the original styles that were applied to the language icon. We want to use our own styles.
 */
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const useDocusaurusContext_1 = tslib_1.__importDefault(
  require('@docusaurus/useDocusaurusContext'),
);
const internal_1 = require('@docusaurus/theme-common/internal');
const Translate_1 = require('@docusaurus/Translate');
const router_1 = require('@docusaurus/router');
const DropdownNavbarItem_1 = tslib_1.__importDefault(
  require('@theme/NavbarItem/DropdownNavbarItem'),
);
const Language_1 = tslib_1.__importDefault(require('@theme/Icon/Language'));
const styles_module_css_1 = tslib_1.__importDefault(
  require('./styles.module.css'),
);
function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = (0, useDocusaurusContext_1.default)();
  const alternatePageUtils = (0, internal_1.useAlternatePageUtils)();
  const {search, hash} = (0, router_1.useLocation)();
  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}`;
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
            // class name. This cannot be substituted with isActive, because the
            // target URLs contain `pathname://` and therefore are not NavLinks!
            mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? (0, Translate_1.translate)({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale].label;
  return react_1.default.createElement(DropdownNavbarItem_1.default, {
    ...props,
    mobile: mobile,
    label: react_1.default.createElement(
      react_1.default.Fragment,
      null,
      react_1.default.createElement(Language_1.default, null),
      react_1.default.createElement(
        'span',
        {className: styles_module_css_1.default.localeVisuallyHidden},
        dropdownLabel,
      ),
    ),
    items: items,
  });
}
exports.default = LocaleDropdownNavbarItem;
