import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
