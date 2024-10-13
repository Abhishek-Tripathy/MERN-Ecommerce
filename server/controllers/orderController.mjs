import orderModel from "../models/orderModel.mjs"
import userModel from "../models/userModel.mjs"
import Stripe from 'stripe'


const deliveryCharge = 10
const currency = 'usd'

//Payment Gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//order with COD Method
const placeOrder = async (req, res) => {
   try {
      const {userId, items, amount, address} = req.body

      const orderData = {
         userId,
         items,
         amount,
         address,
         paymentMethod: "COD",
         payment: false,
         date: Date.now()
      }

      const newOrder = new orderModel(orderData)
      await newOrder.save()

      await userModel.findByIdAndUpdate(userId, {cartData: {}})

      res.json({success: true, message: "Order Placed"})

   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
}

//order with Stripe Method
const placeStripeOrder = async (req, res) => {
   try {
      const {userId, items, amount, address} = req.body
      const {origin} = req.headers
      console.log("items === " ,req.body);
      
      const orderData = {
         userId,
         items,
         amount,
         address,
         paymentMethod: "Stripe",
         payment: false,
         date: Date.now()
      }

      const newOrder = new orderModel(orderData)
      await newOrder.save()

      const line_items = items.map((item) => ({
         price_data: {
            currency: currency,
            product_data: {
               name: item.name
            },
            unit_amount: item.price * 100
         },
         quantity: item.quantity
      }))
      line_items.push({
         price_data: {
            currency: currency,
            product_data: {
               name: 'Delivery Charges'
            },
            unit_amount: deliveryCharge * 80
         },
         quantity: 1
      })

      const session = await stripe.checkout.sessions.create({
         success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
         cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
         line_items,
         mode: 'payment'
      })
      console.log(line_items);
      
      res.json({success: true, session_url: session.url})

   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
}

//Verify Stripe Payment
const verifyStripe = async (req, res) => {
   try {
      const {userId, orderId, success} = req.body
      if(success === "true") {
         await orderModel.findByIdAndUpdate(orderId, {payment: true})
         await userModel.findByIdAndUpdate(userId, {cartData: {}})
         res.json({success: true, message: "Payment done successfully"})
      }else{
         await orderModel.findByIdAndDelete(orderId)
         res.json({success: false, message: "Payment failed"})
      }
   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
}


//order with Razorpay Method
const placeRazorpayOrder = async (req, res) => {

}


// ALL orders data for Admin panel
const allOrders = async (req, res) => {
   try {
      const orders = await orderModel.find({})
      res.json({success: true, orders})
   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
} 

// USER orders data for client side
const userOrders = async (req, res) => {
   try {
      const {userId} = req.body

      const orders = await orderModel.find({userId})

      res.json({success: true, orders})

   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
} 

// Update order status from admin panel
const updateStatus = async (req, res) => {
   try {
      const {orderId, status} = req.body

      await orderModel.findByIdAndUpdate(orderId, {status})

      res.json({success: true, message: "Status Updated"})
   } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
   }
}


export {placeOrder, placeRazorpayOrder, placeStripeOrder, allOrders, userOrders, updateStatus, verifyStripe}
