import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../store/module/rootReducer";

type ThemeCustomProviderProps = {
  children: ReactNode;
};

export default function ThemeCustomProvider({
  children,
}: ThemeCustomProviderProps) {
  const { theme } = useSelector((state: RootState) => state.themes);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
