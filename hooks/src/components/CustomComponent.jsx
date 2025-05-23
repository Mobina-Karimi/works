import { useEffect } from "react"
import { useTitle } from "../hooks/useTitle"
import { useLocalStorage } from "../hooks/useLocalStoragr"

function CustomComponent() {
    // useEffect(()=>{
    //     document.title = "Custom Page"
    // },[])
    useTitle("Custom Page")

    const [name, setName] = useLocalStorage("name", "")
    console.log(name)
  return (
    <div>
        <p>{name}</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default CustomComponent