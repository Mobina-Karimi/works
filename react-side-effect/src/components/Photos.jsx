import { useEffect, useState } from "react"

function Photos() {
    const[isShow, setIsShow] = useState(false)
    const[text, setText] = useState("")
    const[count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("Hello World!")
    // })

    console.log("render")

    const ClickHandler = ()=>{
        // setIsShow(isShow=>!isShow)

        // setIsShow(!isShow)
        // setIsShow(!isShow)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        setIsShow(isShow=>!isShow)
        setIsShow(isShow=>!isShow)
        setCount(count => count+1)
        setCount(count => count+1)
        setCount(count => count+1)
        setText("new Text")
    }
  return (
    <div>
        <h1>Boto Start</h1>
        {isShow &&  <h3>React Cource</h3>}
        <p>{count}</p>
        <button onClick={ClickHandler}>toggle</button>
    </div>
  )
}

export default Photos