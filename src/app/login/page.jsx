
"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



const Login = () => {
    const [info,setInfo] = useState({email:"",password:""})
    const [error,setError] = useState('')
    const [pending,setPending] = useState(false)

    const router = useRouter()
    
    const handleInput = e=>{
        setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async e=>{
        e.preventDefault()
        console.log("Inside handleSubmit")

        if( !info.email || !info.password){
            setError('Must provide all the credentials')
        }

        console.log(info)

        try {
            setPending(true)


        } catch (error) {
            setPending(false)
            console.log('Something went wrong.')
        }
    }


    return (
        <div className="p-6">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input name='email' className="p-2 border mb-2" type="text" placeholder='Email...' onChange={e=>handleInput(e)}/><br/>
                <input name='password' className="p-2 border mb-2" type="password" placeholder='Password...' onChange={e=>handleInput(e)}/><br/>
                {error && <span className='p-2 bg-red-400 text-white mb-3'>{error}</span>}
                <br/><button disabled={pending?true:false} className='p-3 bg-blue-400 text-white'>{pending?"Logging in":"Login"}</button>
            </form>
        </div>
    )
}

export default Login
