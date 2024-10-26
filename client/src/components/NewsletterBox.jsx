import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { motion } from "framer-motion";


function NewsletterBox() {
   const {theme} = useContext(ShopContext)
   function onSubmitHandler (e) {
      e.preventDefault()
   }

   return (
    <div className={`text-center ${theme === 'dark' ? "text-gray-100" : ""}`}>
      <motion.p
        className={`text-2xl font-medium ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        Subscribe now and get 20% off
      </motion.p>
      <motion.p
        className='text-gray-400 mt-3'
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>
      <motion.form
        onSubmit={onSubmitHandler}
        className={`w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border ${
          theme === 'dark' ? 'border-gray-500 bg-gray-800' : 'border-gray-300 bg-white'
        }`}
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5, delay: 0.4 }} // Duration and delay
      >
        {/* Input box styling adjusted for dark and light themes */}
        <input
          type="email"
          className={`w-full sm:flex-1 outline-none border-none p-2 ${
            theme === 'dark' ? 'bg-gray-800 text-gray-100 placeholder-gray-400' : 'bg-white text-gray-800 placeholder-gray-500'
          }`}
          placeholder='Enter your Email'
          required
        />
        <button
          type='submit'
          className={`text-s px-5 py-4 ${
            theme === 'dark' ? "text-gray-900 bg-slate-300" : "bg-gray-900 text-white"
          }`}
        >
          SUBSCRIBE
        </button>
      </motion.form>
    </div>
  );
  
    
}

export default NewsletterBox