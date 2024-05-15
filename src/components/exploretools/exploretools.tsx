import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMegaMenu from '../MainMenu/HeaderMegaMenu'; // Import HeaderMegaMenu component
import styles from './exploretools.module.css';
import { Card, Image, Text, Button, Group } from '@mantine/core';

interface ToolCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function DemoImage() {
  return (
    <Image
      radius="md"
      h={300}
      src="https://roche.scene7.com/is/image/RocheDiaProd/Cyber_Security_hero_Image_2880x1404?scl=1"
    />
  );
}

function ToolCard({ imageSrc, title, description }: ToolCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={styles.toolCard} // Add this className to style ToolCard
    >
      <Card.Section>
        <Image
          src={imageSrc}
          height={100} // Adjust height of the image
          alt={title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Link to="/toolsdocs">
        <Button color="blue" fullWidth mt="md" radius="md">
          tool docs
        </Button>
      </Link>
    </Card>
  );
}

const ExploreTools: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderMegaMenu />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>TOOLS</div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              Explore our full suite of pentesting tools
            </div>
          </div>
        </div>
        <DemoImage />
        <div className={styles.toolCardWrapper}>
          <div className={styles.toolCardRow}>
            <ToolCard
              imageSrc="https://miro.medium.com/v2/resize:fit:675/1*MlLvWoOg1c-PBerXGVs77w.jpeg"
              title="port scanner"
              description="Find open TCP and UDP ports. Easily map your network attack surface and discover open ports and services.                     "
            />
            <ToolCard
              imageSrc="https://media.licdn.com/dms/image/D4D12AQGzVSP3hOqLCQ/article-cover_image-shrink_720_1280/0/1693386921093?e=2147483647&v=beta&t=p7kWSRq7Q2ndvMXYWFN94MoeMs6Joz94M5McdXh8iLI" 
              title="URL Fuzzer"
              description="Discover hidden files and directories that aren’t linked in the HTML pages: .conf, .bak, .bkp, .zip, .xls, etc.  "
            />
            <ToolCard
              imageSrc="https://files.tecnoblog.net/wp-content/uploads/2019/02/wordpress-581849_1280.jpg"
              title="WordPress Scanner "
              description="This tool helps you discover security issues and vulnerabilities in the target WordPress website"
            />
            <ToolCard
              imageSrc="https://www.securitymagazine.com/ext/resources/cyber1.jpg?1588203188"
              title="DNS Server Scanner"
              description="Find name servers of a target domain vulnerable to DNS Zone. Use this scanner to retrieve the full DNS Zone file."
            />
          </div>
          <div className={styles.toolCardRow}>
            <ToolCard
              imageSrc="https://securetriad.io/wp-content/uploads/2021/05/sql-injection-attack.png"
              title="SQLi Scanner"
              description="Discover SQL injection vulnerabilities in web applications by crawling and performing a deep inspection."
            />
            <ToolCard
              imageSrc="https://f.hellowork.com/blogdumoderateur/2022/03/defis-entreprises-cybersecurite-2022.jpg"
              title="certificate scanner"
              description="Check for SSL and TLS vulnerabilities. Use it to find configuration issues & specific vulnerabilities."
            />
            <ToolCard
              imageSrc="https://mediaandmore.co.uk/wp-content/uploads/2020/03/cyber-security.jpg"
              title="Quality checker"
              description="Assess the quality of your system. Detect configuration errors, vulnerabilities, and performance issues."
            />
            <ToolCard
              imageSrc="https://www.columbiasouthern.edu/media/udobzpao/privacy-issues-in-cybersecurity.jpg"
              title="Linked-pages checker "
              description="Detect and prevent potential attacks on URLs. Identify malicious or suspicious links to enhance your security"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTools;
