import React from 'react';
import styles from './index.module.scss';
import Image from '@theme/IdealImage';

import LogoTwitter from './assets/logo-twitter.png';
import LogoDiscord from './assets/logo-discord.png';
import LogoGithub from './assets/logo-github.png';

import LogoAppflow from './assets/logo-appflow.png';
import LogoPortals from './assets/logo-portals.png';
import LogoEnterpriseSDK from './assets/logo-enterprise-sdk.png';
import LogoFramework from './assets/logo-framework.png';
import LogoCapacitor from './assets/logo-capacitor.png';
import LogoStencil from './assets/logo-stencil.png';

import IconMore from './assets/icon-more.png';

export default function ProductDropdown(props) {
  return (
    <div>
      <button>
        Specific Product Stub
        <Image width={12} height={12} img={IconMore} />
      </button>
      <div className={styles.productStart}>
        <article>
          <h2>Products</h2>
          <ul>
            <li>
              <a href="https://ionic.io/docs/appflow">
                <Image width={20} height={20} img={LogoAppflow} />
                Appflow
              </a>
            </li>
            <li>
              <a href="https://ionic.io/docs/portals">
                <Image width={20} height={20} img={LogoPortals} />
                Portals
              </a>
            </li>
            <li>
              <a href="https://ionic.io/docs/enterprise-sdk">
                <Image width={20} height={20} img={LogoEnterpriseSDK} />
                Enterprise SDK
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h2>Open Source</h2>
          <ul>
            <li>
              <a>
                <Image width={20} height={20} img={LogoFramework} />
                Ionic Framework
              </a>
            </li>
            <li>
              <a>
                <Image width={20} height={20} img={LogoCapacitor} />
                Capacitor
              </a>
            </li>
            <li>
              <a>
                <Image width={20} height={20} img={LogoStencil} />
                Stencil
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div>
        <div>
          <a>Community Hub</a>
          <a>Forum</a>
        </div>
        <div>
          <Image width={17} height={14} img={LogoTwitter} />
          <Image width={18} height={14} img={LogoDiscord} />
          <Image width={17} height={16} img={LogoGithub} />
        </div>
      </div>
    </div>
  );
}
