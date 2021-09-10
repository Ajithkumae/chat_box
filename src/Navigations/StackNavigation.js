import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreensName from '../Assets/ScreensName';
import LoginScreen from '../Screens/loginScreen';
import { navigationRef } from './RootNavigation';

const StackNavigation = () => {
  const Navigator = createStackNavigator();

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Navigator.Navigator headerMode={null}>
          <Navigator.Screen
            name={ScreensName.LoginScreen}
            component={LoginScreen}
          />
        </Navigator.Navigator>
      </NavigationContainer>
    </>
  );
};
export default StackNavigation;
