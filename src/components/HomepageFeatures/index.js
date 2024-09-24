import clsx from "clsx";
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const links = [
    {
        id: 'algo',
        title: 'Algorithmique',
        link: '/docs/category/algorithmique/'
    },
    {
        id: 'math',
        title: 'Mathématiques',
        link: '/docs/category/mathématiques/'
    },
    {
        id: 'os',
        title: 'Architecture et OS',
        link: '/docs/category/architecture-et-os/'
    },
    {
        id: 'c',
        title: 'Langage C',
        link: '/docs/category/langage-c/'
    },
    {
        id: 'anglais',
        title: 'Anglais',
        link: '/docs/category/anglais/'
    },
];

function Button({id, title, link}) {
    return (
        <Link className={styles.linkPage} to={link}>{title}</Link>
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