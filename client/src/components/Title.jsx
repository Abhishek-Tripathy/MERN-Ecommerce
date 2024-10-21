import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Title({text1, text2}) {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`gap-2 inline-flex items-center mb-3 ${theme==='dark' ? "text-gray-100" : ""}`}>
      <p className={`${theme==='dark' ? "text-gray-200" : "text-gray-500"}`}>{text1} <span className={`${theme==='dark' ? "text-gray-400" : "text-gray-700 "} font-medium`}>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title