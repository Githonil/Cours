// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cours',
  tagline: 'Tous mes cours',
  favicon: '/img/logo.svg',

  // Set the production url of your site here
  url: 'https://githonil.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Cours/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'githonil', // Usually your GitHub org/user name.
  projectName: 'Cours', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  stylesheets: [
    {
      href: '/Cours/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Githonil/Cours/blob/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mes Cours',
        logo: {
          alt: 'logo',
          src: '/img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'algoSidebar',
            position: 'left',
            label: 'Algorithmique',
          },{
            type: 'docSidebar',
            sidebarId: 'mathSidebar',
            position: 'left',
            label: 'Mathématiques',
          },
          {
            type: 'docSidebar',
            sidebarId: 'archiSidebar',
            position: 'left',
            label: 'Architecture et OS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cSidebar',
            position: 'left',
            label: 'Langage C',
          },
          {
            type: 'docSidebar',
            sidebarId: 'anglaisSidebar',
            position: 'left',
            label: 'Anglais',
          },
          {
            href: 'https://ent.univ-tours.fr/uPortal/f/welcome/normal/render.uP',
            label: 'ENT',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
