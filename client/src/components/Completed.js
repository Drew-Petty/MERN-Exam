import React, { useEffect, useState } from 'react'
import style from '../Styles/Main.module.css'
import Project from './Project'
import axios from 'axios'

const Completed = props =>{
    const [projects,setProjects]=useState([])
    const [update, setUpdate]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects/completed")
        .then(res=>setProjects(res.data.projects))
    },[props.update])

    const giveUpdate = u =>{
        // setUpdate(!update)
        props.action()
    }
    return(
        <div>
            <h1>Completed</h1>
            <div>
                {projects.map((project,i)=>{
                    return(
                        <Project project={project} action={giveUpdate} text={"remove"} color={style.red} a={projects}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Completed;