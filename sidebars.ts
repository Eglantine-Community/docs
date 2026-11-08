import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'User Documentation',
      collapsible: true,
      items: [
        'user/README',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'user/QuickStart',
            'user/Basics',
            'user/Architectures',
            'user/CommandLine',
          ],
        },
        {
          type: 'category',
          label: 'Controls & Input',
          items: [
            'user/Controllers',
            'user/GyroControls',
          ],
        },
        {
          type: 'category',
          label: 'Graphics & Performance',
          items: [
            'user/Graphics',
            'user/Native',
            'user/Orphaned',
          ],
        },
        {
          type: 'category',
          label: 'Audio',
          items: [
            'user/Audio',
          ],
        },
        {
          type: 'category',
          label: 'Modding',
          items: [
            'user/Mods',
            'user/CFW',
            'user/InstallingAtmosphereMods',
            'user/ImportingSaves',
            'user/InstallingUpdatesDLC',
          ],
        },
        {
          type: 'category',
          label: 'Multiplayer',
          items: [
            'user/Multiplayer',
            'user/ServerHosting',
          ],
        },
        {
          type: 'category',
          label: 'Data Management',
          items: [
            'user/Storage',
            'user/HowToAccessLogs',
            'user/SyncthingGuide',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'user/Settings',
            'user/SteamROM',
            'user/Troubleshoot',
            'user/AlterDateTime',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Build Guide',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Main Build',
          items: [
            'Build',
            'Options',
            'Deps',
            'CrossCompile',
            'Caveats',
            'DriverBugs',
          ],
        },
        {
          type: 'category',
          label: 'Platform-Specific',
          items: [
            'build/Android',
            'build/OlderCommits',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Core Development',
          items: [
            'Development',
            'DesignOverview',
            'HosKernel',
            'CPMUtil',
            'Debug',
          ],
        },
        {
          type: 'category',
          label: 'NX2',
          items: [
            'nx2/debug-mcp',
          ],
        },
        'dynarmic/README',
        'developer/game-presets',
      ],
    },
    {
      type: 'category',
      label: 'Policies',
      collapsible: true,
      items: [
        'policies/AI',
        'policies/Coding',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      collapsible: true,
      items: [
        'performance/MKW-INTEGRATION',
      ],
    },
    {
      type: 'category',
      label: 'Dynarmic',
      collapsible: true,
      items: [
        'dynarmic/Design',
      ],
    },
    {
      type: 'category',
      label: 'GPU',
      collapsible: true,
      items: [
        'NvidiaGpu',
      ],
    },
  ],
};

export default sidebars;
