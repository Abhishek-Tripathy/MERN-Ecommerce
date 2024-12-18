import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { motion } from 'framer-motion';

function Orders() {
  const {backendUrl, token, currency, theme} = useContext(ShopContext)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state before animation
    visible: { opacity: 1, y: 0 },  // End state of animation
  };

  const [orderData,setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if(!token) {
        return null
      }

      const res = await axios.post(backendUrl + '/api/order/userorders', {}, {headers: {token}})
      console.log(res);
      
      if(res.data.success) {
        let allOrdersItem = []
        res.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
      }

    } catch (error) {
      
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className={`border-t pt-16 ${theme === 'dark' ? "text-gray-100" : ""}`}>
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          orderData.map((item, index) => (
            <motion.div
              className={`py-4 border-t border-b ${theme === 'dark' ? "text-gray-300" : "text-gray-700"} flex flex-col md:flex-row md:items-center md:justify-between gap-4`}
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect based on index
            >
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className='w-16 sm:w-20 ' />
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className={`flex items-center gap-3 mt-1 text-base ${theme === 'dark' ? "text-gray-300" : "text-gray-700"}`}>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className={`${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment Method: <span className={`${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className="flex gap-2 items-center">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className={`border px-4 py-2 text-sm font-medium rounded-sm ${theme === 'dark' ? "hover:bg-gray-200 hover:text-gray-800" : "hover:bg-gray-800 hover:text-gray-100"}`}>Track Order</button>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
}

export default Orders