import React from 'react';

import { TitleComponent } from '../title/Title.component';

interface AboutProps {
    customClasses: string;
}

export const AboutComponent: React.FC<AboutProps> = ({ customClasses }) => (
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
            <a href="https://www.instagram.com/3d_kuznya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> instagram</a> and
            check out my <a href="https://github.com/3apy6a">GitHub</a>.
        </p>
    </article>
);
