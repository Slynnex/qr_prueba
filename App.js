import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lalo se la come</Text>
      <Button title="Si"/>
      <StatusBar style="auto" />
    </View>
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
