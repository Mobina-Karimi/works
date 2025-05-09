import { useState } from "react"
import "./CourseCard.css"

function CourseCard({data: {name, description}}) {
  const [selected, setSelected] = useState(false)

  const cssStyle = {color:"red" , margin: "10px", border: "red 1px solid", backgroundColor : "silver"}

  const selectedClass = {color:"green"}

  return (
    // <li className={(selected) ? "selected" : ""}>
    //     <h4>{name}</h4>
    //     <p>{description}</p>
    //     <button onClick={() => setSelected((s=>!s))}>change</button>
    // </li>

    // <li className={`container ${selected && "selected"}`}>
    //     <h4>{name}</h4>
    //     <p>{description}</p>
    //     <button onClick={() => setSelected((s=>!s))}>change</button>
    // </li>

    // <li style={selected ? selectedClass : cssStyle}>
    //     <h4>{name}</h4>
    //     <p>{description}</p>
    //     <button onClick={() => setSelected((s=>!s))}>change</button>
    // </li>

    // <li style={{color : selected ? "green" : "red"}}>
    //     <h4>{name}</h4>
    //     <p>{description}</p>
    //     <button onClick={() => setSelected((s=>!s))}>change</button>
    // </li>

    <li>
        <h4>{name}</h4>
        <p>{description}</p>
        <button onClick={() => setSelected((s=>!s))}>change</button>
    </li>
  )
}

export default CourseCard