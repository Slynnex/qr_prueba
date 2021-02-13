import {AsyncStorage, Alert} from 'react-native';
import createDataContext from './createDataContext';
import BDApi from '../api/BD';
import { navigate } from '../screens/navigationRef';

const authReducer = (state, action) =>{
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return { errorMessage: '', token: action.payload};
        case 'get_list':
            return action.payload;
        case 'update':
            return {errorMessage: ''};
    }
};


const signup = dispatch => async({nombre ,email, password}) => {
    try {
        const response = await BDApi.post('/api/usuarios',{nombre, email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('Main');
    }
    catch(err)
    {
        dispatch({
            type: 'add_error',
            payload: 'Revise que haya ingresado los datos correctos'
        });
    }
}

const signin = dispatch => async ({email, password}) => {
    try{
        const response = await BDApi.post('/api/auth', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin' , payload: response.data.token});
        navigate('Main');
    }
    catch(err){
        dispatch({
            type: 'add_error',
            payload: 'No ingreso los datos correctos'
        })
        console.log(err);
    }
}

const lista = dispatch => {
    return async() => {
    try{
    const response = await BDApi.get('/api/productos');
    dispatch({type: 'get_list', payload: response.data})}
    catch(err){
        console.log(err);
    }
    };
}

const actualizar = dispatch => async({Ubicacion, Cantidad, codigo})=> {
        try{
            const response = await BDApi.put(`/api/productos/${codigo}`,{Ubicacion,Cantidad})
            dispatch({type: 'update'})
            //Alert.alert("se guardo");
        }catch(err){
            console.log(err.response);
            dispatch({
                type: 'add_error',
                payload: 'Revise que haya llenado todo'
            });
        }
}

export const { Provider, Context} = createDataContext(
    authReducer, { signup, signin, lista, actualizar },{ token: null, errorMessage: '', listado: []}
);