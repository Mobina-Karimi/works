import { useCallback, useEffect, useMemo, useState } from "react"
import ChildComponent from "./ChildComponent"
import { useTitle } from "../hooks/useTitle"

function MemoComponent() {
    console.log("MemoComponent is rendered")
    const [counter, setCouner] = useState(0)
    const [number, setNumber] = useState(0)

    // const slow = () => {
    //     for (let index = 0; index < 500000000; index++) {}
    //     return counter
    // }
    const slow = useMemo(() => {
        for (let index = 0; index < 500000000; index++) {}
        return counter
    },[counter])

    // const clickHandler = () => {
    //     setNumber(number => number +1)
    // }
    const clickHandler = useCallback(() => {
        setNumber(number => number +1)
    },[number])

    // useEffect(()=>{
    //         document.title = "Memo Page"
    // },[])
    useTitle("Memo Page")

  return (
    <div>
        {/* <span>{counter}</span> */}
        {/* <span>{slow()}</span> */}
        <span>{slow}</span>
        <button onClick={()=>setCouner((counter)=>counter+1)}>+</button>
        <ChildComponent number={number} clickHandler={clickHandler}/>
        {/* <br/>
        <span>{number}</span>
        <button onClick={()=>setNumber((number)=>number+1)}>+</button> */}
    </div>
  )
}

export default MemoComponent