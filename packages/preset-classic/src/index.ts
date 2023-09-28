/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Preset, LoadContext, PluginConfig, PluginOptions } from '@docusaurus/types';
import type { Options, ThemeConfig } from './options';
import type { Plugin as PostCssPlugin } from 'postcss';

function makePluginConfig(source: string, options?: PluginOptions): string | [string, PluginOptions] {
  if (options) {
    return [require.resolve(source), options];
  }
  return require.resolve(source);
}

export default function preset(context: LoadContext, opts: Options = {}): Preset {
  const { siteConfig, siteDir } = context;
  const { themeConfig } = siteConfig;
  const { algolia } = themeConfig as Partial<ThemeConfig>;
  const isProd = process.env.NODE_ENV === 'production';
  const { debug, docs, pages, sitemap, theme, googleTagManager, ...rest } = opts;

  const themes: PluginConfig[] = [];

  themes.push(makePluginConfig('@docusaurus/theme-classic', theme));
  themes.push(makePluginConfig('@ionic-docs/theme-classic', theme));
  if (algolia) {
    themes.push(require.resolve('@docusaurus/theme-search-algolia'));
  }

  const plugins: PluginConfig[] = [];

  //CUSTOM CODE
  plugins.push(makePluginConfig('@docusaurus/plugin-ideal-image'));
  plugins.push(makePluginConfig('docusaurus-plugin-sass'));
  plugins.push(function () {
    return {
      name: 'scope-styles',
      configurePostCss(postCssOptions) {
        const plugin: PostCssPlugin = {
          postcssPlugin: 'scope-styles',
          prepare: (result) => {
            const isBaseStyle = result.opts.from?.includes('@docusaurus');
            const isDsStyle =
              result.opts.from?.includes('@ionic-internal/design-system') || result.opts.from?.includes('infima');
            const isPresetStyle = result.opts.from?.includes('@ionic-internal/preset-classic'); // || result.opts.from.includes('Ionic/preset-classic'); // For Dev
            const isLocalStyle = result.opts.from?.includes(siteDir);

            const param = isBaseStyle
              ? 'base'
              : isDsStyle
              ? 'ds'
              : isPresetStyle
              ? 'preset'
              : isLocalStyle
              ? 'local'
              : null;

            if (!param) {
              throw new Error(`Unable to determine layer for ${result.opts.from}`);
            }

            return {
              Once(root, { AtRule }) {
                const layer = new AtRule({ name: 'layer', params: param });
                root.each((node) => {
                  layer.append(node);
                });
                root.removeAll();
                root.append(layer);
              },
            };
          },
        };
        postCssOptions.plugins.push(plugin);

        return postCssOptions;
      },
    };
  });
  plugins.push(function () {
    return {
      name: 'docusaurus-cascade-layers',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.push(require('postcss-import'));
        postcssOptions.plugins.push(require('@csstools/postcss-cascade-layers'));
        return postcssOptions;
      },
    };
  });

  if (docs !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-content-docs', docs));
  }
  if (pages !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-content-pages', pages));
  }
  if (debug || (debug === undefined && !isProd)) {
    plugins.push(require.resolve('@docusaurus/plugin-debug'));
  }
  if (googleTagManager) {
    plugins.push(makePluginConfig('@docusaurus/plugin-google-tag-manager', googleTagManager));
  }
  if (isProd && sitemap !== false) {
    plugins.push(makePluginConfig('@docusaurus/plugin-sitemap', sitemap));
  }
  if (Object.keys(rest).length > 0) {
    throw new Error(
      `Unrecognized keys ${Object.keys(rest).join(
        ', ',
      )} found in preset-classic configuration. The allowed keys are debug, docs, blog, pages, sitemap, theme, googleAnalytics, gtag. Check the documentation: https://docusaurus.io/docs/using-plugins#docusauruspreset-classic for more information on how to configure individual plugins.`,
    );
  }

  return { themes, plugins };
}

export type { Options, ThemeConfig };
