import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useWindowSize} from '@docusaurus/theme-common';
import clsx from 'clsx';
import LogoThemedImage from '../LogoThemedImage';
import IconClose from '@theme/Icon/Close';

import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

import IconMore from './assets/light/icon-more.png';
import IconMoreDark from './assets/dark/icon-more.png';

import data from './assets';

const IconMoreThemed = {
  src: IconMore,
  srcDark: IconMoreDark,
  width: 12,
  height: 12,
  alt: 'more icon',
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
    <div className={styles.productDropdownMobile}>
      <button
        className={clsx(styles.productDropdownButton, 'ds-heading-6')}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productDropdownButtonStart}>
          {logo && <LogoThemedImage logo={logo} />}
          {title}
        </div>
        <LogoThemedImage logo={IconMoreThemed} />
      </button>
      <div
        className={clsx(styles.productDropdownMobileMenu, {
          [styles.productDropdownMobileMenuOpen]: isOpen,
        })}>
        <button onClick={() => setIsOpen(false)}>
          <IconClose />
        </button>
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
                    <LogoThemedImage logo={logo} />
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
                <li className={styles.productDropdownMobileItem}>
                  <a
                    className={clsx(
                      'ds-heading-5',
                      styles.productDropdownMobileItemLink,
                    )}
                    {...url}>
                    <LogoThemedImage logo={logo} />
                    {title}
                  </a>
                </li>
              ))}
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
                <LogoThemedImage logo={logo} />
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
          {logo && <LogoThemedImage logo={logo} />}
          {title}
        </div>
        <LogoThemedImage logo={IconMoreThemed} />
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
                    <LogoThemedImage logo={logo} />
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
                    <LogoThemedImage logo={logo} />
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className={styles.productDropdownEnd}>
          <div>
            <a>Community Hub</a>
            <a>Forum</a>
          </div>
          <div className={styles.productDropdownIcons}>
            {social.map(({logo, url}) => (
              <a {...url}>
                <LogoThemedImage logo={logo} />
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
