import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartChat from '../Screens/StartChat';
import ChatList from '../Screens/StartChat/ChatList';
const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => (
  <AfterLoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AfterLoginStack.Screen name="chat" component={StartChat} />
    <AfterLoginStack.Screen name="chatList" component={ChatList} />
  </AfterLoginStack.Navigator>
);

export default AfterLoginNavigator;
