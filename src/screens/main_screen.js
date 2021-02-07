import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainForm from '../components/mainForm';

const Main_screen = ({navigation}) => {
    return (
        <View>
            <MainForm Codigo={navigation.getParam('Codigo')}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Main_screen;