import{ AsyncStorage } from 'react-native';
import trackerApi from '../api/BD';


const authReducer = (state, actions) =>{

    switch (actions.type) {
        case'add_error':
           return {...state, errorMessage: actions.payload} ;
        case'signup':
            return{errorMessage: '' , token: actions.payload};
        case'signin':
            return{errorMessage: '' , token: actions.payload};
        default:
            return state;
    }
};

const verficarQr = dispatch => async ({codigo}) => {
    //hacer que la peticion de la api a sign up con el correo y la contraseña
    //si nos logueamos, modifica el estado y que estamos autentificados
    //si falla mandara un mensaje de error
    
    try {
        const response = await trackerApi.post('/api/qr',{email, password});
        await AsyncStorage.setItem('token', response.data.token);
       
        dispatch({type:'signup', payload: response.data.token});

        //navigate to main flow
        navigate('TrackList');

    }catch(err){
        
        dispatch({
            type: 'add_error',
            payload: 'Correo Existente'
        });
    }
};