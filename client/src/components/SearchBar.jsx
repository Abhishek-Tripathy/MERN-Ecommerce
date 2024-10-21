import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {
   const {search, setSearch, showSearch, setShowSearch, theme} = useContext(ShopContext)
   const [visible, setVisible] = useState(false)
   const location = useLocation()

   useEffect(() => {
      if(location.pathname.includes("collection")){
         setVisible(true)
      }else{
         setVisible(false)
      }
   }, [location])

  return visible && showSearch ? (
    <div className={`${theme==='dark' ? "text-gray-100" : ""} border-t border-b bg-gray-50 text-center`}>
      <div className="border inline-flex items-center justify-center border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
         <input value={search} onChange={(e) => setSearch(e.target.value)} 
         type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
         <img onClick={() => setShowSearch(true)} className='w-4' src={assets.search_icon} alt="search_icon" />
      </div>
      <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='inline w-4 cursor-pointer' alt="cross_icon" />
    </div>
  ) : null
}

export default SearchBar