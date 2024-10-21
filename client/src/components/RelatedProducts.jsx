import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

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
    <div className={`my-24 ${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className="py-2 text-center text-3xl">
         <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
         {related.map((item, index) => (
            <ProductItem price={item.price} name={item.name} id={item._id} key={index} image={item.image} />
         ))}
      </div>
    </div>
  )
}

export default RelatedProducts