import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function PlaceOrder() {
  const {navigate, token, backendUrl, cartItems, theme, setCartItems, getCartAmount, deliveryFee, products} = useContext(ShopContext)
  const [method, setMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(prev => ({...prev, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      let orderItems = []

      for(const items in cartItems) {
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      }
      console.log(orderData);
      
      switch(method){
        //API call for COD
        case 'cod' : 
            const res = await axios.post(backendUrl + 'api/order/place' , orderData, {headers: {token}} )
            console.log(res);
            
            if(res.data.success) {
              setCartItems({})
              navigate('/orders')
            }else{
              toast.error(res.data.message)
            }
        break;
          
        case 'stripe' : 
            const resStripe = await axios.post(backendUrl + 'api/order/stripe', orderData, {headers: {token}})
            console.log(resStripe);
            if(resStripe.data.success) {
              const {session_url} = resStripe.data
              window.location.replace(session_url)
            }else{
              toast.error(resStripe.data.message)
            }
        break;

        default: 
        break;
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  

  return (
    <form onSubmit={onSubmitHandler} className={`${theme==='dark' ? "text-gray-100" : ""} flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t`}>
      {/* -------------LEFT SIDE----------------- */}
      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} value={formData.firstName} type="text" name='firstName' placeholder='First Name' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required onChange={onChangeHandler} value={formData.lastName} type="text" name='lastName' placeholder='Last Name' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input required onChange={onChangeHandler} value={formData.email} type="email" name='email' placeholder='Email Address' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input required onChange={onChangeHandler} value={formData.street} type="text" name='street' placeholder='Street' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} value={formData.city} type="text" name='city' placeholder='City' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required onChange={onChangeHandler} value={formData.state} type="text" name='state' placeholder='State' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} value={formData.zipcode} type="number" name='zipcode' placeholder='ZipCode' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input required onChange={onChangeHandler} value={formData.country} type="text" name='country' placeholder='Country' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input required onChange={onChangeHandler} value={formData.phone} type="number" name='phone' placeholder='Phone Number' className='border border-x-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* ----------------------RIght Side-------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ----------------Payment Method Selection ------------------------ */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? "bg-green-400" : ""}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? "bg-green-400" : ""}`}></p>
              <p className={`text-sm font-medium mx-4 ${theme==='dark' ? "text-gray-300": "text-gray-600"}`}>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type='submit' className={`bg-black text-white px-16 py-3 text-sm  ${theme==='dark' ? "bg-gray-100 text-gray-900 hover:bg-gray-300" : "bg-black text-white hover:bg-gray-700"}`}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder