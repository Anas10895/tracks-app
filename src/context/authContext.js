import createDataContext from './createDataContext'
import { create } from 'istanbul-reports'

const authReducer = (state, action) => {
switch(action.type){

    default:
    return state
    
    };
};

const signup = (dispatch) => {
    return ({email, password}) => {
        // make in api call to the sgin in with email and password

        //if we are signin change the state to authntecated 

        //if signin false show a error message to the user 
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        //try to sign in

        //if signin success change the state

        //if not show a error message 
    }
}

const signout = (dispatch) => {
    return () => {
        //change state to signin:false

    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout},
    {isSignin: false}
)