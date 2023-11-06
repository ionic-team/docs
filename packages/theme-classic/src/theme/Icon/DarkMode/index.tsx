/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/Icon/DarkMode';

export default function IconDarkMode(props: Props): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8 3.2a.77.77 0 0 1-.77-.77V.77a.77.77 0 1 1 1.54 0v1.66A.77.77 0 0 1 8 3.2ZM8 16a.77.77 0 0 1-.77-.77v-1.67a.77.77 0 0 1 1.54 0v1.67A.77.77 0 0 1 8 16Zm3.94-11.17a.77.77 0 0 1-.55-1.3l1.18-1.19a.77.77 0 0 1 1.09 1.09L12.48 4.6a.76.76 0 0 1-.54.22Zm-9.06 9.05a.77.77 0 0 1-.54-1.3l1.18-1.19a.77.77 0 1 1 1.09 1.09l-1.18 1.18a.76.76 0 0 1-.55.22Zm12.35-5.11h-1.66a.77.77 0 0 1 0-1.54h1.66a.77.77 0 0 1 0 1.54Zm-12.8 0H.77a.77.77 0 1 1 0-1.54h1.66a.77.77 0 1 1 0 1.54Zm10.69 5.11a.76.76 0 0 1-.55-.22l-1.18-1.18a.77.77 0 0 1 1.09-1.09l1.18 1.18a.76.76 0 0 1-.54 1.31ZM4.06 4.83a.76.76 0 0 1-.54-.22L2.34 3.43a.77.77 0 0 1 1.09-1.09L4.6 3.52a.77.77 0 0 1-.55 1.31ZM8 11.55a3.55 3.55 0 1 1 0-7.1 3.55 3.55 0 0 1 0 7.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
