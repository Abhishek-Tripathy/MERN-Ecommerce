import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function BestSeller() {
   const {products} = useContext(ShopContext)
   const [bestSeller, setBestSeller] = useState([])

   useEffect(() => {
      const bestItem = products.filter((item) => (item.bestseller))
      setBestSeller(bestItem.slice(0,5))
   },[])
  return (
    <div className='my-10'>
      <div className="py-8 text-center text-3xl">
         <Title text1={`BEST`} text2={`SELLERS`} />
         <p className='w-3/4 m-auto text-xs sm:text-sm lg:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         </p>
      </div>
      {/* Render Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
      {
         bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
         ))
      }
      </div>
    </div>
  )
}

export default BestSeller