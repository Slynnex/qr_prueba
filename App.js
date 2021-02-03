import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/Signin_screen';

import MainScreen from './src/screens/main_screen';
import ListScreen from './src/screens/List_screen';
import CalculatorScreen from './src/screens/calculator_screen';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signin: SigninScreen,

    })

});

export default createAppContainer(switchNavigator);
