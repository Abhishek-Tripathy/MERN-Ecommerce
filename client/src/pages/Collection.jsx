import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { motion } from 'framer-motion';

export default function Collection() {
  const { products, search, showSearch, theme } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("")

  function toggleCategory (e) {
    if(category.includes(e.target.value)){
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    }else{
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  function toggleSubCategory (e) {
    if(subCategory.includes(e.target.value)){
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    }else{
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  function applyFilter () {
    let productsCopy = products.slice()

    if(showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }
    
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  function sortProduct () {
    let productsCopy = filterProducts.slice()

    switch(sortType) {
      case "low-high" : setFilterProducts(productsCopy.sort((a,b) => (a.price - b.price)))
      break;
      case "high-low" : setFilterProducts(productsCopy.sort((a,b) => (b.price - a.price)))
      break;
      default: applyFilter()
      break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])
  
  return (
    <motion.div
        className={`flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ${theme === 'dark' ? "text-gray-100" : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
    >
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center gap-2"
        >
          <span className={`border px-2 py-1 rounded-md cursor-pointer ${theme === 'dark' ? "bg-gray-600" : ""}`}>FILTERS</span>
          <motion.img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
            animate={{ rotate: showFilter ? 90 : 0 }} // Animate rotation
            transition={{ duration: 0.5 }}
          />
        </p>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: showFilter ? 1 : 0, height: showFilter ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`border border-gray-300 pl-5 py-3 mt-6`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className={`w-3`} onChange={toggleCategory} value={`Men`} />
              Men
            </p>
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className="w-3" onChange={toggleCategory} value={`Women`} />
              Women
            </p>
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className="w-3" onChange={toggleCategory} value={`Kids`} />
              Kids
            </p>
          </div>
        </motion.div>
        {/* Sub Category */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: showFilter ? 1 : 0, height: showFilter ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`border border-gray-300 pl-5 py-3 my-5`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className="w-3" onChange={toggleSubCategory} value={`Topwear`} />
              Topwear
            </p>
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className="w-3" onChange={toggleSubCategory} value={`Bottomwear`} />
              Bottomwear
            </p>
            <p className={`flex gap-2 ${theme === 'dark' ? "text-gray-300" : ""}`}>
              <input type="checkbox" className="w-3" onChange={toggleSubCategory} value={`Winterwear`} />
              Winterwear
            </p>
          </div>
        </motion.div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* PRODUCT SORT */}
          <motion.select
            className={`border ${theme === 'dark' ? "border-gray-600 bg-gray-600" : "border-gray-400 "} text-sm px-2`}
            onChange={(e) => setSortType(e.target.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <option value="relavent">Sort by: relavent</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </motion.select>
        </div>
        {/* MAP PRODUCTS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              transition: { staggerChildren: 0.5 },
            },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.5 },
            },
          }}
        >
          {filterProducts.map((item, index) => (
            <motion.div key={index} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: index * 0.1 }}
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
    </motion.div>
);
}
