import React, { useState } from 'react'

function Login({handleLogin}) {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
// two way binding
const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
}

  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <div className="border-2 rounded-xl border-emerald-600 p-20 max-w-sm login">
        <form className='flex flex-col items-center justify-center'onSubmit={submitHandler}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-5 placeholder:text-gray-500' type="email"placeholder='Email' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-5 placeholder:text-gray-500' type="password"placeholder='Password' />
            <button  required className=' rounded-full py-3 px-5 text-xl text-white-500 text-xl outline-none bg-emerald-600 border-none mt-5' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
