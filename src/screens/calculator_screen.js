import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Calculator, CalculatorInput } from 'react-native-calculator';

const calculator_screen = () => {
    return (
        <View style={{ flex: 1 }}>
              <Calculator
                style={{ flex: 1 }} 
                fieldTextStyle={{ fontSize: 24 }}
                fieldContainerStyle={{ height: 36 }}
                fontSize={40}
                />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default calculator_screen;