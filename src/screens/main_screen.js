import React,{ useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainForm from '../components/mainForm';


const Main_screen = ({navigation}) => {
    const [codigo, setCodigo] = useState('');
    


    return (
        <View>
            <MainForm Codigo={navigation.getParam('codeList')} Nombre={navigation.getParam('nameList')} Status={navigation.getParam('Status')} Ubicacion={navigation.getParam('Ubicacion')} Cantidad={navigation.getParam('Cantidad')} Imagen ={navigation.getParam('Imagen')}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Main_screen;