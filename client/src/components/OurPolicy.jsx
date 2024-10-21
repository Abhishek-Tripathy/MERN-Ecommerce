import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { MdCheckCircleOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineCurrencyExchange } from "react-icons/md";


function OurPolicy() {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`${theme==='dark' ? "text-gray-100" : ""} flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700`}>
      <div>
         <MdOutlineCurrencyExchange className={`${theme==='dark' ? "text-gray-100":""} w-12 m-auto mb-3`} style={{ width: '58px', height: '58px' }} />
         <p className={`${theme==='dark' ? "text-gray-200" : "text-gray-800"}`}>Easy Exchange Policy</p>
         <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>We Offer hassle free exchange policy</p>
      </div>
      <div>
         <MdCheckCircleOutline className={`${theme==='dark' ? "text-gray-100":""} w-12 m-auto mb-3`} style={{ width: '60px', height: '60px' }} />
         <p className={`${theme==='dark' ? "text-gray-200" : "text-gray-800"}`}>7 Days Return Policy</p>
         <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>We provide 7 days free return policy</p>
      </div>
      <div>
         <TfiHeadphoneAlt className={`${theme==='dark' ? "text-white":""} w-12 m-auto mb-3`} style={{ width: '60px', height: '60px' }} />
         <p className={`${theme==='dark' ? "text-gray-200" : "text-gray-800"}`}>Best Customer Support</p>
         <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>We provide best customer support</p> 
      </div>
    </div>
  )
}

export default OurPolicy