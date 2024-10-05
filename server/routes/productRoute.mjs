import express from "express"
import { listProduct, addProduct, removeProduct, singleProduct } from "../controllers/productController.mjs"
import upload from "../middleware/multer.mjs"
import adminAuth from "../middleware/adminAuth.mjs"


const productRouter = express.Router()

productRouter.post('/add', adminAuth, upload.fields([
   {name: 'image1', maxCount: 1},
   {name: 'image2', maxCount: 1},
   {name: 'image3', maxCount: 1},
   {name: 'image4', maxCount: 1},
]), addProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.get('/single', singleProduct)
productRouter.get('/list', listProduct)

export default productRouter