import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #__next {
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
}

:root {
  font-size: ${({ theme }) => theme.fontSize};
}
`;

export const theme: DefaultTheme = {
  colors: {
    detach: "#A29BFE",
    text: "#636E72",
    white: "#FFFFFF",
    black: "#000000",
    backgroundContainerMusic: "#DFE6E9",
    playMusic: "#55efc4",
    playDisable: "#00b894",
    borderColor: "#C4C4C4",
    linkHover: "#551A8B"
  },
  breakpoints: {
    small: "780",
    medium: "1024",
    large: "1444",
  },
  fontSize: "16px",
};
