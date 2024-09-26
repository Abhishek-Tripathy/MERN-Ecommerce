import React from 'react'

function NewsletterBox() {

   function onSubmitHandler (e) {
      e.preventDefault()
   }

  return (
    <div className='text-center'>
      <p className='text-2xl text-gray-800 font-medium'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border'>
         <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your Email' required />
         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox