import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors : {
        detach: string,
        text: string,
        backgroundColor: string,
        black: string,
        backgroundContainerMusic: string,
        playMusic: string,
        playDisable: string,
        borderColor: string,
        linkHover: string;

      },
      breakpoints: {
        small: string,
        medium: string,
        large: string,
      },
      fontSize: string
	}
}