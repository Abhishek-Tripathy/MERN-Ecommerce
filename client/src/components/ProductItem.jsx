import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link } from 'react-router-dom'
import { motion } from "framer-motion";


function ProductItem({id, image, name, price}) {
   const {currency, theme } = useContext(ShopContext)

   return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      initial={{ opacity: 0 }} // Initial state for animation
      animate={{ opacity: 1 }} // Animate to visible
      transition={{ duration: 0.3 }} // Duration of the animation
    >
      <Link className={`${theme === 'dark' ? "text-gray-100" : "text-gray-700"} cursor-pointer`} to={`/product/${id}`}>
        <div className="overflow-hidden">
          <motion.img
            className='hover:scale-110 transition ease-in-out'
            src={image[0]}
            alt=""
            whileHover={{ scale: 1.1 }} // Scale up image on hover
            transition={{ duration: 0.3 }} // Duration of the hover scale effect
          />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </motion.div>
  );
  
}

export default ProductItem