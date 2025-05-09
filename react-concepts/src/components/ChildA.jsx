import StyledDiv from "./StyledDiv"

function ChildA({number,setNumber}) {
  return (
    <StyledDiv>
        <h3>child A</h3>
        <p>{number}</p>
        <button onClick={()=>setNumber((number => number+1))}>+</button>
    </StyledDiv>
  )
}

export default ChildA