import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import Processes from './pages/Processes';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={isDarkMode ? '#333' : '#fff'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName = '';

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Processes') {
                iconName = focused
                  ? 'ios-document-text'
                  : 'ios-document-text-outline';
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'ios-person-circle'
                  : 'ios-person-circle-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Processes" component={Processes} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
