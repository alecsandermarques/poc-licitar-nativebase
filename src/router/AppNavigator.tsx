import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Processes from '../pages/Processes';
import Profile from '../pages/Profile';

const TabStack = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <TabStack.Navigator
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
          } else if (route.name === 'Chat') {
            iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarButton: props => <TouchableOpacity {...props} />,
        headerTitleAlign: 'center',
      })}>
      <TabStack.Screen
        options={{
          title: 'Início',
        }}
        name="Home"
        component={Home}
      />
      <TabStack.Screen
        options={{
          title: 'Processos',
        }}
        name="Processes"
        component={Processes}
      />
      <TabStack.Screen
        options={{
          title: 'Chat',
        }}
        name="Chat"
        component={Chat}
      />
      <TabStack.Screen
        options={{
          title: 'Perfil',
        }}
        name="Profile"
        component={Profile}
      />
    </TabStack.Navigator>
  );
};

export default AppNavigator;
