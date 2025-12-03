import React, { useReducer } from 'react'

const Reducer = () => {

    const initialState = {
        count : 12
    }

    const reducer = ( state , action ) => {

        switch (action.type ) {
            case "increment":
                
               return { count : state.count+ 1 }

             case "decrement":
                
               return { count : state.count+ 1 }
        
            default:
                return state 
        }

        
        

    }

    const [ data , dispatch] = useReducer( reducer , initialState)

  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text"  id='name'/>

         <label htmlFor="name2">Second Name </label>
        <input type="text"  id='name2'/>


        <button onClick={()=> dispatch({ type : "increment"})}>Increment</button>
        <button onClick={()=> dispatch({ type : "decrement"})}>Decrement  </button>
        <p>{ data.count }</p>
      
      
    </div>
  )
}

export default Reducer
