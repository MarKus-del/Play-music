import { ThemeActions } from "./types";

export const setDarkMode = () => {
  return {
    type: ThemeActions.DARK,
  };
};

export const setlightMode = () => {
  return {
    type: ThemeActions.LIGHT,
  };
};
