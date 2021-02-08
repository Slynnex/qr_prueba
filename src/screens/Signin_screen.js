import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const Signin_screen = ({ navigation }) => {
    const {state, signin} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Iniciar sesión"
                errorMessage={state.errorMessage}
                regbool = {false}
                subtmitButtonText="Iniciar sesion"
                onSubmit={signin}
            />
            <NavLink
                text="No tienes cuenta? Registrese"
                routeName="Signup"
            />
            <Button title="main" onPress={() => navigation.navigate("Main")}/>
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
        marginBottom: 200
    }
});

export default Signin_screen;