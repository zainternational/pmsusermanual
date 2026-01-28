import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoSrc = useBaseUrl('/img/logo.png');
  return (
    <header className={clsx('hero', styles.heroHotelium)}>
      <div className={clsx('container', styles.heroInner)}>
        <img src={logoSrc} alt="Hotelium" className={styles.heroLogo} />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.ctaButton} to="/docs/quickstart">
            Quick start
          </Link>
          <Link className={styles.heroSecondaryLink} to="/docs/intro">
            View documentation
          </Link>
          <Link className={styles.heroSecondaryLink} to="/docs/general/using-this-manual">
            How to use this manual
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Hotelium Property Management System User Manual - Complete guide for hotel staff">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
