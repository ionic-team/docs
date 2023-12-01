/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { Props } from '@theme/Icon/LightMode';

export default function IconLightMode(props: Props): JSX.Element {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.30769 3.38462C4.30769 2.20692 4.48115 1.015 4.92308 0C1.98346 1.27962 0 4.28154 0 7.69231C0 12.2804 3.71962 16 8.30769 16C11.7185 16 14.7204 14.0165 16 11.0769C14.985 11.5188 13.7931 11.6923 12.6154 11.6923C8.02731 11.6923 4.30769 7.97269 4.30769 3.38462Z"
        fill="currentColor"
      />
    </svg>
  );
}
