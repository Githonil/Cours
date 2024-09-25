import React from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common'
import Link from "@docusaurus/Link";

const links = [
    {
        id: 'algo',
        title: 'Algorithmique',
        Svg: require('@site/static/img/algo-ico.svg').default,
        link: '/docs/category/algorithmique/'
    },
    {
        id: 'math',
        title: 'Mathématiques',
        Svg: require('@site/static/img/math-ico.svg').default,
        link: '/docs/category/mathématiques/'
    },
    {
        id: 'os',
        title: 'Architecture et OS',
        Svg: require('@site/static/img/archi-ico.svg').default,
        link: '/docs/category/architecture-et-os/'
    },
    {
        id: 'c',
        title: 'Langage C',
        Svg: require('@site/static/img/prog-ico.svg').default,
        link: '/docs/category/langage-c/'
    },
    {
        id: 'anglais',
        title: 'Anglais',
        Svg: require('@site/static/img/en-ico.svg').default,
        link: '/docs/category/anglais/'
    },
];

function Button({id, title, link, Svg}) {
    return (
        <Link className={styles.linkPage} to={link}>
            <Svg id={id} role="img" className={styles.imgButton}/>
      {title}</Link>
    );
}

export default function HomepageFeatures() {
    return (
        <article className={styles.linkHead}>
            {links.map((props, idx) => (
                <Button key={idx} {...props}></Button>
            ))}
        </article>
    );
}