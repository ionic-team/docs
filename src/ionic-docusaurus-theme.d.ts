/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// declare module '@docusaurus/theme-search-algolia' {
//   import type { DeepPartial } from 'utility-types';

//   export type ThemeConfig = {
//     algolia: {
//       contextualSearch: boolean;
//       externalUrlRegex?: string;
//       appId: string;
//       apiKey: string;
//       indexName: string;
//       searchParameters: Record<string, unknown>;
//       searchPagePath: string | false | null;
//     };
//   };
//   export type UserThemeConfig = DeepPartial<ThemeConfig>;
// }

declare module '@theme/NavbarItem/NavbarIconLink' {
  export default function NavbarIconLink(): JSX.Element;
}

declare module '@theme/NavbarItem/NavbarSeparator' {
  export default function NavbarSeparator(): JSX.Element;
}

declare module '@theme/NavbarItem/NavbarCta' {
  export default function NavbarCta(): JSX.Element;
}
