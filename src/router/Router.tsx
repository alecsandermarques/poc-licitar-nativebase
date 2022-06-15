import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import UserContext from '../context/UserContext';
import Chat from '../pages/Chat';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootStack = createNativeStackNavigator();

const Router = () => {
  const {state} = useContext(UserContext);
  const {isLogged} = state;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? (
          <>
            <RootStack.Screen name="App" component={AppNavigator} />
            <RootStack.Screen
              options={{
                headerShown: true,
              }}
              name="Chat"
              component={Chat}
            />
          </>
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
