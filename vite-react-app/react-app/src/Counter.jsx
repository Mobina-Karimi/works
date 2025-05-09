import { useState } from "react"

const Counter = () => {
  // const hook = useState(0)
  // console.log(hook)
  const [counter, setCounter] = useState(0)
  const [isShow, setIsShow] = useState(true)

    // const IncreaseHandler = () => {
    //     console.log("Increase")
    // }
    const IncreaseHandler = () => {
        // setCounter(counter + 1)
        setCounter(counter => counter+ 1)
    }
    const IncreaseHandler3 = () =>{
      setCounter(counter => counter+ 1)
      setCounter(counter => counter+ 1)
      setCounter(counter => counter+ 1)
    }
    const StopHandler = () => {
      setCounter("-")
    }
    const showHandler = () => setIsShow(true)
    const hideHandler = () => setIsShow(false)

  return (
    <>
    <button onClick={showHandler}>Show</button>
    <button onClick={hideHandler}>Hide</button>
    {/* {
      isShow ? (<div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={IncreaseHandler}>Increase 1</button>
        <button onClick={IncreaseHandler3}>Increase 3</button>
        <button onClick={StopHandler}>Stop</button>
        <button onClick={() => {console.log("Increase")}}>Increase</button>
    </div>
    ) : null
    } */}
    {
      isShow &&(<div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={IncreaseHandler}>Increase 1</button>
        <button onClick={IncreaseHandler3}>Increase 3</button>
        <button onClick={StopHandler}>Stop</button>
        {/* <button onClick={() => {console.log("Increase")}}>Increase</button> */}
    </div>
    )
    }
    </>
  )
}

export default Counter