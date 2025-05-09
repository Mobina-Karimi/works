import Parent from "./components/Parent"
import WelcomeMessage from "./components/WelcomeMessage"
import WelcomePage from "./components/WelcomePage"

function App() {

  return (
    <>
      <h3>React concepts</h3>
      {/* <Parent/> */}
      {/* <WelcomePage userName="Milad"/> */}
      <WelcomePage>
        <WelcomeMessage userName="Milad"/>
      </WelcomePage>
    </>
  )
}

export default App
