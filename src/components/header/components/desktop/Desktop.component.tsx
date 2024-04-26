import classNames from 'classnames';

import { CartComponent } from '@/components/header/components/shared/Cart.component.tsx';
import { DarkIconComponent } from '@/components/header/components/shared/icons/DarktIcon.component.tsx';
import { DividerIconComponent } from '@/components/header/components/shared/icons/DividerIcon.module.tsx';
import { LightIconComponent } from '@/components/header/components/shared/icons/LightIcon.component.tsx';
import { LoginIconComponent } from '@/components/header/components/shared/icons/LoginIcon.component.tsx';
import { SignUpIconComponent } from '@/components/header/components/shared/icons/SignUpIcon.component.tsx';
import { LogoComponent } from '@/components/header/components/shared/Logo.component.tsx';

import styles from './desktop.module.css';
export const DesktopComponent = () => {
    const wrapperClasses = classNames({
        [styles.flex]: true,
        [styles.align_center]: true,
    });

    const linkClasses = classNames({
        [styles.text_decoration]: true,
        [styles.color_white]: true,
    });

    // const themeClasses = classNames({
    //     [styles.text_decoration]: true,
    //     [styles.color_white]: true,
    // });
    return (
        <header className={styles.header}>
            <div className={wrapperClasses}>
                <LogoComponent customClasses={styles.logo} />
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
            <div className={wrapperClasses}>
                <ul className={styles.list}>
                    <li>
                        <a className={linkClasses} href={'/about'}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className={linkClasses} href={'/products'}>
                            Products
                        </a>
                    </li>
                    <li>
                        <CartComponent />
                    </li>
                    <li className={styles.offset_md}>
                        <a className={styles.login} href={'/login'}>
                            <LoginIconComponent customClasses={styles.offset_sm} />
                            Login
                        </a>
                    </li>
                    <li>
                        <a className={styles.sign_up} href={'/sign-up'}>
                            <SignUpIconComponent customClasses={styles.offset_sm} />
                            Sign up
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
