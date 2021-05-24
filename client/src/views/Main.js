import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'
import BackLog from '../components/BackLog'
import InProgress from '../components/InProgress'
import Completed from '../components/Completed'
import style from '../Styles/Main.module.css'

const Main = props =>{
    const [update, setUpdate]=useState(false)
    const giveUpdate = u =>{
        setUpdate(!update)
    }
    useEffect(()=>{

    },[])

    const newProject = e=>{
        navigate("/projects/new")
    }
    return(<div>
        <div className={style.status} >
            <BackLog action={giveUpdate} update={update}/>
            <InProgress action={giveUpdate} update={update}/>
            <Completed action={giveUpdate} update={update}/>
        </div>
        <div>
            <button onClick={newProject}>Add New Projct</button>
        </div>
    </div>)
}
export default Main;