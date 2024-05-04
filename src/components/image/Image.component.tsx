import React from 'react';

import portrait from '@/assets/portrait.svg';

import styles from './image.module.css';

interface ImageProps {
    customClasses: string;
}

export const ImageComponent: React.FC<ImageProps> = ({ customClasses }) => (
    <div className={customClasses}>
        <img className={styles.img} src={portrait} alt="Portrait" />
    </div>
);
