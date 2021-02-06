import React from 'react';
import {View ,StyleSheet, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const MainForm = ({navigation}) => {
    return (
        
        <SafeAreaView style={styles.container}>
         <ScrollView >

         
            
                <Text style={styles.titulo}>{props.Codigo}</Text>
                
                <View style={styles.datos}>
                    <Text style={styles.letras}>Nombre</Text>
                    <Text style={styles.letras}>Fecha</Text>
                </View>
               <View style={styles.subcontainer}>
               <Image 
                    source={{ uri: 'https://assets.geekmi.news/__export/1607114141528/sites/debate/img/2020/12/04/como-desbloquear-en-genshin-impact-la-mision-de-la-historia-de-mona_crop1607114115975.jpg_988992781.jpg' }}
                    style={ styles.imagen }
                />
                <Button title="Qr" onPress={() => navigation.navigate('Qr')}/>
                <Text style={styles.letras}>Codigo :</Text>
                <Input></Input>
                <Text style={styles.letras}>Ubicación</Text>
                <Input></Input>
                <Text style={styles.letras}>Cantidad</Text>
                <Input></Input>
                <Button style={styles.boton} title= "Enviar"/>
                
                
               </View>
               
        </ScrollView>    
        </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({

    container: {
        
        marginVertical: 10,
        marginHorizontal: 10,
        top:10,
        bottom:0,
        left:0,
        right:0,
        //borderWidth:3,
        //borderColor: 'red',
        },
    imagen:{
        
        width: 150, 
        height: 150,
        marginBottom:30,
        
    },
    datos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
    },
    titulo:{
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
    },
    boton:{
        width: 50, 
        height: 50
    },
    subcontainer:{
        alignItems: "center",
        //borderWidth:3,
        //borderColor: 'red',
    },
    letras:{
        
        textAlign:'center',
        fontSize:18
    },

});

export default withNavigation(MainForm);