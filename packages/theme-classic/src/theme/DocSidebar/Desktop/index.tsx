/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import NavbarLogo from '@theme/Navbar/Logo';
import ProductDropdown from '../../ProductDropdown';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import type {Props} from '@theme/DocSidebar/Desktop';

import styles from './styles.module.scss';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}: Props) {
  //TODO: strongly typed theme config
  const {
    navbar: {hideOnScroll, items},
    docs: {
      sidebar: {hideable},
    },
    sidebar: {backButton},
  } = useThemeConfig() as any;

  const dropdownItem: any = items.find(
    (item) => item.type === 'docsVersionDropdown',
  );

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      <div className={styles.sidebarTop}>
        {backButton && (
          <a {...backButton} className={clsx(backButton.class, 'back-button')}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 7H3.85011L9.4502 1.39991L8 0L0 8L8 16L9.39986 14.6L3.85011 9H16V7Z"
                fill="currentColor"></path>
            </svg>
          </a>
        )}
        <div className={styles.sidebarTopEnd}>
          <Logo />
          {dropdownItem && <DocsVersionDropdownNavbarItem {...dropdownItem} />}
        </div>
      </div>
      <ProductDropdown />
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
