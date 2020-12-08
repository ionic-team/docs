import React from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { LogoMark } from '@theme/icons';

import './breadcrumbs.css';

function NavbarBreadcrumb() {
  const { siteConfig: { baseUrl } } = useDocusaurusContext();
  const { pathname } = useLocation();  
  const urlSegments = pathname.split('/');
  const leafPageSegment = urlSegments[urlSegments.indexOf('docs') + 1];

  let leafPageName;
  if (leafPageSegment) {
    leafPageName = leafPageSegment;

    if (leafPageName === 'cli') {
      leafPageName = leafPageName.toUpperCase();
    } else {
      leafPageName = leafPageName.split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }
  }

  return (
    <div className="breadcrumb">
      <a href={'https://ionic.io/'} className="breadcrumb__logo">
        <LogoMark />
      </a>
      / 
      {(pathname === baseUrl) 
        ? <span className={'breadcrumb__item breadcrumb__item--active'}>
            Docs
          </span>
        : <Link to={baseUrl} className={'breadcrumb__item'}>
            Docs
          </Link>
      }

      {leafPageSegment && 
        <>
          /
          <span className={clsx('breadcrumb__item breadcrumb__item--active', `breadcrumb__item--${leafPageSegment}`)}>
            {leafPageName}
          </span>
        </>
      }
    </div>
  )
}

export default NavbarBreadcrumb;
