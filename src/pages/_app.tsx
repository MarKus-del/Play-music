import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import { RootState } from "../store/module/rootReducer";
import { GlobalStyles, theme } from "../styles/global";
import { useStore } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AnyAction, Store } from "redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store as Store<any, any>, {}, function () {
    persistor.persist();
  });

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MenuLateral />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}
export default MyApp;
