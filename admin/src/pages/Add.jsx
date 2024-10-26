import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import {toast} from 'react-toastify'

function Add({token}) {

   const [image1, setImage1] = useState(false)
   const [image2, setImage2] = useState(false)
   const [image3, setImage3] = useState(false)
   const [image4, setImage4] = useState(false)

   const [price, setPrice] = useState("")
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [category, setCategory] = useState("Men")
   const [subCategory, setSubCategory] = useState("Topwear")
   const [bestSeller, setBestSeller] = useState(false)
   const [sizes, setSizes] = useState([])

   const onSubmitHandler = async (e) => {
      e.preventDefault()

      try {
         const formData = new FormData()

         formData.append("name", name)
         formData.append("price", price)
         formData.append("description", description)
         formData.append("category", category)
         formData.append("subCategory", subCategory)
         formData.append("bestSeller", bestSeller)
         formData.append("sizes", JSON.stringify(sizes))

         image1 && formData.append("image1", image1)
         image2 && formData.append("image2", image2)
         image3 && formData.append("image3", image3)
         image4 && formData.append("image4", image4)

         const res = await axios.post(backendUrl+"/api/product/add", formData, {headers: {token}})
         
         if(res.data.success) {
            toast.success(res.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setPrice('')
         }else{
            toast.error(res.data.message)
         }

      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='flex flex-col items-start w-full gap-3'>
         <p className='mb-2'>Upload Image</p>
         <div className='flex gap-2'>
            <label htmlFor="img1">
               <img className='w-20 cursor-pointer' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} />
               <input onChange={(e) => setImage1(e.target.files[0])} type="file" hidden id='img1' />
            </label>
            <label htmlFor="img2">
               <img className='w-20 cursor-pointer' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} />
               <input onChange={(e) => setImage2(e.target.files[0])} type="file" hidden id='img2' />
            </label>
            <label htmlFor="img3">
               <img className='w-20 cursor-pointer' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} />
               <input onChange={(e) => setImage3(e.target.files[0])} type="file" hidden id='img3' />
            </label>
            <label htmlFor="img4">
               <img className='w-20 cursor-pointer' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} />
               <input onChange={(e) => setImage4(e.target.files[0])} type="file" hidden id='img4' />
            </label>
         </div>
      </div>

      <div className='w-full'>
         <p className='mb-2'>Product Name</p>
         <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Type Here' required className='w-full max-w-[500px] px-3 py-2 ' />
      </div>
      <div className='w-full'>
         <p className='mb-2'>Product Description</p>
         <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Write Content Here' required className='w-full max-w-[500px] px-3 py-2' />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
         <div>
            <p className='mb-2'>Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
               <option value="Men">Men</option>
               <option value="Women">Women</option>
               <option value="Kids">Kids</option>
            </select>
         </div>
         
         <div>
            <p className='mb-2'>Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
               <option value="Topwear">Top Wear</option>
               <option value="Bottomwear">Bottom Wear</option>
               <option value="Winterwear">Winter Wear</option>
            </select>
         </div>

         <div>
            <p className='mb-2'>Product Price</p>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className='w-full sm:w-[120px] px-3 py-2' type="number" placeholder='24' />
         </div>
      </div>

      <div>
         <p className='mb-2'>Product Sizes</p>
         <div className='flex gap-3'>
            <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter((item) => item !== "S") : [...prev, "S"]) }>
               <p className= {`${sizes.includes("S") ? `bg-pink-200` : `bg-slate-200`} px-3 py-1 cursor-pointer`}>S</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter((item) => item !== "M") : [...prev, "M"]) }>
               <p className={`${sizes.includes("M") ? `bg-pink-200` : `bg-slate-200`} px-3 py-1 cursor-pointer`}>M</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter((item) => item !== "L") : [...prev, "L"]) }>
               <p className={`${sizes.includes("L") ? `bg-pink-200` : `bg-slate-200`} px-3 py-1 cursor-pointer`}>L</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter((item) => item !== "XL") : [...prev, "XL"]) }>
               <p className={`${sizes.includes("XL") ? `bg-pink-200` : `bg-slate-200`} px-3 py-1 cursor-pointer`}>XL</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item !== "XXL") : [...prev, "XXL"]) }>
               <p className={`${sizes.includes("XXL") ? `bg-pink-200` : `bg-slate-200`} px-3 py-1 cursor-pointer`}>XXL</p>
            </div>
         </div>
      </div>

      <div className='flex gap-2 mt-2'>
         <input onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id="bestSeller" />
         <label className='cursor-poibter' htmlFor="bestSeller">Add to Best Seller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white rounded-md'>ADD</button>
    </form>
  )
}

export default Add