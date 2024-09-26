import { createContext, useState } from "react"
import { products } from "../assets/assets"


export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
   const currrency = '$'
   const deliveryFee = 10
   const [search, setSearch] = useState("")
   const [showSearch, setShowSearch] = useState(false)
   const value = {
      products,
      currrency,
      deliveryFee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
   }

   return (
      <ShopContext.Provider value={value}>
         {children}
      </ShopContext.Provider>
   )
}

export default ShopContextProvider