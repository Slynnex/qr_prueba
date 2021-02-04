import React from 'react';
import {View ,StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage}) => {
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({});

export default AuthForm;