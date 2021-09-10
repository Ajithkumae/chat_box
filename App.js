import React from 'react';
import {View, Text} from 'react-native';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';
import LoginScreen from './src/Screens/Login';
const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};
export default App;
