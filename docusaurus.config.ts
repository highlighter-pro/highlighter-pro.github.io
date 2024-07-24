import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Title for your website. Will be used in metadata and as browser tab title.
  title: 'Highlighter.pro',
  //
  tagline: 'Chrome extension',
  // favicon: 'static/img/ico/favicon.ico',
  favicon: 'img/ico/favicon.ico',

  // Set the production url of your site here
  url: 'https://highlighter.pro',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'highlighter-pro', // Usually your GitHub org/username.
  projectName: 'highlighter-pro.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // see
          // https://docusaurus.io/docs/docs-introduction#docs-only-mode
          routeBasePath: '/', // Serve the docs at the site's root

          sidebarPath: './sidebars.ts',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/highlighter-pro/highlighter-pro.github.io/tree/main/',
          showLastUpdateAuthor: false, // git username from the last commit
          showLastUpdateTime: true, // git last commit time
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/highlighter-pro/highlighter-pro.github.io/tree/main/',
          showLastUpdateTime: true, // git last commit time
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-PC2FZVPM7G',
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/highlighter-green-128.png',

    // Navbar
    navbar: {
      title: 'highlighter.pro',
      logo: {
        alt: 'Highlighter.pro Logo',
        src: 'img/highlighter-green-128.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://chromewebstore.google.com/detail/highlighterpro/gpdhplhmppgenpnkfilghnjiodfmnoap',
          label: 'Install',
          position: 'right',
        },
        {
          href: 'https://github.com/highlighter-pro/highlighter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Install',
          items: [
            {
              label: 'Chrome web store',
              href: 'https://chromewebstore.google.com/detail/highlighterpro/gpdhplhmppgenpnkfilghnjiodfmnoap',
            },
            {
              label: 'Source code',
              href: 'https://github.com/highlighter-pro/highlighter/releases',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Extension support',
              href: 'https://github.com/highlighter-pro/highlighter/issues',
            },
            {
              label: 'Website support',
              href: 'https://github.com/highlighter-pro/highlighter-pro.github.io/issues',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // copyright: `2024, Highlighter.pro`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
