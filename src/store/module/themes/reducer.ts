import { ThemeActions, ThemeState } from "./types";
import { darkTheme, lightTheme } from '../../../styles/global'

export const themesInitialState: ThemeState = {
    themeName: 'light',
    theme: lightTheme 
};

export default function reducers (state = themesInitialState, action: { type: ThemeActions}) {
    switch(action.type) {
        case ThemeActions.DARK: {
            const nextState = {...state};
            console.log(state);
            
            if (nextState.themeName !== 'dark') {
                nextState.themeName = 'dark';
                nextState.theme = { ...darkTheme };
                return nextState;
            }
            return nextState;
        }
        case ThemeActions.LIGHT: {
            const nextState = {...state};
            console.log(state);
            if (nextState.themeName !== 'light') {
                nextState.themeName = 'light'
                nextState.theme = {...lightTheme};
                return nextState;
            }
            return nextState;
        }
        default:
            return state;
    }
}