import { memo } from "react"

function ChildComponent({number, clickHandler}) {
    console.log("ChildComponent is rendered")
  return (
    <div>
        <h3>ChildComponent {number}</h3>
        <button onClick={clickHandler}>+ child</button>
    </div>
  )
}

export default memo(ChildComponent)