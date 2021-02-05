import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import BDApi from '../api/BD';
import { navigate } from '../screens/navigationRef';

const authReducer = (state, action) =>{

}


const signup = dispatch => ({email, password}) => {
    try {
        const response = await BDApi.post('/api/usuarios',{ email, password});
        await AsyncStorage.setItem('token', response.data.token);
    }
    catch(err){
        
    }
}