import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppScreen from './screens/AppScreen';

export default function App() {
  return (
    <AppScreen />
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
