import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Signin_screen = ({ navigation }) => {
    return (
        <View>
            <Text>Signin screen</Text>
            <Button title="Signup" onPress={() => navigation.navigate("Qr")}/>
            <Button title="QrS" onPress={() => navigation.navigate("Qr")}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Signin_screen;