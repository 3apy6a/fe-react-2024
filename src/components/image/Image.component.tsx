import portrait from '@/assets/portrait.png';

import styles from './image.module.css';

// @ts-ignore
export const ImageComponent = ({ customClasses }) => (
    <div className={customClasses}>
        <img className={styles.img} src={portrait} alt="Portrait" />
    </div>
);
