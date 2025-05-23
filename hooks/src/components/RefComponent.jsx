import { useEffect, useRef, useState } from "react"

function RefComponent() {
  console.log("Render")
  const number = useRef(0)
  const input = useRef(null)
  const [counter, setCounter] = useState(0)
  // console.log(number)

  const services = [
    {id : 1, title : "Payment"},
    {id : 2, title : "Education"},
    {id : 3, title : "Payment"},
  ]

  useEffect(()=>{
    input.current.focus()
  },[])

  const numberHandler = () => {
    // // number.current = 5
    // // number.current = number.current +1
    // number.current ++
    // services.push({id : 2, title : "Education"})
    // console.log(number)
    // console.log(services)

    // console.log(input)
    console.log(input.current.value)
  }

  const counterHandler = () => {
    setCounter(counter => counter +1)
  }
  return (
    <div>
      <h3>RefComponent</h3>
      <input type="text" ref={input}/>
      <br/>
      <button onClick={numberHandler}>Increase</button>
      <ul>{services.map(s => <li key={s.id}>{s.title}</li>)}</ul>
      <p>{counter}</p>
      <button onClick={counterHandler}>+ counter</button>
    </div>
  )
}

export default RefComponent