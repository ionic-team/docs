import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

function DocsCards(props): JSX.Element {
  return (
    <div className={clsx('docs-cards', styles.cards, props.className)}>
      {props.children}
    </div>
  );
}

export default DocsCards;
