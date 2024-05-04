import React from 'react';

import { CartComponent } from '@/components/header/components/shared/Cart.component.tsx';
import { DarkIconComponent } from '@/components/header/components/shared/icons/DarktIcon.component.tsx';
import { DividerIconComponent } from '@/components/header/components/shared/icons/DividerIcon.module.tsx';
import { LightIconComponent } from '@/components/header/components/shared/icons/LightIcon.component.tsx';
import { LoginIconComponent } from '@/components/header/components/shared/icons/LoginIcon.component.tsx';
import { SignUpIconComponent } from '@/components/header/components/shared/icons/SignUpIcon.component.tsx';
import { LogoComponent } from '@/components/header/components/shared/Logo.component.tsx';
import type { NavBarItem } from '@/interfaces/NavBarItem.ts';

import styles from './desktop.module.css';

export const DesktopComponent = ({ setSelectedNawBarItem }: NavBarItem) => (
    <header className={styles.header}>
        <div className={`${styles.flex} ${styles.align_center}`}>
            <LogoComponent />
            <ul className={styles.theme}>
                <li>
                    <button className={styles.theme}>
                        <LightIconComponent customClasses={styles.offset_sm} />
                    </button>
                </li>
                <li>
                    <DividerIconComponent customClasses={styles.offset_sm} />
                </li>
                <li>
                    <button className={styles.theme}>
                        <DarkIconComponent customClasses={styles.offset_sm} />
                    </button>
                </li>
            </ul>
        </div>
        <div className={`${styles.flex} ${styles.align_center}`}>
            <ul className={styles.list}>
                <li>
                    <button className={`${styles.text_decoration} ${styles.color_white}`} onClick={() => setSelectedNawBarItem('About')}>
                        About
                    </button>
                </li>
                <li>
                    <button className={`${styles.text_decoration} ${styles.color_white}`} onClick={() => setSelectedNawBarItem('Products')}>
                        Products
                    </button>
                </li>
                <li>
                    <CartComponent />
                </li>
                <li className={styles.offset_md}>
                    <a className={styles.login} href="/login">
                        <LoginIconComponent customClasses={styles.offset_sm} />
                        Login
                    </a>
                </li>
                <li>
                    <a className={styles.sign_up} href="/sign-up">
                        <SignUpIconComponent customClasses={styles.offset_sm} />
                        Sign up
                    </a>
                </li>
            </ul>
        </div>
    </header>
);
