import React from 'react';
import {View ,StyleSheet, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const MainForm = (props) => {
    return (
        
        <SafeAreaView style={styles.container}>
         <ScrollView >

                <Text style={styles.titulo}>No Registro</Text>
                
                <View style={styles.datos}>                      
                        <Text style={styles.letras}>Nombre</Text>
                        <Text style={styles.letras}>Fecha</Text>
                </View>

                

               <View style={styles.subcontainer}>
                    <Image 
                        source={{ uri: 'https://assets.geekmi.news/__export/1607114141528/sites/debate/img/2020/12/04/como-desbloquear-en-genshin-impact-la-mision-de-la-historia-de-mona_crop1607114115975.jpg_988992781.jpg' }}
                        style={ styles.imagen }
                    />
                    
                    <Text style={styles.letras}>Codigo :{props.Codigo}</Text>
                    <Input></Input>
                    <Text style={styles.letras}>Ubicación</Text>
                    <Input></Input>
                    <Text style={styles.letras}>Cantidad</Text>
                    <Input></Input>
                    
                   
                
               </View>

               <View style={styles.datos}>
                    <Button title="Qr" onPress={() => props.navigation.navigate('Qr')}/>
                    <Button style={styles.boton} title= "Enviar"/>
                </View>

               
        </ScrollView>    
        </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({

    container: {
        
        
        marginHorizontal: 20,
        marginBottom:60,
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