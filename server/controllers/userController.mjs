import userModel from "../models/userModel.mjs"
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
   return jwt.sign({id}, process.env.JWT_SECRET)
}


//Route for user Login
const loginUser = async (req, res) => {
   try {
      const {email, password} = req.body

      const user = await userModel.findOne({email})

      if(!user) {
         return res.json({success: false, message: "User doesnot exists"})
      }

      const isMatched = await bcrypt.compare(password, user.password)

      if(isMatched) {
         const token = createToken(user._id)
         res.json({success: true, token, message: "Login Successfull"})
      }else{
         res.json({success: false, message: "Invalid Credentials"})
      }

   } catch (error) {
      console.log("error at userLogin ==> ", error);
      res.json({success:false, message: error.message})      
   }
}

//Route for user registration
const registerUser =  async (req, res) => {
   try {
      const { name, email, password} = req.body

      //Checking if user already exists
      const exists = await userModel.findOne({email})
      if(exists) {
         return res.json({success: false, message: "User already exists"})
      }

      //validating email format and strong password
      if(!validator.isEmail(email)) {
         return res.json({success: false, message: "Please enter a valid email"})
      }
      if(password.length < 8) {
         return res.json({success: false, message: "Please enter a strong password"})
      }

      //Hashing User Password
      const salt =  await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const nenwUser = new userModel({
         name, email, password: hashedPassword
      })

      const user = await nenwUser.save()

      //Token generation
      const token = createToken(user._id)

      res.json({success: true, token, message:user})

   } catch (error) {
      console.log("Error at userRegistration Controller" , error);
      res.json({success: false, message: error.message})
   }
}

//Route for Admin Login
const adminLogin = async (req, res) => {
   try {
      const {email, password} = req.body
      if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
         const token = jwt.sign(email+password , process.env.JWT_SECRET)
         res.json({success: true, token})
      }else{
         res.json({success: false, message: "Invalid Login"})
      }
   } catch (error) {
      console.log("Error at admin login ==> ", error)
      res.json({success: false, message: error.message})
   }
}

export {loginUser, registerUser, adminLogin} 