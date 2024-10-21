import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { ShopContext } from '../context/ShopContext'

function About() {
  const {theme} = useContext(ShopContext)
  return (
    <div className={`${theme==='dark' ? "text-gray-100" : ""}`}>
      <div className="text-2xl border-t pt-8 text-center">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img src={assets.about_img} className='w-full md:max-w-[480px]' alt="" />
        <div className={`flex flex-col gap-6 md:w-2/4 justify-center ${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cum ab ullam officiis? Vitae laboriosam earum aspernatur ullam esse eius assumenda delectus non placeat debitis, exercitationem dignissimos aut beatae nesciunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus dolorem odit voluptate consectetur molestiae ut vitae, ad, itaque enim impedit minima repellat nisi dolores. Minima blanditiis quia laudantium voluptatum! </p>
          <b className={`${theme==='dark' ? "text-gray-200" : "text-gray-800"}`}>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit, quos saepe facere at possimus quas et corrupti natus eligendi deleniti provident eius! Odio nobis minima deleniti commodi fugiat nulla?</p>
        </div>
      </div>
      <div className="text-xl md:text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-lg'>Quality Assurance:</b>
          <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-lg'>Convinience:</b>
          <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-lg'>Great Customer Service:</b>
          <p className={`${theme==='dark' ? "text-gray-400" : "text-gray-600"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About