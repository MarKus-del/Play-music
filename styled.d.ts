import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors : {
        detach: string,
        text: string,
        white: string,
        black: string,
        backgroundContainerMusic: string,
        playMusic: string,
        playDisable: string,
        borderColor: string,
      },
      breakpoints: {
        small: string,
        medium: string,
        large: string,
      },
      fontSize: string
	}
}