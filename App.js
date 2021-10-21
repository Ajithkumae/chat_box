import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';

import Navigator from './src/Navigation/navigator';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView />
      <Navigator />
    </Provider>
  );
};
export default App;
