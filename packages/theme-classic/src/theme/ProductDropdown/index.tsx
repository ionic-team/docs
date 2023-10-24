import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useThemeConfig, useWindowSize } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarLogo from '@theme/Navbar/Logo';
import clsx from 'clsx';
import ThemedIdealImage from '@theme/ThemedIdealImage';
import IconClose from '@theme/Icon/Close';
import ThemedImage from '@theme/ThemedImage';

import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

import IconMore from './assets/light/icon-more.png';
import IconMoreDark from './assets/dark/icon-more.png';

import data from './assets';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconExternalLink from '@theme/Icon/ExternalLink';
import slugify from 'slugify';

const IconMoreThemed = {
  src: IconMore,
  srcDark: IconMoreDark,
  width: 12,
  height: 12,
  alt: 'more icon',
};

const isExternalLink = (link: string) => {
  const {
    siteConfig: { url },
  } = useDocusaurusContext();

  return !link.startsWith('/') && !link.startsWith(url);
};

const getTextLinks = (customTextLinks) => {
  if (!customTextLinks) return data.textLinks;

  const textLinks = customTextLinks.reduce((acc, curr) => {
    let hasKey = false;

    acc = acc.map((data) => {
      const originalSlug = slugify(data.label, { lower: true });
      const customSlug = slugify(curr.label, { lower: true });

      if (curr.key === originalSlug || (curr.label && customSlug === originalSlug)) {
        hasKey = true;
        return { ...data, ...curr };
      } else {
        return data;
      }
    });

    return hasKey ? acc : [...acc, curr];
  }, data.textLinks);

  return textLinks;
};

const getIconLinks = (customIconLinks) => {
  if (!customIconLinks) return data.iconLinks;

  const iconLinks = customIconLinks.reduce((acc, curr) => {
    let hasKey = false;

    acc = acc.map((data) => {
      if (curr.key === data.key) {
        hasKey = true;
        return { ...data, ...curr };
      } else {
        return data;
      }
    });

    return hasKey ? acc : [...acc, curr];
  }, data.iconLinks);

  return iconLinks;
};

