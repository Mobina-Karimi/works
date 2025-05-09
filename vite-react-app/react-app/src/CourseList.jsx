import { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseList.module.css" 
// import "./CourseList.css"

function CourseList(){
    // const Courses = ["React","Java Script","Next", "Node"]
    const [selected, setSelected] = useState(true)

    console.log(styles)

    const Courses = [
        {id:1,name:"React" , description: "This is React course"},
        {id:2,name:"Java Script" , description: "This is Java Script course"},
        {id:3,name:"Next" , description: "This is Next course"},
        {id:4,name:"Node" , description: "This is Node course"}
    ]
    return(
        // <div className={selected ? styles.container : styles.selected}>
        <div className={styles.container}>
        {/* <div> */}
            <h3>Courses</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestias saepe? Accusantium, iusto, aliquid error ex iure enim vero nesciunt magnam fugiat unde pariatur obcaecati illum! Vero aliquid harum molestias.</p>
            {/* <ul>{Courses.map((Course, index) => <li key={index}>{Course}</li>)}</ul> */}
            {/* <ul>{Courses.map((Course) => <li key={Course.id}>{Course.name}</li>)}</ul> */}
            {/* <ul>{Courses.map((Course) => 
                <li key={Course.id}>
                    <h4>{Course.name}</h4>
                    <p>{Course.description}</p>
                </li>)}
            </ul> */}
             <ul>{Courses.map((Course) => (<CourseCard key={Course.id} data={Course}/>))}
            </ul>
        </div>
    )
}
export default CourseList;