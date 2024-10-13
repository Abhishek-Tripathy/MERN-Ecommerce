import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongodb.mjs'
import connectCloudinary from './config/cloudinary.mjs'
import userRouter from './routes/userRoute.mjs'
import productRouter from './routes/productRoute.mjs'
import cartRouter from './routes/cartRoutes.mjs'
import orderRouter from './routes/orderRoute.mjs'


dotenv.config()
//App config

const app = express()
const port = process.env.PORT 
connectDB()
connectCloudinary()

//Middlewares

app.use(express.json())
app.use(cors())

//Api end points
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
   res.send("Api working")
}) 

app.listen(port, () => console.log("LIstening at port : ", port))