import React from 'react'
import Portfolio from '../data/portfolio'

function PortfolioItem({title, imgUrl, stack, link}) {
  return (
    <div className='border-2 rounded border-stone-900 dark:border-white'>
        <img 
        src={imgUrl}
        alt=""
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
         />
         <div className="w-full p-4">
            <h3 className='font-semibold pb-2 dark:text-white'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {stack.map(item =>(
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white dark:text-white rounded'>{item}</span>
                ))}
            </p>
         </div>
    </div>
  )
}

export default PortfolioItem