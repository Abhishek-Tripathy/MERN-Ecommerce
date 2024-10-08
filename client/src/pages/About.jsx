import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className="text-2xl border-t pt-8 text-center">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img src={assets.about_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col gap-6 md:w-2/4 justify-center text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cum ab ullam officiis? Vitae laboriosam earum aspernatur ullam esse eius assumenda delectus non placeat debitis, exercitationem dignissimos aut beatae nesciunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus dolorem odit voluptate consectetur molestiae ut vitae, ad, itaque enim impedit minima repellat nisi dolores. Minima blanditiis quia laudantium voluptatum! </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit, quos saepe facere at possimus quas et corrupti natus eligendi deleniti provident eius! Odio nobis minima deleniti commodi fugiat nulla?</p>
        </div>
      </div>
      <div className="text-xl md:text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti sed incidunt ducimus. Exercitationem quaerat </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About