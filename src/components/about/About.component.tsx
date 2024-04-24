import React from 'react';

import type { customClasses } from '@/interfaces/CustomClasses.ts';

import { TitleComponent } from '../title/Title.component';

export const AboutComponent: React.FC<customClasses> = ({ customClasses }) => (
    <article className={customClasses}>
        <TitleComponent>About me</TitleComponent>
        <p>
            Hi! My name is Susanna and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
            HTML, CSS, JavaScript and Git version control system.
        </p>
        <p>This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.</p>
        <p>
            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own small
            project for the portfolio.
        </p>
        <p>
            You can contact me via
            <a
                href="https://www.instagram.com/3d_kuznya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                instagram
            </a>{' '}
            check out my{' '}
            <a href="https://github.com/3apy6a" target="_blank" rel="noreferrer">
                GitHub
            </a>
            .
        </p>
    </article>
);
