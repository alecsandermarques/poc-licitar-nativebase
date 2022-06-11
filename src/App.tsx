import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import GlobalContext from './context/GlobalContext';
import Router from './router';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GlobalContext>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor={isDarkMode ? '#333' : '#fff'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />

        <Router />
      </NativeBaseProvider>
    </GlobalContext>
  );
}
