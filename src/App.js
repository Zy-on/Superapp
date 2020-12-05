import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#CF5000" />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
