import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {DrawerNavigator} from 'react-navigation'
// import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

// const AppDrawerNavigator = new DrawerNavigator({
//   HomeScreen: { screen: HomeScreen}
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
