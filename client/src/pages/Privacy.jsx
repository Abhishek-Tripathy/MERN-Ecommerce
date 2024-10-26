import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const {theme} = useContext(ShopContext)

  const sectionVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
 };

  return (
   <div className={`${theme === 'dark' ? "text-gray-100" : ""}`}>
     <div className="text-2xl border-t pt-8 text-center">
       <h1 className="font-bold text-3xl">Privacy Policy</h1>
     </div>

     <div className="my-10 flex flex-col gap-16">
       <motion.div
         className={`flex flex-col gap-6 md:w-2/4 mx-auto ${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5 }}
       >
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Our privacy policy explains how we collect, use, and protect your personal information.</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Your trust is important to us, and we are committed to safeguarding your privacy with transparency.</p>
         <b className={`${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Our Commitment to Privacy</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit, quos saepe facere at possimus quas et corrupti natus eligendi deleniti provident eius! Odio nobis minima deleniti commodi fugiat nulla?</p>
       </motion.div>
     </div>

     <motion.div
       className="text-xl md:text-2xl py-4 text-center"
       variants={sectionVariants}
       initial="hidden"
       animate="visible"
       transition={{ duration: 0.5 }}
     >
       <h2 className="font-semibold">Information We Collect</h2>
     </motion.div>

     <div className="flex flex-col md:flex-row text-sm mb-20">
       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
       >
         <b className="text-lg">Personal Information</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>We collect personal information, such as your name, email address, and payment details, to provide and enhance our services.</p>
       </motion.div>

       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
       >
         <b className="text-lg">Usage Data</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>Information about your interactions with our services, like usage statistics and device information, is also collected to improve your experience.</p>
       </motion.div>
     </div>

     <motion.div
       className="text-xl md:text-2xl py-4 text-center"
       variants={sectionVariants}
       initial="hidden"
       animate="visible"
       transition={{ duration: 0.5 }}
     >
       <h2 className="font-semibold">How We Use Your Information</h2>
     </motion.div>

     <div className="flex flex-col md:flex-row text-sm mb-20">
       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
       >
         <b className="text-lg">Providing Services</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>Your information is essential to operate our services effectively and provide a seamless experience.</p>
       </motion.div>

       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
       >
         <b className="text-lg">Improving Services</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>We analyze usage data to understand customer preferences and improve our features and offerings.</p>
       </motion.div>
     </div>

     <motion.div
       className="text-xl md:text-2xl py-4 text-center"
       variants={sectionVariants}
       initial="hidden"
       animate="visible"
       transition={{ duration: 0.5 }}
     >
       <h2 className="font-semibold">Your Rights and Choices</h2>
     </motion.div>

     <div className="flex flex-col md:flex-row text-sm mb-20">
       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.1 }} // Delay for staggered effect
       >
         <b className="text-lg">Access and Correction</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>You have the right to access and correct your personal information to ensure its accuracy.</p>
       </motion.div>

       <motion.div
         className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
       >
         <b className="text-lg">Opt-Out</b>
         <p className={`${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>You can choose to opt-out of receiving marketing communications from us at any time.</p>
       </motion.div>
     </div>
   </div>
 );   
};

export default PrivacyPolicy;
