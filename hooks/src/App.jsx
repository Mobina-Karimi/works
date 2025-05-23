import { Route, Routes } from "react-router-dom"
import CustomComponent from "./components/CustomComponent"
import MemoComponent from "./components/MemoComponent"
import RefComponent from "./components/RefComponent"
import TransitionComponent from "./components/TransitionComponent"
function App() {

  return (
    <>
    {/* <RefComponent/> */}
    {/* <MemoComponent/> */}
    {/* <TransitionComponent/> */}
    {/* <CustomComponent/> */}
    <Routes>
      <Route path="/" element={<CustomComponent/>}/>
      <Route path="/memo" element={<MemoComponent/>}/>
    </Routes>
    </>
  )
}

export default App
