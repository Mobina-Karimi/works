// import { useState } from "react"

// function Form() {
//     const [email, setEmail] = useState("") 
//     const [password, setPassword] = useState("") 
//     const [role, setRole] = useState("user") 
//     const [gender, setGender] = useState("male") 
//     const [rules, setRules] = useState(false) 

//     const loginHandler = () => {
//         // console.log(event.target.innerHTML)
//         // console.log("Login")
//         console.log({email, password, role, gender, rules})
//     }
//     const emailHandler = (event) =>{
//         // console.log("Email")
//         // console.log(event.target.value)
//         setEmail(event.target.value)
//     }
//     const passwordHanddler = (event) => {
//         setPassword(event.target.value)
//     }
//     const selectHandler = (event) => {
//         // console.log(event.target.value)
//         setRole(event.target.value)
//     }
//     const genderHandler = (event) => {
//         // console.log(event.target.value)
//         setGender(event.target.value)
//     }
//     const rulesHandler = (event) => {
//         // console.log(event.target.value)
//         setRules((event) => !event)
//     }
//    return (
//     <div>
//         <input type="text" placeholder="Email" value={email} onChange={emailHandler} />
//         <input type="password" placeholder="Password" value={password} onChange={passwordHanddler} />
//         <select value={role} onChange={selectHandler}>
//             <option value="writer">Writer</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//         </select>
//         <div>
//             <label htmlFor="male">Male</label>
//             <input type="radio" name="gender" id="male" value="male" onChange={genderHandler} checked={gender === "male"}/>
//             <label htmlFor="female">Female</label>
//             <input type="radio" name="gender" id="female" value="female" onChange={genderHandler} checked={gender === "female"}/>
//             <label htmlFor="other">Other</label>
//             <input type="radio" name="gender" id="other" value="other" onChange={genderHandler} checked={gender === "other"}/>
//         </div>
//         <input type="checkbox" checked={rules} onChange={rulesHandler} />
//         <button onClick={loginHandler}>Login</button>
//     </div>
//   )
// }

// export default Form



import { useState } from "react"

function Form() {
    const [form, setForm] = useState ({
        email : "",
        password : "",
        role : "user",
        gender : "male",
        rules : false
    })

    // const loginHandler = () => {
    //     // console.log(event.target.innerHTML)
    //     // console.log("Login")
    //     console.log(form)
    // }
    const changeHandler = (event) => {
        // console.log(event.target)
        const name = event.target.name
        const value = event.target.value
        if(name == "rules"){
            setForm((form) => ({...form, rules: !form.rules}))
        }else{
            setForm((form) => ({...form, [name]: value}))
        }
    }
    const submitHandler =  (event) => {
        event.preventDefault()
        console.log(form)
    }
   return (
    <div>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Email" name="email" value={form.email} onChange={changeHandler} />
        <input type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler} />
        <select name="role" value={form.role} onChange={changeHandler}>
            <option value="writer">Writer</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        <div>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" onChange={changeHandler} checked={form.gender === "male"}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" value="female" onChange={changeHandler} checked={form.gender === "female"}/>
            <label htmlFor="other">Other</label>
            <input type="radio" name="gender" id="other" value="other" onChange={changeHandler} checked={form.gender === "other"}/>
        </div>
        <input type="checkbox" name="rules" checked={form.rules} onChange={changeHandler} />
        {/* <button onClick={loginHandler}>Login</button> */}
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Form