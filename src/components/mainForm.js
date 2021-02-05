import React from 'react';
import {View ,StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const MainForm = () => {
    return (
        <View>
            <Spacer>
                <Text>hola mundo</Text>
                
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',

        },

});

export default MainForm;