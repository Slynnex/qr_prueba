import React from 'react';
import {View ,StyleSheet, Image, Button} from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from './Spacer';

const MainForm = () => {
    return (
        <View style={styles.container}>
            
                <Text style={styles.titulo}>N c</Text>
                
                <View>
                    <Text style={styles.titulo}>Nombre</Text>
                    <Text style={styles.titulo}>Fecha</Text>
                </View>
               
                <Image 
                    source={{ uri: 'https://assets.geekmi.news/__export/1607114141528/sites/debate/img/2020/12/04/como-desbloquear-en-genshin-impact-la-mision-de-la-historia-de-mona_crop1607114115975.jpg_988992781.jpg' }}
                    style={ styles.imagen }
                />

                <Text style={styles.titulo}>codigo</Text>
                <Button title= "QR"/>
           
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        

        },
    imagen:{
        width: 200, 
        height: 200,
    },
    titulo:{
    justifyContent: 'center',
    fontSize:20
    }

});

export default MainForm;