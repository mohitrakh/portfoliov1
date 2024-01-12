import { SlShareAlt } from "react-icons/sl"; 
import { FiGithub } from "react-icons/fi"; 
import React from 'react'

const Card = ({project}) => {
  return (
    <div className="rounded-lg shadow-lg mx-3 lg:mx-0">
<div className="flex p-6 lg:p-12 flex-col lg:flex-row lg:justify-center lg:items-center gap-6 ">
      <div className={`px-3  lg:h-[300px] lg:px-0 ${project.id % 2 !== 0 ? "lg:order-1" : "lg:order-4"}`}>
        <img className="rounded-lg h-full lg:min-w-[30rem]" src={project.img} alt="" />
      </div>
      <div className="flex flex-col lg:order-2 gap-7">
        <h1 className="text-2xl font-bold text-center text-[#2D2E32]">{project.name}</h1>
        <p className="text-center text-[#767676]">{project.desc}</p>
        <div className="flex justify-center gap-4">
            {project.tech.map((tech, i) => {
                return  <p key={i} className="px-2 py-1 bg-white font-bold shadow-md">{tech}</p>
            })}
           
            
        </div>
        <div className="flex gap-9 justify-center items-center">
            {project.github ?(

                <a target="_blank" href={project.github} className="text-xl hover:text-[#4D9CFB] flex items-center gap-3">Code <FiGithub /></a>
            ): ""}
            <a target="_blank" href={project.demo} className="text-xl hover:text-[#4D9CFB] flex gap-3">Live Demo <SlShareAlt /></a>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Card
