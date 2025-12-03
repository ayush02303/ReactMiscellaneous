import React, { createContext } from 'react'


export const BioContext = createContext()

export const BioProvider = ({children}) => {
    const myName = "Ayush"
    const age = 12
    const NameAgain = "Shawn"
  return (
   <BioContext.Provider value={ { myName ,age , NameAgain}}>
    { children }
   </BioContext.Provider>
  )
}

export default BioProvider
