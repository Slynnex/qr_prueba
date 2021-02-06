import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const Signup_screen = () => {
    const {state, signup} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Registrar"
                errorMessage={state.errorMessage}
                regbool = {true}
                subtmitButtonText="Registrar"
                onSubmit= {signup}
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
        marginBottom: 100
    }
});

export default Signup_screen;