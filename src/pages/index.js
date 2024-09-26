import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Buttons from '../components/Buttons';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main className={clsx("hero hero--primary", styles.main)}>
        <Buttons />
      </main>
    </Layout>
  );
}
