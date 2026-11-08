import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Eglantine',
  tagline: 'A Switch 2 emulator.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.eglantine-emu.org',
  baseUrl: '/',

  organizationName: 'Eglantine-Community',
  projectName: 'docs',

  onBrokenLinks: 'warn',      // switch to 'throw' once the links are cleaned up
  onBrokenAnchors: 'warn',

  // Existing .md files were not written for MDX: parse them as plain
  // CommonMark, and only .mdx files as MDX.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // editUrl is joined with the file path relative to the site root,
          // so this resolves to .../tree/master/content/<file>.md
          editUrl: 'https://github.com/Eglantine-Community/docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Eglantine',
      logo: {
        alt: 'Eglantine logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://eglantine-emu.org',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/Eglantine-Community/Eglantine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Quick start', to: '/user/QuickStart'},
            {label: 'Building', to: '/Build'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Website', href: 'https://eglantine-emu.org'},
            {label: 'GitHub', href: 'https://github.com/Eglantine-Community/Eglantine'},
            {label: 'Docs repository', href: 'https://github.com/Eglantine-Community/docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eglantine Community. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // add languages used in your code blocks if highlighting is missing
      additionalLanguages: ['bash', 'cmake', 'ini', 'powershell', 'nix'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;