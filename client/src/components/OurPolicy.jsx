import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { MdCheckCircleOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { motion } from "framer-motion";


function OurPolicy() {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`${theme === 'dark' ? "text-gray-100" : ""} flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <MdOutlineCurrencyExchange className={`${theme === 'dark' ? "text-gray-100" : ""} w-12 m-auto mb-3`} style={{ width: '58px', height: '58px' }} />
        <p className={`${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Easy Exchange Policy</p>
        <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>We offer hassle-free exchange policy</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5, delay: 0.1 }} // Duration and delay for staggered effect
      >
        <MdCheckCircleOutline className={`${theme === 'dark' ? "text-gray-100" : ""} w-12 m-auto mb-3`} style={{ width: '60px', height: '60px' }} />
        <p className={`${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>7 Days Return Policy</p>
        <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>We provide 7 days free return policy</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay for staggered effect
      >
        <TfiHeadphoneAlt className={`${theme === 'dark' ? "text-white" : ""} w-12 m-auto mb-3`} style={{ width: '60px', height: '60px' }} />
        <p className={`${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Best Customer Support</p>
        <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>We provide best customer support</p>
      </motion.div>
    </div>
  );
  
}

export default OurPolicy