import { DefaultTheme } from "styled-components"

export enum ThemeActions {
    DARK = "theme/DARK",
    LIGHT ="theme/LIGHT",
}

export type ThemeState = {
    themeName: string;
    theme: DefaultTheme;
}