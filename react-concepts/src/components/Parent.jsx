import { useState } from "react"
import ChildA from "./ChildA"
import ChildB from "./ChildB"
import Button from "./Button"
import StyledDiv from "./StyledDiv"

// function Parent() {
//     const [number, setNumber] = useState(0)
//     const clickHandler = () => {
//         setNumber((number) => number+1)
//     }
//   return (
//     <div style={{border: "1px solid black", padding: "10px", margin: "20px"}}>
//         <h3>Parent</h3>
//         <button onClick={()=>setNumber((number => number+1))}>+</button>
//         <ChildA number={number} setNumber={setNumber}/>
//         {/* <ChildB number={number} text={<button onClick={clickHandler}>+</button>}/> */}
//         <ChildB number={number} button={<Button clickHandler={clickHandler}/>}/>
//     </div>
//   )
// }

function Parent() {
    const [number, setNumber] = useState(0)
    const clickHandler = () => {
        setNumber((number) => number+1)
    }
  return (
    // <StyledDiv jsx={
    //     <>
    //     <h3>Parent</h3>
    //     <button onClick={()=>setNumber((number => number+1))}>+</button>
    //     <ChildA number={number} setNumber={setNumber}/>
    //     <ChildB number={number} button={<Button clickHandler={clickHandler}/>}/>
    //     </>
    // }/>



    <StyledDiv title="Parent">
        <button onClick={()=>setNumber((number => number+1))}>+</button>
        <ChildA number={number} setNumber={setNumber}/>
        <ChildB number={number} button={<Button clickHandler={clickHandler}/>}/>
    </StyledDiv>
  )
}

export default Parent

// function Button({clickHandler}){
//     return <button onClick={clickHandler}>+</button>
// }