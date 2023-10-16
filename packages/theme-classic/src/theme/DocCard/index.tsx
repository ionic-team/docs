import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  header?: string;
  icon?: string;
  hoverIcon?: string;
  img?: string;
}

export default function DocCard(props: Props): JSX.Element {
  const isStatic = typeof props.href === 'undefined';
  const isOutbound =
    typeof props.href !== 'undefined' ? /^http/.test(props.href) : false;
  const header =
    props.header === 'undefined' ? null : (
      <header className={clsx('ds-heading-5', styles.cardHeader)}>
        {props.header}
      </header>
    );
  const hoverIcon = props.hoverIcon || props.icon;

  const content = (
    <>
      {props.img && (
        <img src={useBaseUrl(props.img)} className={styles.cardImage} />
      )}
      <div className={styles.cardContainer}>
        {(props.icon || hoverIcon) && (
          <div className={styles.cardIconRow}>
            {props.icon && (
              <img
                src={useBaseUrl(props.icon)}
                className={clsx(styles.cardIcon, styles.cardIconDefault)}
              />
            )}
            {hoverIcon && (
              <img
                src={useBaseUrl(hoverIcon)}
                className={clsx(styles.cardIcon, styles.cardIconHover)}
              />
            )}
          </div>
        )}
        {props.header && header}
        <div className={styles.cardContent}>{props.children}</div>
      </div>
    </>
  );

  const className = clsx({
    [styles.cardWithImage]: typeof props.img !== 'undefined',
    [styles.cardWithoutImage]: typeof props.img === 'undefined',
  });

  if (isStatic) {
    return (
      <div className={clsx(className, styles.card, 'doc-card')}>{content}</div>
    );
  }

  if (isOutbound) {
    return (
      <a
        className={clsx(className, styles.card, 'doc-card')}
        href={props.href}
        target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link to={props.href} className={clsx(className, styles.card, 'doc-card')}>
      {content}
    </Link>
  );
}
