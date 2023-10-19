import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Image from '@theme/IdealImage';
import { NavbarLogo, useColorMode } from '@docusaurus/theme-common';
import { clsx } from 'clsx';
import type { Props } from '@theme/ThemedImage';

import styles from './index.module.scss';

export default function ThemedIdealImage(props: NavbarLogo) {
  const isBrowser = useIsBrowser();
  const { colorMode } = useColorMode();
  const { className, src, srcDark: srcDarkWithoutFallback,  ...propsRest } = props;

  type SourceName = keyof Props['sources'];

  const clientThemes: SourceName[] = colorMode === 'dark' ? ['dark'] : ['light'];

  const renderedSourceNames: SourceName[] = isBrowser
    ? clientThemes
    : // We need to render both images on the server to avoid flash
      // See https://github.com/facebook/docusaurus/pull/3730
      ['light', 'dark'];

  const srcDark = srcDarkWithoutFallback ?? src;

  return (
    <>
      {renderedSourceNames.map((sourceName) => (
          <Image
            img={sourceName === 'light' ? src : srcDark}
            key={sourceName}
            className={clsx(styles.themedImage, styles[`themedImage--${sourceName}`], className)}
            {...propsRest}
          />
      ))}
    </>
  );
}
