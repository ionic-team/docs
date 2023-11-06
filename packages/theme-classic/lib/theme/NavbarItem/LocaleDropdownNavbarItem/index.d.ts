/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/NavbarItem/LocaleDropdownNavbarItem/index.tsx
 *
 * Reasons for overriding:
 * - Add a span with a visually hidden class in order to hide the text. We only want to show the language icon.
 * - Removed the original styles that were applied to the language icon. We want to use our own styles.
 */
import React from 'react';
export default function LocaleDropdownNavbarItem({ mobile, dropdownItemsBefore, dropdownItemsAfter, ...props }: {
    [x: string]: any;
    mobile: any;
    dropdownItemsBefore: any;
    dropdownItemsAfter: any;
}): React.JSX.Element;
