import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';

import AppScreen from './screens/AppScreen';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
