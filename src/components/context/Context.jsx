import React, { createContext, useState } from 'react'
export const {contextApi} =createContext()
// const {Provider} =contextApi;
const Context = ({children}) => {
    const [globalState,setGlobalState] =useState({
        token:null
    })
  return (
   <contextApi.Provider value={{globalState,setGlobalState}}>{children}</contextApi.Provider>
  )
}

export default Context