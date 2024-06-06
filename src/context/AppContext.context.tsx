import React, { createContext, useEffect, useState } from 'react';

import type { AppContextProps, ColorScheme } from '@/interfaces/AppContextProps.interface.tsx';

export const AppContext = createContext<AppContextProps>({
    theme: 'dark',
    setTheme: (mode: ColorScheme) => {},
});

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const browserThemeMode: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState<ColorScheme>(() => {
        const savedScheme = localStorage.getItem('theme');
        const validColorSchemes: ColorScheme[] = ['dark', 'light'];

        return savedScheme && validColorSchemes.includes(savedScheme as ColorScheme) ? (savedScheme as ColorScheme) : browserThemeMode;
    });

    useEffect(() => {
        const removeThemeClasses = ['dark', 'light'];

        if (browserThemeMode === theme) {
            document.documentElement.classList.remove(...removeThemeClasses);
            localStorage.removeItem('theme');
        } else {
            document.documentElement.classList.remove(...removeThemeClasses);
            document.documentElement.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [browserThemeMode, theme]);
    return <AppContext.Provider value={{ theme, setTheme }}>{children}</AppContext.Provider>;
};
