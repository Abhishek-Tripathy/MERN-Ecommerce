import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion } from "framer-motion";


function Title({text1, text2}) {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`gap-2 inline-flex items-center mb-3 ${theme === 'dark' ? "text-gray-100" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: -10 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.3 }} // Duration of animation
        className={`${theme === 'dark' ? "text-gray-200" : "text-gray-500"}`}
      >
        {text1} 
        <span className={`${theme === 'dark' ? "text-gray-400" : "text-gray-700 "} font-medium`}>
          {text2}
        </span>
      </motion.p>
      <motion.p
        initial={{ width: 0 }} // Start with zero width
        animate={{ width: "100%" }} // Animate to full width
        transition={{ duration: 0.5 }} // Duration of animation
        className={`h-[1px] sm:h-[2px] ${theme === 'dark' ? "bg-gray-300" : "bg-gray-700"}`}
      ></motion.p>
    </div>
);

}

export default Title