import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';

const Signup_screen = () => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Registrar"
                errorMessage="Datos incorrectos"
                regbool = {true}
                subtmitButtonText="Registrar"
            />
            <NavLink
                text="Tienes cuenta? Inicia sesión"
                routeName="Signin"
            />
        </View>
    );
}

Signup_screen.navigationOptions = () => {
    return {
    header: () => false
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default Signup_screen;