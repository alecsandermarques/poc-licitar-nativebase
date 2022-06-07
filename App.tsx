import {Box, NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Box>Hello world</Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
