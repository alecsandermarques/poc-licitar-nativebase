import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../pages/Login';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
