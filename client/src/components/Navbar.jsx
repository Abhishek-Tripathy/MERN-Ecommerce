import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FiSun, FiMoon, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

function Navbar() {

   const [visible, setVisible] = useState(false)

   const {setShowSearch, getCartCount, token, navigate, setToken, setCartItems, toggleTheme, theme} = useContext(ShopContext)
   

   const logout = () =>{
      navigate('/login')
      localStorage.removeItem('token')
      setToken("")
      setCartItems({})
   }

   
  return (
    <div className={`flex items-center justify-between font-medium py-5 ${theme==='dark' ? "text-gray-100 bg-gray-900" : ""}`}>

      <Link to='/'>
         <img src={assets.logo} alt="" className='w-36'/>
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
         <NavLink to='/' className={`flex flex-col items-center gap-1 ${theme === 'dark' ? "text-gray-100" : ""}`}>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
         </NavLink>
         <NavLink to='/collection' className={`flex flex-col items-center gap-1 ${theme === 'dark' ? "text-gray-100" : ""}`}>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
         </NavLink>
         <NavLink to='/about' className={`flex flex-col items-center gap-1 ${theme === 'dark' ? "text-gray-100" : ""}`}>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'  />
         </NavLink>
         <NavLink to='/contact' className={`flex flex-col items-center gap-1 ${theme === 'dark' ? "text-gray-100" : ""}`}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '  />
         </NavLink>
      </ul>

      <div className={`${theme==='dark' ? "text-gray-100 bg-gray-900" : ""} flex items-center gap-6`}>
         <FiSearch onClick={() => setShowSearch(true)} className='w-5 cursor-pointer p-0 m-0' style={{ width: '25px', height: '25px' }} />

         <div className={`group relative ${theme==='dark' ? "text-gray-100 bg-gray-900" : ""}`}>
            <FiUser onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' style={{ width: '27px', height: '27px' }}/>
            {/* -----------Drop Down Menu----------------- */}
            {token && 
            <div className={`${theme==='dark' ? "text-gray-100 bg-gray-900" : ""} group-hover:block hidden absolute dropdown-menu right-0 pt-4`}>
               <div className={`${theme==='dark' ? "text-gray-100 bg-gray-700" : "bg-slate-100 text-gray-500 "} flex flex-col gap-2 w-36 py-3 px-5 rounded`}>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
               </div>
            </div>}
         </div>
         <Link to='/cart' className='relative'>
            <FiShoppingCart className='w-5 min-w-5' style={{ width: '22px', height: '22px' }}/>
            <p className={`${theme==='dark' ? "bg-gray-100 text-gray-800" : "bg-black text-white"} absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square rounded-full text-[8px]`}>{getCartCount()}</p>
         </Link>
         <button onClick={toggleTheme}>
            {theme==='light' ? <FiMoon size={24} /> : <FiSun size={24} />}
         </button>
         <img onClick={() => setVisible(true)} src={assets.menu_icon} className='cursor-pointer w-5 sm:hidden' alt="" />
      </div>

      {/* Sidebar Menu for Small screen */}
      <div className={`${theme==='dark' ? "text-gray-100 bg-gray-900" : "bg-white"} absolute top-0 right-0 bottom-0 overflow-hidden  transition-all ${visible ? `w-full` : `w-0`}`}>
         <div className={`flex flex-col cursor-pointer ${theme === 'dark' ? "bg-gray-900 text-gray-100" : "text-gray-600"}`}>
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
               <img src={assets.dropdown_icon} className='h-4 rotate-180 ' alt="" />
               <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className={`${theme==='dark' ? "text-gray-100" : ""} py-2 pl-6 border`} to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className={`${theme==='dark' ? "text-gray-100" : ""} py-2 pl-6 border`} to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className={`${theme==='dark' ? "text-gray-100" : ""} py-2 pl-6 border`} to='/about'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className={`${theme==='dark' ? "text-gray-100" : ""} py-2 pl-6 border`} to='/contact'>CONTACT</NavLink>
         </div>
      </div>

    </div>
  )
}

export default Navbar