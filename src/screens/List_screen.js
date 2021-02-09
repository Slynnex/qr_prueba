import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {Context} from '../context/AuthContext';

const List_screen = () => {
    const {state, lista} = useContext(Context);


     useEffect(() => {
         lista();
    },[]);


    return (
        <View style={styles.container}>
            <Text h3>Lista de productos</Text>
            <FlatList
            data={state}
            keyExtractor={(blogPost) =>blogPost.Codigo}
            renderItem={({item}) =>{
                return(
                    <View style={styles.producto}>
                    <Text>Nombre: {item.Nombre}</Text>
                    <Text>Cantidad: {item.Cantidad}</Text>
                    <Text>Estatus: {item.Status}</Text>
                    <Text>Ubicación: {item.Ubicacion}</Text>
                    </View>
                );
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       marginVertical: 10,
       marginHorizontal: 10,
       marginBottom: 300,
       justifyContent: 'center',
       flex:1
    },
    producto: {
        borderWidth: 1,
        borderColor: 'gray'
    }
});

export default List_screen;