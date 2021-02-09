import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {Context} from '../context/AuthContext';
import Spacer from '../components/Spacer';

const List_screen = () => {
    const {state, lista} = useContext(Context);


     useEffect(() => {
         lista();
    },[]);


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de productos</Text>
            <Spacer></Spacer>
            <FlatList
            data={state}
            keyExtractor={(blogPost) =>blogPost.Codigo}
            renderItem={({item}) =>{
                return(
                    <View style={styles.producto2}>
                        <View style={styles.producto}>
                            <Text>Nombre: {item.Nombre}</Text>
                            <Text>Cantidad: {item.Cantidad}</Text>
                        </View>

                        <View style={styles.producto}>
                            <Text>Estatus: {item.Status}</Text>
                            <Text>Ubicación: {item.Ubicacion}</Text>   
                        </View>

                    </View>   
                    );
                    
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       marginVertical: 30,
       marginHorizontal: 10,
       marginBottom: 30,
      
       flex:1
    },
    producto: {
     
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    producto2:{
        borderWidth: 1,
        borderColor: 'gray',
    },
    titulo:{
        textAlign: 'center',
        fontSize:30
    }
});

export default List_screen;