import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import BDApi from '../api/BD';
import { navigate } from '../screens/navigationRef';

const authReducer = (state, action) =>{
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return { errorMessage: '', token: action.payload};
    }
};


const signup = dispatch => async({nombre ,email, password}) => {
    try {
        const response = await BDApi.post('/api/usuarios',{nombre, email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('Main')
    }
    catch(err)
    {
        dispatch({
            type: 'add_error',
            payload: 'Revise que haya ingresado los datos correctos'
        });
    }
}

export const { Provider, Context} = createDataContext(
    authReducer, { signup },{ token: null, errorMessage: ''}
);