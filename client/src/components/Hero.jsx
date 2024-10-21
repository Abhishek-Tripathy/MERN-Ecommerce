import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

function Hero() {
   const {theme} = useContext(ShopContext)
  return (
    <div className={`flex flex-col sm:flex-row border border-gray-400 ${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
         <div className={`${theme==='dark' ? "text-[#BEBEBE]" : "text-[#414141]"}`}>
            <div className="flex items-center gap-2 ">
               <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
               <p className='font-medium text-sm md:text-base '>OUR BESTSELLERs</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Latest Arrivals</h1>
            <div className="flex items-center gap-2">
               <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
               <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
         </div>
      </div>
      {/* HERO RiGHT SIDE */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero