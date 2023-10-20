import React, { ComponentProps } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Image from '@theme/IdealImage';
import { useColorMode } from '@docusaurus/theme-common';
import { clsx } from 'clsx';
import type { Props } from '@theme/ThemedImage';

//TODO: import these from Ideal Image package
export type SrcType = {
  width: number;
  path?: string;
  size?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'gif';
};

//TODO: import these from Ideal Image package
export type SrcImage = {
  height?: number;
  width?: number;
  preSrc: string;
  src: string;
  images: SrcType[];
};

import styles from './index.module.scss';
import theme from './assets/theme';

//TODO: abstract these based off ideal image package
interface ThemedIdealImageProps extends ComponentProps<typeof Image> {
  src: { default: string } | { src: SrcImage; preSrc: string } | string;
  srcDark?: { default: string } | { src: SrcImage; preSrc: string } | string;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ThemedIdealImage(props: ThemedIdealImageProps) {
  const isBrowser = useIsBrowser();
  const { colorMode } = useColorMode();
  const { className, ...propsRest } = props;

  type SourceName = keyof Props['sources'];

  const clientThemes: SourceName[] = colorMode === 'dark' ? ['dark'] : ['light'];

  const renderedSourceNames: SourceName[] = isBrowser
    ? clientThemes
    : // We need to render both images on the server to avoid flash
      // See https://github.com/facebook/docusaurus/pull/3730
      ['light', 'dark'];

  return (
    <>
      {renderedSourceNames.map((sourceName) => {
        let key = sourceName === 'light' ? 'src' : `src${capitalizeFirstLetter(sourceName)}`;

        if (!(key in propsRest)) {
          key = 'src';
        }

        if (typeof propsRest[key] !== 'string' && 'src' in propsRest[key]) {
          propsRest[key].src = { ...propsRest[key].src, width: propsRest.width, height: propsRest.height };
        }

        return (
          <Image
            img={propsRest[key]}
            key={sourceName}
            className={clsx(styles.themedImage, styles[`themedImage--${sourceName}`], className)}
            theme={theme}
            {...propsRest}
          />
        );
      })}
    </>
  );
}
