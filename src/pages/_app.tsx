import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { storeWrapper } from "../store";
import { GlobalStyles, theme } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuLateral />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default storeWrapper.withRedux(MyApp);
