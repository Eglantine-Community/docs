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

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Use MDX format exclusively
  markdown: {
    format: 'mdx',
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
          editUrl: 'https://github.com/Eglantine-Community/docs/tree/master/',
          remarkPlugins: [],
          rehypePlugins: [],
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
          sidebarId: 'docsSidebar',
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
      additionalLanguages: ['bash', 'cmake', 'ini', 'powershell', 'nix'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
