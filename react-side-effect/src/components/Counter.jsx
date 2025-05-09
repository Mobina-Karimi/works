import { useEffect, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count =>count+1)
        },1000)

        return ()=>{
            console.log("cleanup")
            clearInterval(interval)
             } //cleaup function
    },[count])
  return (
    <div>{count}</div>
  )
}

export default Counter