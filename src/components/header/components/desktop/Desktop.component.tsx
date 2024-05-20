import React, { useContext } from 'react';

import { CartComponent } from '@/components/header/components/shared/Cart.component.tsx';
import { DarkIconComponent } from '@/components/header/components/shared/icons/DarktIcon.component.tsx';
import { DividerIconComponent } from '@/components/header/components/shared/icons/DividerIcon.module.tsx';
import { LightIconComponent } from '@/components/header/components/shared/icons/LightIcon.component.tsx';
import { LoginIconComponent } from '@/components/header/components/shared/icons/LoginIcon.component.tsx';
import { SignUpIconComponent } from '@/components/header/components/shared/icons/SignUpIcon.component.tsx';
import { LogoComponent } from '@/components/header/components/shared/Logo.component.tsx';
import { AppContext } from '@/context/AppContext.context.tsx';
import type { AppContextProps, ColorScheme } from '@/interfaces/AppContextProps.interface.tsx';
import type { NavBarItem } from '@/interfaces/NavBarItem.ts';

import styles from './desktop.module.css';

export const DesktopComponent = ({ setSelectedNawBarItem }: NavBarItem) => {
    const appContext: AppContextProps = useContext(AppContext);

    const onToggleTheme = (color: ColorScheme) => {
        appContext.setTheme(color);
    };

    return (
        <header className={styles.header}>
            <div className={`${styles.flex} ${styles.align_center}`}>
                <LogoComponent />
                <ul className={styles.theme}>
                    <li>
                        <button
                            onClick={() => {
                                onToggleTheme('light');
                            }}
                            className={`${styles.theme} ${appContext.theme === 'dark' ? '' : styles.activeMode}`}
                        >
                            <LightIconComponent customClasses={styles.offset_sm} />
                        </button>
                    </li>
                    <li>
                        <DividerIconComponent customClasses={styles.offset_sm} />
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                onToggleTheme('dark');
                            }}
                            className={`${styles.theme} ${appContext.theme === 'dark' ? styles.activeMode : ''}`}
                        >
                            <DarkIconComponent customClasses={styles.offset_sm} />
                        </button>
                    </li>
                </ul>
            </div>
            <div className={`${styles.flex} ${styles.align_center}`}>
                <ul className={styles.list}>
                    <li>
                        <button
                            className={`${styles.text_decoration} ${styles.color_white}`}
                            onClick={() => setSelectedNawBarItem('About')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${styles.text_decoration} ${styles.color_white}`}
                            onClick={() => setSelectedNawBarItem('Products')}
                        >
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
};
