import mongoose from "mongoose";
import dotenv from 'dotenv'


const connectDB = async () => {
   mongoose.connection.on('connected', () => {
      console.log("DB Connection Successful");
   })

   await mongoose.connect(`${process.env.MONGODB_URI}/MERN-Ecommerce`)
}

export default connectDB