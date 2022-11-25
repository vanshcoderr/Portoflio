import React from 'react'
import timeline from "../data/timeline"

function TimelineItem({date, title, description, stack}) {
  return (
    <div className='Timeline'>
        <div className='TimelineItem md:w-9/12 border-l-2 border-slate-900 dark:border-white pl-5'>
          <div className="dot w-3 h-3 bg-slate-900 dark:bg-white rounded-xl relative bottom-2 shadow shadow-stone-400"></div>
        <div className="Quote mb-5">
        <span className='p-2 bg-slate-900 text-slate-200 rounded dark:bg-white dark:text-black dark:font-semibold'>{date}</span>
        </div>
        <div className="content">
          <div className="title">
          <h2 className='font-semibold text-2xl mb-5 dark:text-white'>{title}</h2>
          </div>
        <p className='font-semibold text-lg mb-5'>{description}</p>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {stack.map(item =>(
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded cursor-pointer dark:border-white dark:text-white'>{item}</span>
                ))}
            </p>
        </div>
      </div>
      <br></br>
      </div>
  )
}

export default TimelineItem