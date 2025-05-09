// conditional rendering with if-else 

// function Header(){
//     const isLogin = true;

//     if(isLogin){
//         return (
//             <header>
//                 <button>Dashboard</button>
//             </header>
//         )
//     }

//     return(
//         <header>
//             <button>Login</button>
//         </header>
//     )
// }

// export default Header



// conditional rendering with ternary operator

// function Header(){
//     const isLogin = true;

//     return(
//         <header>
//            {/* {isLogin ?  <button>Dashboard</button> :  <button>Login</button>} */}
//            {isLogin ?
//                 (
//                     <div>
//                         <button>Dashboard</button>
//                         <button>Basket</button> 
//                     </div>
//                 ) :  (
//                     <>
//                         <button>Login</button>
//                         <button>Login</button>
//                     </>
//                 )
//             }
//         </header>
//     )
// }

// export default Header



// conditional rendering with And 

function Header(){
    const isLogin = true;

    return(
        <header>
           {/* {isLogin ?  <button>Dashboard</button> :  <button>Login</button>} */}
           {isLogin ?
                (
                    <>
                        <button>Dashboard</button>
                        
                    </>
                ) :  (
                    <button>Login</button>
                )
            }
            {isLogin && <button>Cart</button> }
        </header>
    )
}

export default Header