import React, { useContext } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { ShopContext } from '../context/ShopContext'
import { motion } from 'framer-motion';

function About() {
  const {theme} = useContext(ShopContext)
  return (
    <motion.div
       className={`${theme === 'dark' ? "text-gray-100" : ""}`}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.9 }}
    >
       <motion.div
          className="text-2xl border-t pt-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
       >
          <Title text1={"ABOUT"} text2={"US"} />
       </motion.div>

       <motion.div
          className="my-10 flex flex-col gap-16 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
       >
          <motion.img
             src={assets.about_img}
             className="w-full md:max-w-[480px]"
             alt=""
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div
             className={`flex flex-col gap-6 md:w-2/4 justify-center ${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}
             initial={{ x: 50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.5 }}
          >
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
             <b className={`${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </motion.div>
       </motion.div>

       <motion.div
          className="text-xl md:text-2xl py-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
       >
          <Title text1={"WHY"} text2={"CHOOSE US"} />
       </motion.div>

       <motion.div
          className="flex flex-col md:flex-row text-sm mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
       >
          {["Quality Assurance", "Convenience", "Great Customer Service"].map((title, index) => (
             <motion.div
                className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
             >
                <b className="text-lg">{title}:</b>
                <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
             </motion.div>
          ))}
       </motion.div>

       <NewsletterBox />
    </motion.div>
 );
}

export default About