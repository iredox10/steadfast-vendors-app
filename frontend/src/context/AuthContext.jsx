import { createContext, useContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (action,state) =>{
    switch(action) {
        case 'LOGIN':
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default: 
        return state
    }    
}

export const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type:"LOGIN", payload:user})
        }
    },[])

    console.log('auth context:', state);
    return( 
    <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>)
    
}