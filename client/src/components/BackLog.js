import React, { useEffect, useState } from 'react'
import style from '../Styles/Main.module.css'
import Project from './Project'
import axios from 'axios'

const BackLog = props =>{
    const [projects,setProjects]=useState([])
    const [update, setUpdate]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects/backLog")
        .then(res=>setProjects(res.data.projects))
    },[props.update])

    const giveUpdate = u =>{
        // setUpdate(!update)
        props.action()
    }

    return(
        <div>
            <h1>Backlog</h1>
            <div>
                {projects.map((project,i)=>{
                    return(
                        <Project a={projects} project={project} action={giveUpdate} text={"Start Project"} color={style.yellow}/>
                    )
                })}
            </div>
        </div>
    )
}
export default BackLog;