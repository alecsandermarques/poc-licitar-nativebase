import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Router from './router';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={isDarkMode ? '#333' : '#fff'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <Router />
    </NativeBaseProvider>
  );
}
