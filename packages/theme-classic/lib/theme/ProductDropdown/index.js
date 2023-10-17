'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importStar(require('react'));
const index_module_scss_1 = tslib_1.__importDefault(
  require('./index.module.scss'),
);
const theme_common_1 = require('@docusaurus/theme-common');
const theme_common_2 = require('@docusaurus/theme-common');
const Logo_1 = tslib_1.__importDefault(require('@theme/Navbar/Logo'));
const clsx_1 = tslib_1.__importDefault(require('clsx'));
const ThemedImageHelper_1 = tslib_1.__importDefault(
  require('../ThemedImageHelper'),
);
const Close_1 = tslib_1.__importDefault(require('@theme/Icon/Close'));
const internal_1 = require('@docusaurus/theme-common/internal');
const icon_more_png_1 = tslib_1.__importDefault(
  require('./assets/light/icon-more.png'),
);
const icon_more_png_2 = tslib_1.__importDefault(
  require('./assets/dark/icon-more.png'),
);
const assets_1 = tslib_1.__importDefault(require('./assets'));
const useDocusaurusContext_1 = tslib_1.__importDefault(
  require('@docusaurus/useDocusaurusContext'),
);
const ExternalLink_1 = tslib_1.__importDefault(
  require('@theme/Icon/ExternalLink'),
);
const IconMoreThemed = {
  src: icon_more_png_1.default,
  srcDark: icon_more_png_2.default,
  width: 12,
  height: 12,
  alt: 'more icon',
};
const isExternalLink = (link) => {
  const {
    siteConfig: {url},
  } = (0, useDocusaurusContext_1.default)();
  return !link.startsWith('/') && !link.startsWith(url);
};
function ProductDropdownMobile(props) {
  const {products, os, social} = assets_1.default;
  const [isOpen, setIsOpen] = (0, react_1.useState)(false);
  //TODO: strongly typed theme config
  const {
    sidebar: {
      productDropdown: {title, logo, socials},
    },
  } = (0, theme_common_1.useThemeConfig)();
  const {shown} = (0, internal_1.useNavbarMobileSidebar)();
  (0, react_1.useEffect)(() => {
    shown && setIsOpen(false);
  }, [shown]);
  return react_1.default.createElement(
    'div',
    {
      className: (0, clsx_1.default)(
        'product-dropdown product-dropdown--mobile',
        index_module_scss_1.default.productDropdownMobile,
      ),
    },
    react_1.default.createElement(
      'button',
      {
        className: (0, clsx_1.default)(
          index_module_scss_1.default.productDropdownButton,
          'ds-heading-6',
        ),
        onClick: () => setIsOpen(!isOpen),
      },
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownButtonStart},
        logo &&
          react_1.default.createElement(ThemedImageHelper_1.default, {
            logo: logo,
          }),
        title,
      ),
      react_1.default.createElement(ThemedImageHelper_1.default, {
        logo: IconMoreThemed,
      }),
    ),
    react_1.default.createElement(
      'div',
      {
        className: (0, clsx_1.default)(
          index_module_scss_1.default.productDropdownMobileMenu,
          {
            [index_module_scss_1.default.productDropdownMobileMenuOpen]: isOpen,
          },
        ),
      },
      react_1.default.createElement(
        'div',
        {
          className:
            index_module_scss_1.default.productDropdownMobileMenuHeader,
        },
        react_1.default.createElement(Logo_1.default, null),
        react_1.default.createElement(
          'button',
          {className: 'navbar-sidebar__close', onClick: () => setIsOpen(false)},
          react_1.default.createElement(Close_1.default, null),
        ),
      ),
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownMobileMenuStart},
        react_1.default.createElement(
          'article',
          null,
          react_1.default.createElement(
            'h2',
            {className: 'ds-overline-1'},
            'Products',
          ),
          react_1.default.createElement(
            'ul',
            null,
            products.map(({logo, title, url}) =>
              react_1.default.createElement(
                'li',
                {
                  className:
                    index_module_scss_1.default.productDropdownMobileItem,
                },
                react_1.default.createElement(
                  'a',
                  {
                    className: (0, clsx_1.default)(
                      'ds-heading-5',
                      index_module_scss_1.default.productDropdownMobileItemLink,
                    ),
                    ...url,
                  },
                  react_1.default.createElement(ThemedImageHelper_1.default, {
                    logo: logo,
                  }),
                  title,
                ),
              ),
            ),
          ),
        ),
        react_1.default.createElement(
          'article',
          null,
          react_1.default.createElement(
            'h2',
            {className: 'ds-overline-1'},
            'Open Source',
          ),
          react_1.default.createElement(
            'ul',
            null,
            os.map(({logo, title, url}) => {
              return react_1.default.createElement(
                'li',
                {
                  className:
                    index_module_scss_1.default.productDropdownMobileItem,
                },
                react_1.default.createElement(
                  'a',
                  {
                    className: (0, clsx_1.default)(
                      'ds-heading-5',
                      index_module_scss_1.default.productDropdownMobileItemLink,
                    ),
                    ...url,
                  },
                  react_1.default.createElement(ThemedImageHelper_1.default, {
                    logo: logo,
                  }),
                  react_1.default.createElement(
                    'span',
                    {
                      className:
                        index_module_scss_1.default.productDropdownItemText,
                    },
                    title,
                    isExternalLink(url.href) &&
                      react_1.default.createElement(
                        ExternalLink_1.default,
                        null,
                      ),
                  ),
                ),
              );
            }),
          ),
        ),
      ),
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownMobileMenuEnd},
        react_1.default.createElement(
          'div',
          {
            className:
              index_module_scss_1.default.productDropdownMobileCommunity,
          },
          react_1.default.createElement(
            'a',
            {className: 'ds-paragraph-4'},
            'Community Hub',
          ),
          react_1.default.createElement(
            'a',
            {className: 'ds-paragraph-4'},
            'Forum',
          ),
        ),
        react_1.default.createElement(
          'div',
          {className: index_module_scss_1.default.productDropdownMobileSocials},
          social.map(({logo, url}) =>
            react_1.default.createElement(
              'a',
              {...url},
              react_1.default.createElement(ThemedImageHelper_1.default, {
                logo: logo,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
function ProductDropdownDesktop(props) {
  const {products, os, social} = assets_1.default;
  const [isOpen, setIsOpen] = (0, react_1.useState)(false);
  //TODO: strongly typed theme config
  const {
    sidebar: {
      productDropdown: {title, logo, socials},
    },
  } = (0, theme_common_1.useThemeConfig)();
  return react_1.default.createElement(
    'div',
    {
      onMouseLeave: () => setIsOpen(false),
      className: (0, clsx_1.default)(
        index_module_scss_1.default.productDropdown,
        'product-dropdown',
        'dropdown',
        {
          'dropdown--hoverable': isOpen,
        },
      ),
    },
    react_1.default.createElement(
      'button',
      {
        className: (0, clsx_1.default)(
          index_module_scss_1.default.productDropdownButton,
          'ds-heading-6',
        ),
        onClick: () => setIsOpen(!isOpen),
      },
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownButtonStart},
        logo &&
          react_1.default.createElement(ThemedImageHelper_1.default, {
            logo: logo,
          }),
        title,
      ),
      react_1.default.createElement(ThemedImageHelper_1.default, {
        logo: IconMoreThemed,
      }),
    ),
    react_1.default.createElement(
      'div',
      {
        className: (0, clsx_1.default)(
          index_module_scss_1.default.productDropdownMenu,
          'dropdown__menu',
          {
            'dropdown--show': isOpen,
          },
        ),
      },
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownStart},
        react_1.default.createElement(
          'article',
          null,
          react_1.default.createElement(
            'h2',
            {className: 'ds-overline-1'},
            'Products',
          ),
          react_1.default.createElement(
            'ul',
            null,
            products.map(({logo, title, url}) =>
              react_1.default.createElement(
                'li',
                {className: index_module_scss_1.default.productDropdownItem},
                react_1.default.createElement(
                  'a',
                  {
                    className: (0, clsx_1.default)(
                      'ds-heading-5',
                      index_module_scss_1.default.productDropdownItemLink,
                    ),
                    ...url,
                  },
                  react_1.default.createElement(ThemedImageHelper_1.default, {
                    logo: logo,
                  }),
                  title,
                ),
              ),
            ),
          ),
        ),
        react_1.default.createElement(
          'article',
          null,
          react_1.default.createElement(
            'h2',
            {className: 'ds-overline-1'},
            'Open Source',
          ),
          react_1.default.createElement(
            'ul',
            null,
            os.map(({logo, title, url}) =>
              react_1.default.createElement(
                'li',
                {className: index_module_scss_1.default.productDropdownItem},
                react_1.default.createElement(
                  'a',
                  {
                    className: (0, clsx_1.default)(
                      'ds-heading-5',
                      index_module_scss_1.default.productDropdownItemLink,
                    ),
                    ...url,
                  },
                  react_1.default.createElement(ThemedImageHelper_1.default, {
                    logo: logo,
                  }),
                  react_1.default.createElement(
                    'span',
                    {
                      className:
                        index_module_scss_1.default.productDropdownItemText,
                    },
                    title,
                    isExternalLink(url.href) &&
                      react_1.default.createElement(
                        ExternalLink_1.default,
                        null,
                      ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      react_1.default.createElement(
        'div',
        {className: index_module_scss_1.default.productDropdownEnd},
        react_1.default.createElement(
          'div',
          {className: index_module_scss_1.default.productDropdownEndLinks},
          react_1.default.createElement(
            'a',
            {className: 'ds-paragraph-4'},
            'Community Hub',
          ),
          react_1.default.createElement(
            'a',
            {className: 'ds-paragraph-4'},
            'Forum',
          ),
        ),
        react_1.default.createElement(
          'div',
          {className: index_module_scss_1.default.productDropdownIcons},
          social.map(({logo, url}) =>
            react_1.default.createElement(
              'a',
              {...url},
              react_1.default.createElement(ThemedImageHelper_1.default, {
                logo: logo,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
function ProductDropdown(props) {
  const windowSize = (0, theme_common_2.useWindowSize)();
  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderProductDropdownDesktop =
    windowSize === 'desktop' || windowSize === 'ssr';
  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderProductDropdownMobile = windowSize === 'mobile';
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    shouldRenderProductDropdownDesktop &&
      react_1.default.createElement(ProductDropdownDesktop, {...props}),
    shouldRenderProductDropdownMobile &&
      react_1.default.createElement(ProductDropdownMobile, {...props}),
  );
}
exports.default = ProductDropdown;
