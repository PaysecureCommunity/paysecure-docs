const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const branding = require('./branding.config');

// Set brand from env or default
const brand = process.env.BRAND || 'paysecure';
const config = branding[brand] || {};

// Fallback required fields
const title = config.title || 'Default API Docs';
const url = config.url || 'https://example.com';
const baseUrl = config.baseUrl || '/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title,
  tagline: config.tagline || 'Default tagline',
  url,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: config.favicon || 'img/favicon.ico',
  organizationName: 'Paysecure',
  projectName: 'paysecure-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: config.github || 'https://github.com/default-org/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: title,
      logo: {
        alt: 'API Docs',
        src: 'img/fundsstream_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'API Reference',
        },
        { to: '/docs/guide', label: 'Guides', position: 'left' },
        {
          href: config.github || 'https://github.com/default-org/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: (config.theme && config.theme.footerStyle) || 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'API Reference', to: '/docs/api-reference/intro' },
            { label: 'Authentication', to: '/docs/authentication' },
            { label: 'Payment Methods', to: '/docs/payment-methods' },
            { label: 'FAQ', to: '/docs/FAQ' },
            { label: 'Support', to: '/docs/support' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Guides', to: '/docs/guide' },
            { label: 'GitHub', href: config.github || '#' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fundstream`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
