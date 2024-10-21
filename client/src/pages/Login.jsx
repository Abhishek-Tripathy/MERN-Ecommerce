import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const [currentState, setCurrentState] = useState("Login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {token, setToken, navigate, backendUrl, theme} = useContext(ShopContext)

  async function onSubmitHandler(e) {
    e.preventDefault()
    try {
      if(currentState === "Sign Up"){
        const res = await axios.post(backendUrl + "api/user/register", {name, email, password})
        console.log(res);
        if(res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token', res.data.token)
        }else{
          toast.error(res.data.message)
        }
      }else{
        const res = await axios.post(backendUrl + 'api/user/login', {email, password} )
        if(res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token', res.data.token)
        }else{
          toast.error(res.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className={`flex flex-col m-auto items-center w-[90%] sm:max-w-96mt-14 gap-4 text-gray-800 ${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className="inline-flex items-center mb-2 mt-10 gap-2">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none w-8 h-[1.5px] bg-gray-800' />
      </div>
      {currentState === 'Login' ? "" : 
      <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' /> }
      <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
      <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
      
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === "Login" ? <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p> : 
        <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4' type='submit'
      >{currentState === "Login" ? "Signin" : "Sign Up"}</button>
    </form>
  )
}

export default Login