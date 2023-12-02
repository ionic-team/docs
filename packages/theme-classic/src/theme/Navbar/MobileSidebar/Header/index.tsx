/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useNavbarMobileSidebar, useThemeConfig } from '@docusaurus/theme-common/internal';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import { translate } from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import clsx from 'clsx';

import styles from './index.module.scss';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose />
    </button>
  );
}

export default function NavbarMobileSidebarHeader(): JSX.Element {
  //TODO: strongly typed theme config
  const {
    sidebar: { backButton, versionDropdown },
  } = useThemeConfig() as any;

  if (versionDropdown && !('dropdownItemsBefore' in versionDropdown)) {
    versionDropdown.dropdownItemsBefore = [];
  }
  if (versionDropdown && !('dropdownItemsAfter' in versionDropdown)) {
    versionDropdown.dropdownItemsAfter = [];
  }

  return (
    <div className="navbar-sidebar__brand">
      {backButton && (
        <a {...backButton.url} className={clsx(styles.backButton, backButton.class, 'back-button')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7H3.85011L9.4502 1.39991L8 0L0 8L8 16L9.39986 14.6L3.85011 9H16V7Z" fill="currentColor"></path>
          </svg>
        </a>
      )}
      <NavbarLogo />
      <NavbarColorModeToggle className="margin-right--md" />
      {versionDropdown && <DocsVersionDropdownNavbarItem {...versionDropdown} />}
      <CloseButton />
    </div>
  );
}
