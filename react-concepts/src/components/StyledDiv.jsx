// function StyledDiv({jsx}) {
//   const styles = {border: "1px solid black", padding: "10px", margin: "20px"}
//   return (
//     <div style={styles}>{jsx}</div>
//   )
// }

function StyledDiv({children,title}) {
  // console.log(props)
  const styles = {border: "1px solid black", padding: "10px", margin: "20px"}
  return (
    <div style={styles}><h3>{title}</h3>{children}</div>
  )
}

export default StyledDiv