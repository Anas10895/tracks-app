import React, {useReducer} from 'react'

export default (reducer, actions, defaultValue) => {
    const Context = React.useContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        
        const boundAcions = {};
        for(key in actions) {
            boundAcions[kye] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{state, ...boundAcions}}>
                {children}
            </Context.Provider>
        )
    };
    return {Context, Provider}
};