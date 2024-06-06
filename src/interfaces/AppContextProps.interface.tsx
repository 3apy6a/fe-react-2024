export type ColorScheme = 'dark' | 'light';

export interface AppContextProps {
    theme: ColorScheme;
    setTheme: (mode: ColorScheme) => void;
}
