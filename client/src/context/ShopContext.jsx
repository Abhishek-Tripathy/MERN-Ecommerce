import { createContext } from "react"
import { products } from "../assets/assets"


export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
   const currrency = '$'
   const deliveryFee = 10
   const value = {
      products,
      currrency,
      deliveryFee
   }

   return (
      <ShopContext.Provider value={value}>
         {children}
      </ShopContext.Provider>
   )
}

export default ShopContextProvider