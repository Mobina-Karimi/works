// import { useState } from 'react'
import { useReducer } from "react"
import HttpReq from "./HttpReq"

// const initialState = {count:0, number:1}
const initialState = {count:0}

const reducer = (state, action) => {
  // console.log({state,action})

  // if(action === "Increase") return state +1 

  // switch(action){
  //   case "Increase":
  //     return state + 1
  //   case "Reset":
  //     return 0
  //   case "Decrease":
  //     return state - 1
  //   default:
  //     throw new Error("Invalid Action")
  // }
  
  switch(action.type){
    case "Increase":
      // return state + 1
      return {...state, count: state.count + 1}
    case "IncreaseByAmount":
      // return state + action.payload
      return {...state, count: state.count + action.payload}
    case "Reset":
      // return 0
      return {...state, count: 0}
    case "Decrease":
      // return state - 1
      return {...state, count: state.count -1}
    // case "Up":
    //   return {...state, number: state.number + 1}
    default:
      throw new Error("Invalid Action")
  }
}
function App() {
  // const [count, dispatch] = useReducer(reducer,0)
  // const [state, dispatch] = useReducer(reducer,{count:0, number:1})
  const [state, dispatch] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)
  // const [count, setCount] = useState(0)

  const IncreaseHandler = () => {
    // setCount(coount => count + 1)
    // dispatch("Increase")
    dispatch({type: "Increase"})
  }
  const IncreaseByAmountHandler = () => {
    dispatch({type: "IncreaseByAmount", payload: 5})
  }
  const resetHandler = () => {
    // setCount(0)
    // dispatch("Reset")
    dispatch({type: "Reset"})
  }
  const decreaseHandler = () => {
    // setCount(coount => count - 1)
    // dispatch("Decrease")
    dispatch({type: "Decrease"})
  }

  return (
    <>
    {/* <p>{state.count}</p>
    <button onClick={IncreaseHandler}>Increase</button>
    <button onClick={IncreaseByAmountHandler}>Increase By Amount</button>
    <button onClick={resetHandler}>Reset</button>
    <button onClick={decreaseHandler}>Decrease</button>
    <hr />
    <p>{state.number}</p>
    <button onClick={()=>dispatch({type:"Up"})}>Up</button>

    <p>{state2.count}</p>
    <button onClick={() => dispatch2({type:"Increase"})}>Increase</button>
    <button onClick={() => dispatch2({type:"IncreaseByAmount", payload:10})}>Increase By Amount</button>
    <button onClick={() => dispatch2({type:"Reset"})}>Reset</button>
    <button onClick={() => dispatch2({type:"Decrease"})}>Decrease</button> */}

    <HttpReq/>
    </>
  )
}

export default App
