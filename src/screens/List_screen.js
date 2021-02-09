import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {Context} from '../context/AuthContext';

const List_screen = ({navigation}) => {
    const {state, lista} = useContext(Context);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        lista();
        setTimeout(() => setRefreshing(false),1500);
      }, []);

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
                        statusList: item.Status,
                        locationList: item.Ubicacion,
                        cantList: item.Cantidad 
                    }
                    )}>
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
    },
    producto2:{
        borderWidth: 1,
        borderColor: 'gray'
        
    },
    titulo:{
        textAlign: 'center',
        fontSize:30
    }
});

export default List_screen;