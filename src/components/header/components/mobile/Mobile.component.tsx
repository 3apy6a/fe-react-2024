import { CartComponent } from '@/components/header/components/shared/Cart.component.tsx';
import { LogoComponent } from '@/components/header/components/shared/Logo.component.tsx';

import styles from './mobile.module.css';

export const MobileComponent = () => (
    <header className={styles.header}>
        <LogoComponent />
        <ul className={styles.menu}>
            <li>
                <CartComponent />
            </li>
            <li>
                <a href={'#'}>
                    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 8.75H23.25M0.75 1.25H23.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </header>
);
