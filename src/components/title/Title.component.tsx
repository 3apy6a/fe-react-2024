import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

export const TitleComponent: React.FC<TitleProps> = ({ children }) => <h2>{children}</h2>;
