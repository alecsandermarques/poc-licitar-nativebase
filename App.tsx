import {Box, NativeBaseProvider, StatusBar, Text} from 'native-base';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Box>Hello world</Box>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text>
          Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum
        </Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
