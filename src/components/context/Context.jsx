import React, { createContext, useState } from 'react'
export const contextApi =createContext()
const {Provider} =contextApi;
const Context = ({children}) => {
    const [globalState,setGlobalState] =useState({
        token:null
    })
  return (
   <Provider value={{globalState,setGlobalState}}>{children}</Provider>
  )
}
 

export default Context