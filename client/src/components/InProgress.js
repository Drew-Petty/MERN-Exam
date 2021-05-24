import React, { useEffect, useState } from 'react'
import style from '../Styles/Main.module.css'
import Project from './Project'
import axios from 'axios'

const InProgress = props =>{
    const [projects,setProjects]=useState([])
    const [update, setUpdate]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects/inProgress")
        .then(res=>setProjects(res.data.projects))
    },[props.update])

    const giveUpdate = u =>{
        console.log("works")
        // setUpdate(!update)
        props.action()
    }
    return(
        <div>
            <h1>In Progress</h1>
            <div>
                {projects.map((project,i)=>{
                    return(
                        <Project a={projects} project={project} action={giveUpdate} text={"Complete"}color={style.green}/>
                    )
                })}
            </div>
        </div>
    )
}
export default InProgress;