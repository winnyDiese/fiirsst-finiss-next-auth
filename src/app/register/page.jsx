
"use client"

import React, { useState } from 'react'

const Register = () => {
    const [info,setInfo] = useState({username:"",email:"",password:""})

    const handleInput = e=>{
        setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = e=>{
        e.preventDefault()
        if(!info.username || !info.email || !info.password){
            setError('Must provide all the credentials')
        }
    }

    console.log({info})

    return (
        <div className='p-6'>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <input name='username' type="text" placeholder='Name...' onChange={e=>handleInput(e)}/> <br/>
                <input name='email' type="text" placeholder='Email...' onChange={e=>handleInput(e)}/><br/>
                <input name='password' type="text" placeholder='Password...' onChange={e=>handleInput(e)}/><br/>
                <input  type="submit" value="Submit"/><br/>
            </form>
        </div>
    )
}

export default Register