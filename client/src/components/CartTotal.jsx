import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
   const {getCartAmount, deliveryFee, currency} = useContext(ShopContext)

   console.log(getCartAmount());
   

  return (
    <div className='w-full'>
      <div className="text-2xl">
         <Title text1={ "CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2mt-2 text-sm">
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
    </div>
  )
}

export default CartTotal