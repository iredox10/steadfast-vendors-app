import { createContext, useReducer } from "react";
import { authReducer } from "./AuthContext";

export const SideBarContext = createContext()

export const sideBarReducer = (action,state)=>{
    switch(action) {
        case 'SHOW':
            return {show: action.payload}
        case 'CLOSE':
            return {show: action.payload}
          default: 
            return state
    }
}

export const SideBarProvider = ({children}) =>{
    const [state,dispatch] = useReducer(sideBarReducer,{
        show: false
    })
    console.log('show sidebar', state);
    return(
    <SideBarContext.Provider value={{state,dispatch}}>
        {children}
    </SideBarContext.Provider>
    )
}
