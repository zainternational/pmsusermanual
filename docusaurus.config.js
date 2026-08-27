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
  // future: {
  //   v4: true, // disabled — causes admonitions (:::tip) to not render in .md files
  // },

  // === DEPLOYMENT TARGET (uncomment one) ===

  // Option A: GitHub Pages
  // url: 'https://zainternational.github.io',
  // baseUrl: '/pmsusermanual/',
  // organizationName: 'zainternational',
  // projectName: 'pmsusermanual',
  // deploymentBranch: 'gh-pages',

  // Option B: hotelium.com.mm/docs/ (subfolder on main site)
  //
  // Must include `www.`: the site 301s the apex to www, so an apex `url` makes
  // every canonical tag and every sitemap entry point at a URL that redirects.
  // Google reports those as "Page with redirect" instead of indexing them.
  url: 'https://www.hotelium.com.mm',
  baseUrl: '/docs/',

  // Explicit trailingSlash for GitHub Pages (avoids redirects and SEO issues)
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Script path is absolute from site root
  scripts: [
    { src: '/docs/js/back-to-top.js', defer: true },
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
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
        docsRouteBasePath: '/',
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
          href: 'https://www.hotelium.com.mm/',
          target: '_self',
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
              { label: 'Quick start', to: '/quickstart' },
              { label: 'Introduction', to: '/intro' },
              { label: 'Operations', to: '/operations/overview' },
              { label: 'Configuration', to: '/configuration/overview' },
              { label: 'Using this manual', to: '/general/using-this-manual' },
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
