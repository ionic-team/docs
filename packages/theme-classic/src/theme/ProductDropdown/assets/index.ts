import LogoTwitter from './light/logo-twitter.png';
import LogoTwitterDark from './dark/logo-twitter.png';

import LogoDiscord from './light/logo-discord.png';
import LogoDiscordDark from './dark/logo-discord.png';

import LogoGithub from './light/logo-github.png';
import LogoGithubDark from './dark/logo-github.png';

import LogoAppflow from './light/logo-appflow.png';
import LogoAppflowDark from './dark/logo-appflow.png';

import LogoPortals from './light/logo-portals.png';
import LogoPortalsDark from './dark/logo-portals.png';

import LogoEnterpriseSdk from './light/logo-enterprise-sdk.png';
import LogoEnterpriseSdkDark from './dark/logo-enterprise-sdk.png';

import LogoFramework from './light/logo-framework.png';
import LogoFrameworkDark from './dark/logo-framework.png';

import LogoCapacitor from './light/logo-capacitor.png';
import LogoCapacitorDark from './dark/logo-capacitor.png';

import LogoStencil from './light/logo-stencil.png';
import LogoStencilDark from './dark/logo-stencil.png';

export default {
  products: [
    {
      logo: {
        src: LogoAppflow,
        srcDark: LogoAppflowDark,
        width: 20,
        height: 20,
        alt: 'appflow logo',
      },
      title: 'Appflow',
      url: {
        href: 'https://ionic.io/docs/appflow',
      },
    },
    {
      logo: {
        src: LogoPortals,
        srcDark: LogoPortalsDark,
        width: 20,
        height: 20,
        alt: 'portals logo',
      },
      title: 'Portals',
      url: {
        href: 'https://ionic.io/docs/portals',
      },
    },
    {
      logo: {
        src: LogoEnterpriseSdk,
        srcDark: LogoEnterpriseSdkDark,
        width: 20,
        height: 20,
        alt: 'Enterprise SDK logo',
      },
      title: 'Enterprise SDK',
      url: {
        href: 'https://ionic.io/docs/portals',
      },
    },
  ],
  os: [
    {
      logo: {
        src: LogoFramework,
        srcDark: LogoFrameworkDark,
        width: 20,
        height: 20,
        alt: 'Ionic Framework logo',
      },
      title: 'Ionic Framework',
      url: {
        href: 'https://ionicframework.com/docs',
      },
    },
    {
      logo: {
        src: LogoCapacitor,
        srcDark: LogoCapacitorDark,
        width: 20,
        height: 20,
        alt: 'Capacitor logo',
      },
      title: 'Capacitor',
      url: {
        href: 'https://capacitorjs.com/docs',
      },
    },
    {
      logo: {
        src: LogoStencil,
        srcDark: LogoStencilDark,
        width: 20,
        height: 16,
        alt: 'Stencil logo',
      },
      title: 'Stencil',
      url: {
        href: 'https://stenciljs.com/docs',
      },
    },
  ],
  textLinks: [
    {
      url: { href: 'https://ionic.link/discord', target: '_blank', rel: 'noopener nofollow' },
      label: 'Community Hub',
    },
    {
      url: {
        href: 'https://forum.ionicframework.com',
        target: '_blank',
        rel: 'noopener nofollow',
      },
      label: 'Forum',
    },
  ],
  iconLinks: [
    {
      key: 'twitter',
      logo: {
        src: LogoTwitter,
        srcDark: LogoTwitterDark,
        width: 17,
        height: 14,
        alt: 'Twitter logo',
      },
      url: {
        href: 'https://twitter.com/ionicframework',
      },
    },
    {
      key: 'discord',
      logo: {
        src: LogoDiscord,
        srcDark: LogoDiscordDark,
        width: 18,
        height: 14,
        alt: 'Discord logo',
      },
      url: {
        href: 'https://ionic.link/discord',
      },
    },
    {
      key: 'github',
      logo: {
        src: LogoGithub,
        srcDark: LogoGithubDark,
        width: 17,
        height: 16,
        alt: 'Github logo',
      },
      url: {
        href: 'https://github.com/ionic-team',
      },
    },
  ],
};
