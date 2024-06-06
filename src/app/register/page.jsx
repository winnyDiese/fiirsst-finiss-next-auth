
"use client"

import React, { useState } from 'react'

const Register = () => {
    const [info,setInfo] = useState({username:"",email:"",password:""})
    const [error,setError] = useState('')
    const [pending,setPending] = useState(false)

    const handleInput = e=>{
        setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async e=>{
        e.preventDefault()
        console.log("Inside handleSubmit")

        if(!info.username || !info.email || !info.password){
            setError('Must provide all the credentials')
        }

        try {
            setPending(true)

            const res = await fetch("api/register",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(info)
            })

            if(res.ok){
                setPending(false)
                const form = e.target
                form.reset()
                console.log("user registered")
            }else{
                console.log("Something went wrong.")
                setError(errorData.message)
                setPending(false)
            }

        } catch (error) {
            setPending(false)
            console.log('Something went wrong.')
        }
    }

    // console.log({info.password})
    console.log({info})
    console.log(info.password)

    return (
        <div className='p-6'>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <input name='username' className="p-2 border mb-2" type="text" placeholder='Name...' onChange={e=>handleInput(e)}/> <br/>
                <input name='email' className="p-2 border mb-2" type="text" placeholder='Email...' onChange={e=>handleInput(e)}/><br/>
                <input name='password' className="p-2 border mb-2" type="password" placeholder='Password...' onChange={e=>handleInput(e)}/><br/>
                {error && <span className='p-2 bg-red-400 text-white mb-3'>{error}</span>}
                <br/><input  type="submit" className='p-3 bg-blue-400 text-white' value="Submit"/>
            </form>
        </div>
    )
}

export default Register