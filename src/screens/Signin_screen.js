import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button, ImageBackground, Image} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import bgimg from '../img/cococabra.jpg';


const Signin_screen = ({ navigation }) => {
    const {state, signin} = useContext(AuthContext);
    return (
        <ImageBackground source={bgimg} style={styles.bcontainer}>
        <View style={styles.lcontainer}>
            
            <View style={styles.icontainer}>
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
        </View>
    </ImageBackground>
    );
}

Signin_screen.navigationOptions = () => {
    return {
    header: () => false
    };
}

const styles = StyleSheet.create({
    bcontainer:{
        flex:1,
        width: null,
        height:null,
        justifyContent: 'center'
    },
    lcontainer:{
        alignItems: 'center'
    },
    
    icontainer:{
        marginTop: 65,
        justifyContent: 'center',
        marginBottom: 200}
});

export default Signin_screen;