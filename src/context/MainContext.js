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



export const {Provider, Context} = createDateContext(
    authReducer,
    {verificarQr},
    {token: null , errorMessage:''}
);