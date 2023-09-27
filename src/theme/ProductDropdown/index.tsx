import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useWindowSize} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarLogo from '@theme/Navbar/Logo';
import clsx from 'clsx';
import ThemedImageHelper from '../ThemedImageHelper';
import IconClose from '@theme/Icon/Close';

import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

import IconMore from './assets/light/icon-more.png';
import IconMoreDark from './assets/dark/icon-more.png';

import data from './assets';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconExternalLink from '@theme/Icon/ExternalLink';

const IconMoreThemed = {
  src: IconMore,
  srcDark: IconMoreDark,
  width: 12,
  height: 12,
  alt: 'more icon',
};

const isExternalLink = (link: string) => {
  const {
    siteConfig: {url},
  } = useDocusaurusContext();

  return !link.startsWith('/') && !link.startsWith(url);
};

function ProductDropdownMobile(props) {
  const {products, os, social} = data;

  const [isOpen, setIsOpen] = useState(false);
  const {
    sidebar: {title, logo, socials},
  } = useThemeConfig() as any;

  const {shown} = useNavbarMobileSidebar();

  useEffect(() => {
    shown && setIsOpen(false);
  }, [shown]);

  return (
    <div
      className={clsx(
        'product-dropdown product-dropdown--mobile',
        styles.productDropdownMobile,
      )}>
      <button
        className={clsx(styles.productDropdownButton, 'ds-heading-6')}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productDropdownButtonStart}>
          {logo && <ThemedImageHelper logo={logo} />}
          {title}
        </div>
        <ThemedImageHelper logo={IconMoreThemed} />
      </button>
      <div
        className={clsx(styles.productDropdownMobileMenu, {
          [styles.productDropdownMobileMenuOpen]: isOpen,
        })}>
        <div className={styles.productDropdownMobileMenuHeader}>
          <NavbarLogo />
          <button
            className="navbar-sidebar__close"
            onClick={() => setIsOpen(false)}>
            <IconClose />
          </button>
        </div>
        <div className={styles.productDropdownMobileMenuStart}>
          <article>
            <h2 className="ds-overline-1">Products</h2>
            <ul>
              {products.map(({logo, title, url}) => (
                <li className={styles.productDropdownMobileItem}>
                  <a
                    className={clsx(
                      'ds-heading-5',
                      styles.productDropdownMobileItemLink,
                    )}
                    {...url}>
                    <ThemedImageHelper logo={logo} />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="ds-overline-1">Open Source</h2>
            <ul>
              {os.map(({logo, title, url}) => {
                return (
                  <li className={styles.productDropdownMobileItem}>
                    <a
                      className={clsx(
                        'ds-heading-5',
                        styles.productDropdownMobileItemLink,
                      )}
                      {...url}>
                      <ThemedImageHelper logo={logo} />
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
            <a className="ds-paragraph-4">Community Hub</a>
            <a className="ds-paragraph-4">Forum</a>
          </div>
          <div className={styles.productDropdownMobileSocials}>
            {social.map(({logo, url}) => (
              <a {...url}>
                <ThemedImageHelper logo={logo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDropdownDesktop(props) {
  const {products, os, social} = data;
  const [isOpen, setIsOpen] = useState(false);
  const {
    sidebar: {title, logo},
  } = useThemeConfig() as any;

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className={clsx(styles.productDropdown, 'product-dropdown', 'dropdown', {
        'dropdown--hoverable': isOpen,
      })}>
      <button
        className={clsx(styles.productDropdownButton, 'ds-heading-6')}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productDropdownButtonStart}>
          {logo && <ThemedImageHelper logo={logo} />}
          {title}
        </div>
        <ThemedImageHelper logo={IconMoreThemed} />
      </button>
      <div
        className={clsx(styles.productDropdownMenu, 'dropdown__menu', {
          'dropdown--show': isOpen,
        })}>
        <div className={styles.productDropdownStart}>
          <article>
            <h2 className="ds-overline-1">Products</h2>
            <ul>
              {products.map(({logo, title, url}) => (
                <li className={styles.productDropdownItem}>
                  <a
                    className={clsx(
                      'ds-heading-5',
                      styles.productDropdownItemLink,
                    )}
                    {...url}>
                    <ThemedImageHelper logo={logo} />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="ds-overline-1">Open Source</h2>
            <ul>
              {os.map(({logo, title, url}) => (
                <li className={styles.productDropdownItem}>
                  <a
                    className={clsx(
                      'ds-heading-5',
                      styles.productDropdownItemLink,
                    )}
                    {...url}>
                    <ThemedImageHelper logo={logo} />
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
            <a className="ds-paragraph-4">Community Hub</a>
            <a className="ds-paragraph-4">Forum</a>
          </div>
          <div className={styles.productDropdownIcons}>
            {social.map(({logo, url}) => (
              <a {...url}>
                <ThemedImageHelper logo={logo} />
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

  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderProductDropdownDesktop =
    windowSize === 'desktop' || windowSize === 'ssr';

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderProductDropdownMobile = windowSize === 'mobile';

  return (
    <>
      {shouldRenderProductDropdownDesktop && (
        <ProductDropdownDesktop {...props} />
      )}
      {shouldRenderProductDropdownMobile && (
        <ProductDropdownMobile {...props} />
      )}
    </>
  );
}
