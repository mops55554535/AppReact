<<<<<<< HEAD
import {createContext} from "react";
=======
import { createContext } from 'react';
>>>>>>> 09b019a (Add tests ESlint)

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

<<<<<<< HEAD
export const ThemeContext = createContext<ThemeContextProps>({})
=======
export const ThemeContext = createContext<ThemeContextProps>({});
>>>>>>> 09b019a (Add tests ESlint)

export const LOCAL_STORAGE_THEME_KEY = 'theme';