function ProductDropdownMobile(props) {
  const { products, os } = data;

  const [isOpen, setIsOpen] = useState(false);

  //TODO: strongly typed theme config
  const {
    sidebar: {
      productDropdown: { title, logo, textLinks: customTextLinks, iconLinks: customIconLinks },
    },
  } = useThemeConfig() as any;
  const {
    siteConfig: { url: siteUrl, baseUrl },
  } = useDocusaurusContext();

  const { shown } = useNavbarMobileSidebar();

  useEffect(() => {
    shown && setIsOpen(false);
  }, [shown]);

  const textLinks = getTextLinks(customTextLinks);
  const iconLinks = getIconLinks(customIconLinks);

  const { src, srcDark, ...restLogo } = logo;
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  return (
    <div className={clsx('product-dropdown product-dropdown--mobile', styles.productDropdownMobile)}>
      <button className={clsx(styles.productDropdownButton, 'ds-heading-6')} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productDropdownButtonStart}>
          {logo && <ThemedImage sources={sources} {...restLogo} />}
          {title}
        </div>
        <ThemedIdealImage {...IconMoreThemed} />
      </button>
      <div
        className={clsx(styles.productDropdownMobileMenu, {
          [styles.productDropdownMobileMenuOpen]: isOpen,
        })}
      >
        <div className={styles.productDropdownMobileMenuHeader}>
          <NavbarLogo />
          <button className="navbar-sidebar__close" onClick={() => setIsOpen(false)}>
            <IconClose />
          </button>
        </div>
        <div className={styles.productDropdownMobileMenuStart}>
          <article>
            <h2 className="ds-overline-1">Products</h2>
            <ul>
              {products.map(({ logo, title, url }, i) => (
                <li
                  key={i}
                  className={clsx(styles.productDropdownItem, {
                    [styles.productDropdownItemActive]: url.href.includes(siteUrl + baseUrl),
                  })}
                >
                  <a className={clsx('ds-heading-5', styles.productDropdownMobileItemLink)} {...url}>
                    <ThemedIdealImage {...logo} />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="ds-overline-1">Open Source</h2>
            <ul>
              {os.map(({ logo, title, url }, i) => {
                return (
                  <li
                    key={i}
                    className={clsx(styles.productDropdownMobileItem, {
                      [styles.productDropdownMobileItemActive]: url.href.includes(url + baseUrl),
                    })}
                  >
                    <a className={clsx('ds-heading-5', styles.productDropdownMobileItemLink)} {...url}>
                      <ThemedIdealImage {...logo} />
                      <span className={styles.productDropdownItemText}>
                        {title}
                        {isExternalLink(url.href) && <IconExternalLink />}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
        <div className={styles.productDropdownMobileMenuEnd}>
          <div className={styles.productDropdownMobileCommunity}>
            {textLinks.map(({ label, url }, i) => (
              <a className="ds-paragraph-4" key={i} {...url}>
                {label}
              </a>
            ))}
          </div>
          <div className={styles.productDropdownMobileSocials}>
            {iconLinks.map(({ logo, url }, i) => (
              <a key={i} {...url}>
                <ThemedIdealImage {...logo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDropdownDesktop(props) {
  const { products, os } = data;
  const [isOpen, setIsOpen] = useState(false);

  //TODO: strongly typed theme config
  const {
    sidebar: {
      productDropdown: { title, logo, textLinks: customTextLinks, iconLinks: customIconLinks },
    },
  } = useThemeConfig() as any;
  const {
    siteConfig: { url: siteUrl, baseUrl },
  } = useDocusaurusContext();

  const textLinks = getTextLinks(customTextLinks);
  const iconLinks = getIconLinks(customIconLinks);

  const { src, srcDark, ...restLogo } = logo;
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className={clsx(styles.productDropdown, 'product-dropdown', 'dropdown', {
        'dropdown--hoverable': isOpen,
      })}
    >
      <button className={clsx(styles.productDropdownButton, 'ds-heading-6')} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productDropdownButtonStart}>
          {logo && <ThemedImage sources={sources} {...restLogo} />}
          {title}
        </div>
        <ThemedIdealImage {...IconMoreThemed} />
      </button>
      <div
        className={clsx(styles.productDropdownMenu, 'dropdown__menu', {
          'dropdown--show': true,
        })}
      >
        <div className={styles.productDropdownStart}>
          <article>
            <h2 className="ds-overline-1">Products</h2>
            <ul>
              {products.map(({ logo, title, url }, i) => {
                return (
                  <li
                    key={i}
                    className={clsx(styles.productDropdownItem, {
                      [styles.productDropdownItemActive]: url.href.includes(siteUrl + baseUrl),
                    })}
                  >
                    <a className={clsx('ds-heading-5', styles.productDropdownItemLink)} {...url}>
                      <ThemedIdealImage {...logo} />
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
          <article>
            <h2 className="ds-overline-1">Open Source</h2>
            <ul>
              {os.map(({ logo, title, url }, i) => (
                <li key={i} className={styles.productDropdownItem}>
                  <a className={clsx('ds-heading-5', styles.productDropdownItemLink)} {...url}>
                    <ThemedIdealImage {...logo} />
                    <span className={styles.productDropdownItemText}>
                      {title}
                      {isExternalLink(url.href) && <IconExternalLink />}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className={styles.productDropdownEnd}>
          <div className={styles.productDropdownEndLinks}>
            {textLinks.map(({ label, url }, i) => (
              <a key={i} className="ds-paragraph-4" {...url}>
                {label}
              </a>
            ))}
          </div>
          <div className={styles.productDropdownIcons}>
            {iconLinks.map(({ logo, url }, i) => (
              <a key={i} {...url}>
                <ThemedIdealImage {...logo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDropdown(props) {
  const windowSize = useWindowSize();

  //TODO: strongly typed theme config
  const {
    sidebar: { productDropdown },
  } = useThemeConfig() as any;

  if (!productDropdown) {
    return null;
  }

  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderProductDropdownDesktop = windowSize === 'desktop' || windowSize === 'ssr';

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderProductDropdownMobile = windowSize === 'mobile';

  return (
    <>
      {shouldRenderProductDropdownDesktop && <ProductDropdownDesktop {...props} />}
      {shouldRenderProductDropdownMobile && <ProductDropdownMobile {...props} />}
    </>
  );
}
