import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/Signin_screen';
import SignupScreen from './src/screens/Signup_screen';
import MainScreen from './src/screens/main_screen';
import ListScreen from './src/screens/List_screen';
import CalculatorScreen from './src/screens/calculator_screen';
import QrScreen from './src/screens/Qr_screen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/screens/navigationRef';
import Icon from 'react-native-vector-icons/Ionicons';


const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen,
      Qr:{
        screen:QrScreen,
        navigationOptions:{
          headerShown:false
        }
      }
    }),
    mainFlow: createBottomTabNavigator({
      Main: {
        screen:MainScreen,
        path: '/',
        navigationOptions:{
          tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `home${focused ? '' : '-outline'}`;
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        },
      },
      List: {
        screen:ListScreen,
        path: '/',
        navigationOptions:{
          tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `list${focused ? '' : '-outline'}`;
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        },
      },

      Calculator:{
        screen:CalculatorScreen,
        path: '/',
        navigationOptions:{
          tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `calculator${focused ? '' : '-outline'}`;
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        },
      },
     
      
    })

});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
      <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
      </AuthProvider>
  );
};
