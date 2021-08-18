import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }
`;

const theme = {
  colors : {},
  breakpoints: {},
  fontSizes: {}
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp
