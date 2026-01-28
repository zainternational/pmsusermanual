// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hotelium PMS Manual',
  tagline: 'Hotelium Property Management System User Manual',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL for the user manual (docs subdomain)
  url: 'https://docs.hotelium.com.mm',
  // Site is served at the root of the docs subdomain
  baseUrl: '/',

  // Explicit trailingSlash for GitHub Pages (avoids redirects and SEO issues)
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hotelium',
  projectName: 'pmsusermanual',

  onBrokenLinks: 'throw',

  scripts: [
    { src: '/js/back-to-top.js', defer: true },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false, // set true only when project is in a git repo, else build fails with "fatal: not a git repository"
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    /** @type {import('@docusaurus/types').PluginConfig} */
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Hotelium PMS Manual',
        logo: {
          alt: 'Hotelium Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              { label: 'Quick start', to: '/docs/quickstart' },
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Operations', to: '/docs/operations/overview' },
              { label: 'Configuration', to: '/docs/configuration/overview' },
              { label: 'Using this manual', to: '/docs/general/using-this-manual' },
            ],
          },
          {
            title: 'Powered by',
            items: [
              { label: 'Docusaurus', href: 'https://docusaurus.io' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Hotelium PMS · User Manual v1.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
