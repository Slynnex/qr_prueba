import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {Context} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';


const List_screen = ({navigation}) => {
    const {state, lista} = useContext(Context);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        lista();
        setTimeout(() => setRefreshing(false),1500);
      }, []);

    const name = "close-outline";
    const name1 = "checkmark-outline";

    useEffect(() => {
        
         lista();
    },[]);

    


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de productos</Text>
            <FlatList
            data={state}
            keyExtractor={(blogPost) =>blogPost.Codigo}
            renderItem={({item}) =>{
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('Main', 
                    {
                        nameList: item.Nombre,
                        codeList: item.Codigo,
                        Status: item.Status,
                        Ubicacion: item.Ubicacion,
                        Cantidad: item.Cantidad 
                    }
                    )}>
                    
                   
                    <View style={styles.producto}>

                        
                        <View>
                            <Text style={styles.nombre}>Nombre: {item.Nombre}</Text>
                            <Text style={styles.datos}>Cantidad: {item.Cantidad}</Text>
                            <Text style={styles.datos}>Ubicación: {item.Ubicacion}</Text>

                            
                        </View>

                        <View style={styles.image}>
                     
                            
                            {item.Status === "No registrado" 
                            ? <Icon name={name}  size={40} color='red'></Icon>
                                
                            :  <Icon name={name1}  size={40} color='green'></Icon>
                            }  
                        </View>

                    </View>

                    </TouchableOpacity>
                );
            }}
            refreshing={refreshing}
            onRefresh={onRefresh}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       marginVertical: 40,
       marginHorizontal: 10,
       marginBottom: 10,
       justifyContent: 'center',
       flex:1
    },
    producto: {

        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray'
    },
    producto2:{
        borderWidth: 1,
        borderColor: 'gray'
        
    },
    nombre:{
        fontSize:20
    },
    datos:{
        fontSize:13,
        color: 'gray'
    },
    titulo:{
        textAlign: 'center',
        fontSize:30
    },
    image:{
        //height:50,
        //width:50,
        //borderWidth:1,
        //borderColor: 'red',
        justifyContent: 'center',
        
    }
});

export default List_screen;