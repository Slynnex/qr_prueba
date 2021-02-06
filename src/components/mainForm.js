import React from 'react';
import {View ,StyleSheet, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from './Spacer';

const MainForm = () => {
    return (
        <>
        <SafeAreaView >
         <ScrollView >

         
            
                <Text style={styles.titulo}>no articulo</Text>
                
                <View style={styles.datos}>
                    <Text style={styles.letras}>Nombre</Text>
                    <Text style={styles.letras}>Fecha</Text>
                </View>
               <View style={styles.subcontainer}>
               <Image 
                    source={{ uri: 'https://assets.geekmi.news/__export/1607114141528/sites/debate/img/2020/12/04/como-desbloquear-en-genshin-impact-la-mision-de-la-historia-de-mona_crop1607114115975.jpg_988992781.jpg' }}
                    style={ styles.imagen }
                />

                <Text style={styles.letras}>codigo :</Text>
                <Input></Input>
                <Button style={styles.boton} title= "QR"/>
                <Text style={styles.letras}>ubicación</Text>
                <Input></Input>
                <Button style={styles.boton} title= "Enviar"/>
               </View>
               
        </ScrollView>    
        </SafeAreaView>
        </>
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
        
        width: 200, 
        height: 200,
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
        fontSize:20
    },

});

export default MainForm;