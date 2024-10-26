import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";


function BestSeller() {
  const { products, theme } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestItem = products.filter((item) => item.bestSeller);
    setBestSeller(bestItem.slice(0, 5));
  }, [products]);

  return (
   <div className={`my-10 ${theme === "dark" ? "bg-gray-900 text-gray-100" : ""}`}>
     <div className="py-8 text-center text-3xl">
       <Title text1={`BEST`} text2={`SELLERS`} />
       <p
         className={`w-3/4 m-auto text-xs sm:text-sm lg:text-base ${
           theme === "dark" ? "text-gray-400" : "text-gray-600"
         }`}
       >
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </p>
     </div>
     {/* Render Products */}
     <motion.div
       className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
       initial="hidden"
       animate="visible"
       variants={{
         hidden: {
           opacity: 0,
           transition: { staggerChildren: 0.2 }, // Adjust stagger timing
         },
         visible: {
           opacity: 1,
           transition: { staggerChildren: 0.2 }, // Adjust stagger timing
         },
       }}
     >
       {bestSeller.map((item, index) => (
         <motion.div
           key={index}
           variants={{
             hidden: { opacity: 0, y: 20 }, // Start off-screen and transparent
             visible: { opacity: 1, y: 0 }, // End on-screen and fully visible
           }}
           transition={{ duration: 0.5 }} // Animation duration
         >
           <ProductItem
             id={item._id}
             image={item.image}
             name={item.name}
             price={item.price}
           />
         </motion.div>
       ))}
     </motion.div>
   </div>
 );
 
}

export default BestSeller;
