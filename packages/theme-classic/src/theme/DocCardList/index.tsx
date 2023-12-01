import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

export default function DocCardList(props): JSX.Element {
  return <div className={clsx('doc-card-list', styles.cards, props.className)}>{props.children}</div>;
}
