import { Link, navigate } from '@reach/router'
import React, { useState } from 'react'
import Style from '../Styles/New.module.css'
import axios from 'axios'

const New = props =>{
    const [myForm, setMyForm] = useState({
        status:"backLog"
    })
    const [errors, setErrors] = useState({})
    
    const submitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/projects/new",myForm)
        .then(res =>{
            if(res.data.error){
                setErrors(res.data.error.errors)
            }else{
                navigate("/")
            }
        })

    }
    const changeHandler = e =>{
        setMyForm({...myForm,[e.target.name]:e.target.value})
    }
    

    return(
    <div className={Style.newView}>
        <Link to={"/"}>Back to Dashboard</Link>
        <form className={Style.projectForm} onSubmit={submitHandler}>
            <fieldset>
                <legend>Plan a new project</legend>
                <p className={Style.input}>
                    <label for="projectName">Project:</label>
                    <input type="text" name="projectName" onChange={changeHandler}/>
                </p>
                {errors.projectName?<p className={Style.error}>{errors.projectName.message}</p>:""}
                <p className={Style.input}>
                    <label for="dueDate">Due Date:</label>
                    <input type="date" name="dueDate" onChange={changeHandler}/>
                </p>
                {errors.dueDate?<p className={Style.error}>{errors.dueDate.message}</p>:""}
                <input type="submit" value="Plan Project"/>
            </fieldset>
        </form>
    </div>)
}
export default New;