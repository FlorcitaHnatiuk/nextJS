import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'englishIT',
        href: '/'
    },
    {
        text: 'Nosotros',
        href: '/about'
    },
    {
        text: 'Contacto',
        href: '/contact'
    },
    {
        text: 'Precios',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({ text, href }) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }
        </nav>
    );
};