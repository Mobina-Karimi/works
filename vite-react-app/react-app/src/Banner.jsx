import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div `
  /* color: blue; */
  color: ${(props) => (props.selected ? "blue" : "red")};
  background-color: silver;
  /* &:hover {
    color: red;
  } */
  @media (max-width:1200px){
    background-color: aqua;
  }
`

// function Banner(props) {
// function Banner({title, description, numOfStudent}) {
//     // console.log(props)
//     // const {title, description, numOfStudent} = props
//   return (
//     <div>
//         <hr />
//             {/* <h3>{props.title}</h3> */}
//             <h3>{title}</h3>
//             {/* <p>{props.description}</p> */}
//             <p>{description}</p>
//             {/* <span>{props.numOfStudent} students</span> */}
//             <span>{numOfStudent} students</span>
//         <hr />
//     </div>
//   )
// }


function Banner({title, description, numOfStudent}) {
  const [selected, setSlected] = useState(true)
  // console.log(Div)
  return (
    <Div selected={selected}>
        <button onClick={() => setSlected(s => !s)}>Change</button>
        <hr />
            {/* <h3>{props.title}</h3> */}
            <h3>{title}</h3>
            {/* <p>{props.description}</p> */}
            <p>{description}</p>
            {/* <span>{props.numOfStudent} students</span> */}
            <span>{numOfStudent} students</span>
        <hr />
    </Div>
  )
}

export default Banner