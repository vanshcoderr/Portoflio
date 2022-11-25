import React from 'react'

function Contact() {
  
   return ( 
    <div className='flex flex-col mx-auto '> 
      <h2 className='text-2xl font-semibold mx-auto my-10 dark:white'>CONTACT</h2>
      <div className='flex justify-center items-center'>
        <form action="" className='flex flex-col w-9/12 md:w-7/12'>
          <input type="text" name='NAME' placeholder='NAME' className='border-2 dark:border-white p-2 bg-transparent rounded-md focus:outline-none' />
          <input type="text" name='EMAIL' placeholder='EMAIL' className='my-2 border-2 p-2 bg-transparent rounded-md focus:outline-none' />
          <textarea name="Message" id="" cols="30" rows="10" placeholder='MESSAGE' className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
          <button type='button' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white cursor-pointer '>CONTACT</button>
        </form>
     </div>
      
    </div>
  )
}

export default Contact