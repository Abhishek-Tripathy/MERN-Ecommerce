import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"


export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
   const currency = '$'
   const deliveryFee = 10
   const backendUrl = import.meta.env.VITE_BACKEND_URL
   const [search, setSearch] = useState("")
   const [showSearch, setShowSearch] = useState(false)
   const [cartItems, setCartItems] = useState({})
   const [products, setProducts] = useState([])
   const [token, setToken] = useState("")
   const [theme, setTheme] = useState('light')
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
      

      if(token) {
         try {
            await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers: {token}})
            toast.success("Product Added to Cart")
            setCartItems(cartData)
         } catch (error) {
            console.log(error);
            toast.error(error.message)
         }
      }else{
         toast.error("Pease Login")
      }
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

      if(token) {
         try {
            await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers: {token}})
         } catch (error) {
            console.log(error);
            toast.error(error.message)
         }
      }
   }
    

   const getProductsData = async () => {
      try {
         const res = await axios.get(backendUrl + '/api/product/list')
         
         if(res.data.success) {
            setProducts(res.data.message)   
         }else{
            toast.error("Could not fetch the products")
         }
         
      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }


   const getCartAmount = () => {
      let totalAmount = 0;
    
      for (const itemId in cartItems) {
        let itemInfo = products?.find((product) => product._id === itemId);
    
        if (itemInfo) {
          try {
            const itemQuantities = cartItems[itemId]; // This is the object with sizes (e.g., { L: 1, M: 2 })
    
            for (const size in itemQuantities) {
              const itemQuantity = itemQuantities[size]; // Quantity for a specific size
    
              if (itemQuantity > 0) {
                totalAmount += itemInfo.price * itemQuantity;
              }
            }
          } catch (error) {
            console.error("Error at getCartAmount", error);
          }
        }
      }
    
      return totalAmount;
    };
    

   const getUserCart = async (token) => {
      // console.log(products);
      
      try {
         const res = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
         
         if(res.data.success) {
            setCartItems(res.data.cartData)
         }
      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }

   const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };

   useEffect(() => {
      getProductsData();
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
   }, [])

   useEffect(() => {
      if(!token && localStorage.getItem('token')){
         setToken(localStorage.getItem('token'))
         getUserCart(localStorage.getItem('token'))
      }
   }, [])

   const value = {
      products, currency, deliveryFee, search, setSearch, showSearch, setShowSearch, cartItems, setCartItems,
      addToCart, getCartCount, updateCartQuantity, getCartAmount, navigate, backendUrl, token, setToken,
      toggleTheme, theme
   }

   return (
      <ShopContext.Provider value={value}>
         {children}
      </ShopContext.Provider>
   )
}

export default ShopContextProvider