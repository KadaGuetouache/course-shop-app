import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigate from './Navigations/Navigate'

export default function App() {

  const [fontsLoaded] = Font.useFonts({
    'cinzel': require('./assets/fonts/Cinzel.ttf'),
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigate />
      </PersistGate>
    </Provider>
  );
}