import { startTransition, useState, useTransition } from "react"

function arrayCreator(number = 10){
    const myArray = []
    for (let index = number; index > 0; index--) {
       myArray.push(index);
    }
    return myArray
}

function TransitionComponent() {
    console.log("TransitionComponent is rendered")
    // const [counter, setCounter] = useState(1)
    const [counter, setCounter] = useState(arrayCreator())
    const [value, setValue] = useState("")
    const [isPending, startTransition] = useTransition()

    // const clickHandler = () => {
    //     setCounter(counter => counter + 1)
    //     setCounter(counter => counter + 1)
    //     setCounter(counter => counter + 1)
    //     setValue("Mobina")
    // }

    // const changeHandler = (event) => {
    //     setValue(event.target.value)
    //     setCounter(arrayCreator(event.target.value))
    // }

    const changeHandler = (event) => {
        setValue(event.target.value)
        startTransition(()=>setCounter(arrayCreator(event.target.value)))
    }

  return (
    <div>
        {/* <p>{counter} - {value}</p> */}
        <input type="text" value={value} onChange={changeHandler} />
        {/* <button onClick={clickHandler}>+</button> */}
        {isPending ? <h1>Loading...</h1> : <>{counter.map(i => <p key={i}>{i}</p>)}</> }
    </div>
  )
}

export default TransitionComponent