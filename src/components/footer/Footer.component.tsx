import { FacebookIconComponent } from '@/components/footer/icons/FacebookIcon.component.tsx';
import { InstagramIconComponent } from '@/components/footer/icons/InstagramIcon.component.tsx';
import { LinkedinIconComponent } from '@/components/footer/icons/LinkedinIcon.component.tsx';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={'contentWrapper %{ styles.footer }'}>
        <div className={styles.divider}></div>
        <ul className={styles.menu}>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookIconComponent />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedinIconComponent />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIconComponent />
                </a>
            </li>
        </ul>
        <div>
            <p className={styles.footerText}>
                Made with 💗 on course <span className={styles.footerLink}> &apos;Intro to React&apos; from Masters Academy in 2024</span>,
                by Susanna
            </p>
        </div>
    </footer>
);
