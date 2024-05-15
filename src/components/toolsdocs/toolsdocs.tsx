import React, { useState } from 'react';
import HeaderMegaMenu from '../MainMenu/HeaderMegaMenu';
import styles from './toolsdocs.module.css';

import cx from 'clsx';
import { Box, Text, Group, rem } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './TableOfContentsFloating.module.css';

const links = [
  { label: 'Introduction', link: '#usage', order: 1, content: 'Welcome to our documentation hub, where you can learn more about our platform. Explore our 20+ tools which can be used for reconnaissance, vulnerability scanning, and offensive actions.\n\nYou’ll uncover three key elements:\n\n1. How our tools work, gaining insights into their functionality and operations.\n2. Explore the parameters you can fine-tune, allowing you to tailor the tools to your specific needs.\n3. See the tests our tools perform, providing a clear understanding of their capabilities and how they can benefit you' },
  { label: 'tools', link: '#1', order: 1 },
  { label: 'port scanner', link: '#2', order: 2 },
  { label: 'URL Fuzzer', link: '#3', order: 2 },
  { label: 'WordPress Scanner', link: '#4', order: 2 },
  { label: 'DNS Server Scanner', link: '#5', order: 2 },
  { label: 'SQLi Scanner', link: '#6', order: 2 },
  { label: 'certificate scanner', link: '#7', order: 2 },
  { label: 'Linked-pages checker', link: '#8', order: 2 },
];

export function TableOfContentsFloating() {
  const [active, setActive] = useState(0);
  const [content, setContent] = useState('');

  const handleLinkClick = (index, content) => {
    setActive(index);
    setContent(content);
  };

  const items = links.map((item, index) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        handleLinkClick(index, item.content);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className={classes.root}>
      <Group mb="md">
        <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Tools Documentation</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
      {active === 0 && <Text>{content}</Text>}
    </div>
  );
}

const ToolsDocs: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderMegaMenu /> {/* Just for consistency, you can remove this line if not needed */}
      <div className={styles.TableOfContentsFloating}>
        <TableOfContentsFloating />
      </div>
      <div className={styles.content}>
        {/* Your content here */}
        {/* You can place your content component or text here */}
      </div>
    </div>
  );
}

export default ToolsDocs;
