import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Buttons from '../components/Buttons';
import Heading from '@theme/Heading'

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header className={clsx(styles.title, styles.heroBanner)}>
        <Heading as="h1" className="hero_title">
          Polytech Tours
        </Heading>
        <Heading as="h2" className='hero_title'>
           Répertoire des cours
        </Heading>
      </header>
      <main className={clsx("hero hero--primary", styles.main)}>
        <Buttons />
      </main>
    </Layout>
  );
}
