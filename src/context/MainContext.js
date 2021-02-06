import{ AsyncStorage } from 'react-native';
import trackerApi from '../api/BD';
import createDateContext from './createDataContext';

const authReducer = (state, actions) =>{

    switch (actions.type) {
        case'ss':
           return {...state, errorMessage: actions.payload} ;
        case'existe':
            return{errorMessage: '' , token: actions.payload};
        case'signin':
            return{errorMessage: '' , token: actions.payload};
        default:
            return state;
    }
};

const verificarQr = dispatch => async ({codigo}) => {
    //hacer que la peticion de la api a sign up con el correo y la contraseña
    //si nos logueamos, modifica el estado y que estamos autentificados
    //si falla mandara un mensaje de error
    
    try {
        const response = await trackerApi.get('/api/qr',{codigo});
        //await AsyncStorage.setItem('token', response.data.token);
       
        dispatch({type:'existe', codigo: response.data.Codigo, descripcion: response.data.Descripcion, cantidad:response.Cantidad });

        //navigate to main flow
        console.log(response.data.Descripcion);

    }catch(err){
        console.log("error");
        dispatch({
            type: 'add_error',
            payload: 'Correo Existente'
        });
    }
};

export const {Provider, Context} = createDateContext(
    authReducer,
    {verificarQr},
    {token: null , errorMessage:''}
);