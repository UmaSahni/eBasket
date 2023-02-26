import React, { createContext, useReducer } from 'react'
export const  AppCartContext = createContext()



const CartContext = ({children}) => {
 
const reducer = (state, {type, payload})=>{
    switch(type){
       case "AddTOCART" :{
        const CheckItemAlreadyPresent = state.filter((item)=>payload.id === item.id)
        if(CheckItemAlreadyPresent.length>0){
            return state
        }
        return [ ...state, payload]
       }
       
       
       
        default : return state
    }
}
 
 
 const [state, dispatch] = useReducer(reducer,[])
 
    return (
    <AppCartContext.Provider value={{state, dispatch}} >{children}</AppCartContext.Provider>
  )
}

export default CartContext