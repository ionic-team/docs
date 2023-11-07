/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Options as DocsPluginOptions } from '@docusaurus/plugin-content-docs';
import type { Options as PagesPluginOptions } from '@docusaurus/plugin-content-pages';
import type { Options as SitemapPluginOptions } from '@docusaurus/plugin-sitemap';
import type { Options as GTMPluginOptions } from '@docusaurus/plugin-google-tag-manager';
import type { Options as ThemeOptions } from '@docusaurus/theme-classic';
import type { ThemeConfig as BaseThemeConfig } from '@docusaurus/types';
import type { UserThemeConfig as ClassicThemeConfig, NavbarLogo } from '@docusaurus/theme-common';
import type { UserThemeConfig as AlgoliaThemeConfig } from '@docusaurus/theme-search-algolia';
import { Props as DocsVersionDropdownProps } from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import { HTMLAttributes, Key } from 'react';
export type Options = {
    /**
     * Options for `@docusaurus/plugin-debug`. Use `false` to disable, or `true`
     * to enable even in production.
     */
    debug?: boolean;
    /** Options for `@docusaurus/plugin-content-docs`. Use `false` to disable. */
    docs?: false | DocsPluginOptions;
    /** Options for `@docusaurus/plugin-content-pages`. Use `false` to disable. */
    pages?: false | PagesPluginOptions;
    /** Options for `@docusaurus/plugin-sitemap`. Use `false` to disable. */
    sitemap?: false | SitemapPluginOptions;
    /** Options for `@docusaurus/theme-classic`. */
    theme?: ThemeOptions;
    /**
     * Options for `@docusaurus/plugin-google-tag-manager`. Only enabled when the key
     * is present.
     */
    googleTagManager?: GTMPluginOptions;
};
type TextLink = {
    key?: Key;
    label?: string;
    url?: HTMLAttributes<HTMLAnchorElement>;
};
type IconLink = {
    key?: Key;
    url?: HTMLAttributes<HTMLAnchorElement>;
    logo?: NavbarLogo;
};
type LogoAfter = {
    html: string;
} & HTMLAttributes<HTMLDivElement>;
type CustomThemeConfig = {
    sidebar: {
        versionDropdown?: Pick<DocsVersionDropdownProps, 'dropdownItemsBefore' | 'dropdownItemsAfter' | 'docsPluginId' | 'dropdownActiveClassDisabled'>;
        productDropdown?: {
            title: string;
            logo: NavbarLogo;
        };
        textLinks?: TextLink[];
        iconLinks?: IconLink[];
        backButton?: {
            url: HTMLAttributes<HTMLAnchorElement>;
        };
    };
    logo: NavbarLogo & {
        after: LogoAfter;
    };
};
export type ThemeConfig = BaseThemeConfig & ClassicThemeConfig & AlgoliaThemeConfig & CustomThemeConfig;
export {};
