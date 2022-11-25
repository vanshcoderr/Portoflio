import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
      <h2 className='font-semibold text-2xl mt-20 mb-20'>TIMELINE</h2>
          {timeline.map(project =>(
            <TimelineItem
            date={project.date}
            title={project.title}
            description={project.description}
            stack={project.stack}
            />
        ))}
      </div>
    </div>
 )
}

export default Timeline