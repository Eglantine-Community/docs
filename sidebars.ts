import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user/QuickStart',
        'user/Basics',
        'user/Architectures',
        'user/Controllers',
        'user/Graphics',
        'user/Mods',
        'user/Multiplayer',
        'user/Settings',
        'user/CommandLine',
        'user/UsingAmiibo',
        'user/UsingCheats',
        'user/InstallingAtmosphereMods',
        'user/ImportingSaves',
        'user/ServerHosting',
        'user/Storage',
        'user/GyroControls',
        'user/ThirdParty',
        'user/InstallingUpdatesDLC',
        'user/Native',
        'user/HowToAccessLogs',
        'user/Testing',
        'user/SteamROM',
        'user/Orphaned',
        'user/Troubleshoot',
      ],
    },
    {
      type: 'category',
      label: 'Build Guide',
      items: [
        'Build',
        'Options',
        'Deps',
        'CrossCompile',
        'build/Android',
        'build/OlderCommits',
        'Caveats',
        'DriverBugs',
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        'Development',
        'DesignOverview',
        'HosKernel',
        'CPMUtil',
        'Debug',
        'Nx2DebugMcp',
        'dynarmic/README',
        'dynarmic/Design',
        'NvidiaGpu',
        'policies/Coding',
        'policies/AI',
      ],
    },
    {
      type: 'category',
      label: 'NX2',
      items: [
        'nx2/debug-mcp',
      ],
    },
  ],
};

export default sidebars;
