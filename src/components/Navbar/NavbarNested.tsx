import React from 'react';
import { Group, Code, ScrollArea, Divider } from '@mantine/core';
import {
  IconAsset,
  IconScan,
  IconGauge,
  IconAdjustments,
  IconLock,
  IconLogout,
} from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './NavbarNested.module.css';
import Dashboard from './pages/Dashboard/Dashboard';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/Dashboard' },
  {
    label: 'Assets',
    icon: IconAsset,
    initiallyOpened: true,
    link: '/assets',
  },
  {
    label: 'Scans',
    icon: IconScan,
    link: '/scans',
  },
  { label: 'Settings', icon: IconAdjustments, link: '/settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/enable-2fa' },
      { label: 'Change password', link: '/change-password' },
      { label: 'Recovery codes', link: '/recovery-codes' },
    ],
  },
  { label: 'Logout', icon: IconLogout, link: '/login' },
];

export function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <Group justify="space-between">
            <Code fw={700}>v3.1.2</Code>
          </Group>
        </div>
        <Divider className={classes.divider} />
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
        <div className={classes.footer}>
          <UserButton />
        </div>
      </div>
      <div className={classes.customSection}>
        {/* Add your custom content here */}
      </div>
    </nav>
  );
}
