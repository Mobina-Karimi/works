// function ChildB({number,text}) {
function ChildB({number,button}) {
  return (
    <div>
        <h3>child B</h3>
        <p>{number}</p>
        {/* {text} */}
        {button}
    </div>
  )
}

export default ChildB