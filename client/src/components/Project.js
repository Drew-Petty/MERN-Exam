import axios from 'axios'
import React, { useEffect, useState } from'react'
import style from '../Styles/Main.module.css'

const Project = props =>{
    const [project, setProject]=useState({})
    const [date, setDate]=useState({})
    
    useEffect(()=>{
        setProject(props.project)
        const date = props.project.dueDate
        const year = date.slice(0,4)
        const month = date.slice(5,7)
        const day = date.slice(8,10)
        var due=""
        if(month == "00"){
            due = new Date(year,11,day)
        }else{
            due = new Date(year,month-1,day)
        }
        const today = new Date()
        setDate({
            year:year,
            month:month,
            day:day,
            today:today,
            due:due,
        })
    },[props.a])
    useEffect(()=>{
        axios.put(`http://localhost:8000/api/projects/update/${project._id}`,project)
        .then(props.action)
    },[project])

    const start = e =>{
        e.preventDefault();
        setProject({...project,status:"inProgress"})
    }
    const complete = e =>{
        e.preventDefault();
        setProject({...project,status:"completed"})
    }
    const remove = e =>{
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/projects/delete/${project._id}`)
        .then(props.action)
    }
    return(
        <div className={style.project}>
            <h3>{project.projectName}</h3>
            <h4 className={date.today>date.due?style.pastDue:style.normal}>Due: {date.month}/{date.day}/{date.year}</h4>
            <button className={props.color} onClick={project.status =="backLog"?start:project.status=="inProgress"?complete:remove}>{props.text}</button>
        </div>
    )
}
export default Project;