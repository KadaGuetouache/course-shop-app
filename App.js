import { StatusBar } from "expo-status-bar";
import Navigate from './Navigations/Navigate'
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const App = () => {
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "lato": require('./assets/fonts/Lato-Regular.ttf'),
          "cinzel": require('./assets/fonts/Cinzel.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigate />
        <StatusBar backgroundColor="#fff" barStyle="default" />
      </PersistGate>
    </Provider>
  );
}

export default App