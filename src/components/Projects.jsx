import React from 'react'
import Card from './Card'
import { projectData } from '../projectData'

const Projects = () => {
  return (
     <div id='projects' className="bg-[#F9F9F9] min-h-screen flex justify-center items-center">
        <div className='lg:max-w-[950px] lg:flex-col max-w-[550px] mx-auto flex flex-col gap-8 lg:py-20'>
                <div className='px-5 lg:px-0'>
                    <h1 className='font-bold text-center lg:text-left text-[#358FFA]'>PORTFOLIO</h1>
                    <h4 className='font-bold text-center lg:text-left text-[#2D2E32] text-2xl'>Each project is a unique piece of development 🧩.</h4>
                </div>
                <div className='flex-col flex gap-9'>
                    {projectData.map((project, index) => {
                        return <Card project={project} />
                    })}
                    
                </div>
        </div>
      
    </div>
  )
}

export default Projects
