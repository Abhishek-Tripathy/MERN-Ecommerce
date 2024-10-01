import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.mjs'


// Add Product
export const addProduct = async (req, res) => {
   try {
      const {name, description, category, subCategory, sizes, bestSeller, price} = req.body

      const image1 = req.files.image1 && req.files.image1[0]
      const image2 = req.files.image2 && req.files.image2[0]
      const image3 = req.files.image3 && req.files.image3[0]
      const image4 = req.files.image4 && req.files.image4[0]

      const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

      let imagesUrl = await Promise.all(
         images.map(async (item) => {
            let result = cloudinary.uploader.upload(item.path, {resource_type: 'image'})
            return (await result).secure_url
         })
      )

      const productData = {
         name,
         description,
         category, 
         price: Number(price),
         subCategory,
         bestSeller: bestSeller === 'true' ? true : false,
         sizes: JSON.parse(sizes),
         image: imagesUrl,
         date: Date.now()
      }

      console.log(productData);
      
      const product = new productModel(productData)
      await product.save()

      res.json({success: true, message: "Product Added"})

   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
}


// list Product
export const listProduct = async (req, res) => {
   try {
      const products = await productModel.find({})
      res.json({success: true, message: products})
   } catch (error) {
      console.log("Error at list Product, ==> " , error);
      res.json({success: false, message: error.message})
   }
}


// remove Product
export const removeProduct = async (req, res) => {
   try {
      await productModel.findByIdAndDelete(req.body.id)
      res.json({success: true, message: "Product Removed"})
   } catch (error) {
      console.log("Error at remove Products, ==> " , error);
      res.json({success: false, message: error.message})
   }
}


// Single Product
export const singleProduct = async (req, res) => {
   try {
      const {productId} = req.body
      const product = await productModel.findById(productId)
      res.json({success: true, message: product})
   } catch (error) {
      console.log("Error at single Product, ==> " , error);
      res.json({success: false, message: error.message})
   }
}