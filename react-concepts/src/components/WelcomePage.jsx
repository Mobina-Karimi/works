import WelcomeMassage from "./WelcomeMessage"

// function WelcomePage({userName,childern}) {
function WelcomePage({children}) {
  return (
    <div>
        <p>something</p>
        {children}
        {/* <WelcomeMessage userName={userName}/> */}
    </div>
  )
}

export default WelcomePage