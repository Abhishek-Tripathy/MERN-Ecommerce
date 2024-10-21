import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { ShopContext } from '../context/ShopContext'

function Contact() {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img src={assets.contact_img} className='w-full max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className={`font-semibold text-xl ${theme==='dark' ? "text-gray-400":"text-gray-600"}`}>Our Store</p>
          <p className={`${theme==='dark' ? "text-gray-400":"text-gray-600"}`}>768216 Brajrajnagar <br /> Jharsuguda, Odisha, India</p>
          <p className={`${theme==='dark' ? "text-gray-400":"text-gray-600"}`}>Tex: +91 7972352412 <br /> Email: admin@helloworld.com</p>
          <p className={`font-semibold text-xl ${theme==='dark' ? "text-gray-400":"text-gray-600"}`}>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className={`${theme==='dark'? "bg-gray-700 border-gray-200 hover:bg-gray-100 hover:text-black" : "border-black hover:bg-black hover:text-white"} border px-8 py-4 text-sm  transition-all duration-500`}
            >Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact