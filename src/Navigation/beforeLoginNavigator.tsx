import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Screens/SignUp';
import LoginScreen from '../Screens/Login';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => (
  <BeforeLoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={'signUp'}>
    <BeforeLoginStack.Screen name="login" component={LoginScreen} />
    <BeforeLoginStack.Screen name="signUp" component={SignIn} />
  </BeforeLoginStack.Navigator>
);

export default BeforeLoginNavigator;
