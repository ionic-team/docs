/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { Props } from '@theme/Icon/ExternalLink';

import styles from './styles.module.css';

export default function IconExternalLink({ width = 9, height = 9 }: Props): JSX.Element {
  return (
    <svg
      className={styles.iconExternalLink}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M9 7.91H7.33V2.9L1.22 9 0 7.78l6.11-6.1H1.08V0H9v7.91Z" />
    </svg>
  );
}
