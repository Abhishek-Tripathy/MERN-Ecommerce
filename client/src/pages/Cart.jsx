import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from 'framer-motion';

function Cart() {
  const {products, currency,theme, cartItems, updateCartQuantity, navigate} = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    let tempData = []

    if(products.length > 0) {
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
    }
    setCartData(tempData)
  }, [cartItems, products])

  return (
    <div className={`${theme === 'dark' ? "text-gray-100" : ""} border-t pt-14`}>
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`py-4 border-t border-b ${theme === 'dark' ? "text-gray-300" : "text-gray-700"} items-center gap-4 grid grid-cols-[4fr_0.5fr_ 0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]`}
            >
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className={`px-2 sm:px-3 sm:py-1 border ${theme === 'dark' ? "bg-gray-600" : "bg-slate-200"}`}>{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateCartQuantity(item._id, item.size, Number(e.target.value))}
                className={`border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ${theme === 'dark' ? "text-gray-100 bg-gray-700" : ""}`}
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => updateCartQuantity(item._id, item.size, 0)}
                className='w-4 mr-4 sm:w-5 cursor-pointer'
                style={{ width: '23px', height: '23px' }}
              >
                <RiDeleteBin6Line />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: theme === 'dark' ? "#e5e5e5" : "#3a3a3a" }}
              whileTap={{ scale: 1 }}
              onClick={() => navigate('/place-order')}
              className={`${theme === 'dark' ? "bg-gray-100 text-gray-900 hover:bg-gray-300" : "bg-black text-white hover:bg-gray-700"} rounded-lg text-sm my-8 px-8 py-3`}
            >
              PROCEED TO CHECKOUT
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart