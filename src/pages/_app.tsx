import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import MenuLateral from "../components/MenuLateral";
import { GlobalStyles } from "../styles/global";
import { useStore } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Store } from "redux";
import ThemeCustomProvider from "../provider/ThemeCustomProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store as Store<any, any>);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeCustomProvider>
          <GlobalStyles />
          <MenuLateral />
          <Component {...pageProps} />
        </ThemeCustomProvider>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
