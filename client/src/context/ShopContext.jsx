import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"


export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
   const currency = '$'
   const deliveryFee = 10
   const [search, setSearch] = useState("")
   const [showSearch, setShowSearch] = useState(false)
   const [cartItems, setCartItems] = useState({})
   const navigate = useNavigate()

   const addToCart = async (itemId, size) => {
      if(!size) {
         toast.error("Select Size")
         return
      }
      let cartData = structuredClone(cartItems)

      if(cartData[itemId]) {
         if(cartData[itemId][size]){
            cartData[itemId][size] += 1
         }else{
            cartData[itemId][size] = 1
         }
      }else{
         cartData[itemId] = {}
         cartData[itemId][size] = 1
      }
      setCartItems(cartData)
   }

   const getCartCount = () => {
      let count = 0
      for(const items in cartItems){
         for(const item in cartItems[items]){
            try {
               if(cartItems[items][item] > 0) {
                  count += cartItems[items][item]
               }
            } catch (error) {
               console.error("Error at getCartCount ",error)
            }
         }
      }
      return count;
   }

   const updateCartQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems)
      
      cartData[itemId][size] = quantity

      setCartItems(cartData)
   }

   const getCartAmount = () => {
      let totalAmount = 0
      
      for(const items in cartItems) {
         let itemInfo = products.find((product) => product._id === items)
         
         for(const item in cartItems[items]){
            try {
               if(cartItems[items][item] > 0){
                  totalAmount += itemInfo.price * cartItems[items][item]
               }
            } catch (error) {
               console.error("Error at getCartAmount ",error)
            }
         }
      }
      return totalAmount;
   }
   const value = {
      products,
      currency,
      deliveryFee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateCartQuantity,
      getCartAmount,
      navigate,
   }

   return (
      <ShopContext.Provider value={value}>
         {children}
      </ShopContext.Provider>
   )
}

export default ShopContextProvider