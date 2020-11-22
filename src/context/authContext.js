import createDataContext from './createDataContext';
import trackerApi from '../api/tarker';
import {AsyncStorage} from 'react-native'
import {navigate} from '../../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
      case 'add-error':
          return {...state, errorMessage:action.payload}
      
       case 'signin':
           return{errorMessage: '' , token: action.payload}   

            
    default:
      return state;
  }
};

const signup = dispatch =>  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type:'signin', payload:response.data.token })

      navigate('TrackList');
    } catch (err) {
      console.log(err.response.data);
      dispatch({type:'add-error', payload:'Somting went wrong with Signup'})
    }
  };


const signin = dispatch => async ({ email, password }) => {
try{
const response = await trackerApi.post('/signin',{email, password});
await AsyncStorage.setItem('token', response.data.token)
dispatch({type:'signin', payload:response.data.token })

navigate('TrackList');
}catch(err){
  dispatch({type:'add-error', payload:'Somting went wrong with Signin'})

}
  };


const signout = dispatch => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage:'' }
);
