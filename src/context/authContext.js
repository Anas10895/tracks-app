import createDataContext from './createDataContext'
import { create } from 'istanbul-reports'

const authReducer = (state, action) => {
switch(action.type){

    default:
    return state
    
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    {isSignin: false}
)