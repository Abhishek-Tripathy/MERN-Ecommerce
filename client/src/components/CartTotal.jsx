import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { motion } from "framer-motion";


function CartTotal() {
   const {getCartAmount, deliveryFee, currency, theme} = useContext(ShopContext)

   console.log(getCartAmount());
   

   return (
      <motion.div
        className={`w-full ${theme === 'dark' ? "dark" : 'light'}`}
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="text-2xl">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency} {deliveryFee}.00</p>
          </div>
          <hr />
          <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</b>
          </div>
        </div>
      </motion.div>
    );
    
}

export default CartTotal