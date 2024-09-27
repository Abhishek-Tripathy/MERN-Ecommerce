import React, { useState } from 'react'

function Login() {
  const [currentState, setCurrentState] = useState("Signup")

  function onSubmitHandler(e) {
    e.preventDeafult()
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col m-auto items-center w-[90%] sm:max-w-96mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center mb-2 mt-10 gap-2">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none w-8 h-[1.5px] bg-gray-800' />
      </div>
      {currentState === 'Login' ? "" : 
      <input required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' /> }
      <input required type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
      <input required type="passwrod" className='w-full px-3 py-2 border border-gray-800' placeholder='PAssword' />
      
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === "Login" ? <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p> : 
        <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'
      >{currentState === "Login" ? "Signin" : "Sign Up"}</button>
    </form>
  )
}

export default Login