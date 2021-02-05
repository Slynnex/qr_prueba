import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';

const Signin_screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Iniciar sesión"
                errorMessage="Datos incorrectos"
                regbool = {false}
                subtmitButtonText="Iniciar sesion"
            />
            <NavLink
                text="No tienes cuenta? Registrese"
                routeName="Signup"
            />
            <Button title="QrS" onPress={() => navigation.navigate("Qr")}/>
        </View>
    );
}

Signin_screen.navigationOptions = () => {
    return {
    header: () => false
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default Signin_screen;