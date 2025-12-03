import React, { useContext } from 'react'
import { BioContext } from './components/contextApi'



const Home = () => {
     const { myName , age , NameAgain } = useContext(BioContext)
  return (
    <div>
        <h2>I would say my Name is { myName} and followed by my age which is { age} and { NameAgain}</h2>
    </div>
  )
}

export default Home
