import express from "express";
import { placeOrder, placeRazorpayOrder, placeStripeOrder, allOrders, userOrders, updateStatus, verifyStripe } from "../controllers/orderController.mjs";
import adminAuth from "../middleware/adminAuth.mjs";
import authUser from "../middleware/auth.mjs";


const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeStripeOrder)
orderRouter.post('/razorpay', authUser, placeRazorpayOrder)

//Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

//USER feature
orderRouter.post('/userorders', authUser, userOrders)


export default orderRouter