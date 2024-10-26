import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { motion } from "framer-motion";


function RelatedProducts({category, subCategory}) {
   const {products, theme} = useContext(ShopContext)
   const [related, setRelated] = useState([])


   useEffect(() => {
      if(products.length > 0) {
         let productsCopy = products.slice()

         productsCopy = productsCopy.filter((item) => category===item.category)
         productsCopy = productsCopy.filter((item) => subCategory===item.subCategory)

         setRelated(productsCopy.slice(0,5));
         
      }
   }, [products])
   return (
      <div className={`my-24 ${theme === 'dark' ? "text-gray-100" : ""}`}>
        <div className="py-2 text-center text-3xl">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
          initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward position
          animate={{ opacity: 1, y: 0 }} // Animate to visible and upward position
          transition={{ duration: 0.5 }} // Animation duration
        >
          {related.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ duration: 0.2 }} // Duration of hover effect
            >
              <ProductItem 
                price={item.price} 
                name={item.name} 
                id={item._id} 
                image={item.image} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
    
}

export default RelatedProducts