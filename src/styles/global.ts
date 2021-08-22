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
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: flex;
  font-family: sans-serif;
}

:root {
  font-size: ${({ theme }) => theme.fontSize};
}
`;

export const lightTheme: DefaultTheme = {
  colors: {
    detach: "#A29BFE",
    text: "#636E72",
    backgroundColor: "#FFFFFF",
    black: "#000000",
    backgroundContainerMusic: "#DFE6E9",
    playMusic: "#55efc4",
    playDisable: "#00b894",
    borderColor: "#C4C4C4",
    linkHover: "#551A8B",
  },
  breakpoints: {
    small: "780",
    medium: "1024",
    large: "1444",
  },
  fontSize: "16px",
};

export const darkTheme: DefaultTheme = {
  colors: {
    detach: "#6c5ce7",
    text: "#b2bec3",
    backgroundColor: "#2d3436",
    black: "#000000",
    backgroundContainerMusic: "#636e72",
    playMusic: "#55efc4",
    playDisable: "#00b894",
    borderColor: "#000000",
    linkHover: "#551A8B",
  },
  breakpoints: {
    small: "780",
    medium: "1024",
    large: "1444",
  },
  fontSize: "16px",
};
