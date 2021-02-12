import React, {useContext, useState} from 'react';
import {View ,StyleSheet, Image, Button, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {Text, Input} from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
const {width} = Dimensions.get('window');
import { Context as AuthContext } from '../context/AuthContext';

const MainForm = (props) => {
    const [Ubicacion, setUbicacion] = useState('');
    const [Cantidad, setCantidad] = useState(0);
    const [codigo, setCondigo] = useState(props.Codigo);
    const {state, actualizar} = useContext(AuthContext);


    return (
        
        <SafeAreaView style={styles.container}>
         <ScrollView >

                <Text style={styles.titulo}>{props.Nombre}</Text>
                
                <View style={styles.datos}>                      
                        <Text style={styles.letras}>Nombre</Text>
                        <Text style={styles.letras}>Fecha</Text>
                </View>
                

               <View style={styles.subcontainer}>
                    <Image 
                        source={{ uri: 'https://assets.geekmi.news/__export/1607114141528/sites/debate/img/2020/12/04/como-desbloquear-en-genshin-impact-la-mision-de-la-historia-de-mona_crop1607114115975.jpg_988992781.jpg' }}
                        style={ styles.imagen }
                    />
                    
                    <Text style={styles.letras}>Codigo:</Text>
                    <Input value= {props.Codigo}></Input>
                    <Text style={styles.letras}>Ubicación</Text>
                    <Input 
                        value={Ubicacion.toString()}
                        onChangeText={setUbicacion}
                    />
                    <Text style={styles.letras}>Cantidad</Text>
                    <Input
                         value={Cantidad.toString()}
                         onChangeText={setCantidad}
                    />
                    
                   
                
               </View>

               <View style={styles.datos}>
               <Button title="Qr" onPress={() => props.navigation.navigate('Qr',{Nombre: props.Nombre, Codigo: props.Codigo, Status: props.Status})}/>
                    <Button 
                        style={styles.boton} title= "Enviar"
                        onPress={() => actualizar({Ubicacion,Cantidad, codigo: props.Codigo})}
                    />
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
        marginBottom: 50,
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

const scalingFactors = {
    max: 15,
    big: 20,
    small: 30,
    normal: 25,
    moneyTitle: 10,
    };
    
    // scaling font size
    export const fontSmall = width / scalingFactors.small;
    export const fontNormal = width / scalingFactors.normal;
    export const fontBig = width / scalingFactors.big;
    export const fontMax = width / scalingFactors.max;

export default withNavigation(MainForm);