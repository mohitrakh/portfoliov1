import { AiOutlineClose } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import React from 'react'

const MobileNav = ({mobileNav, setMobileNav}) => {
   
  return (
   
      
      <div className={`fixed top-0 w-screen flex justify-center items-center text-center text-3xl h-screen bg-white mobile-navbar ${mobileNav ? "open" : "closed"}`}>
        <div onClick={() => setMobileNav(false)} className="absolute right-6 top-6 cursor-pointer ">
            <AiOutlineClose className="text-4xl" />
        </div>
        <ul className="flex flex-col gap-10">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
   
  )
}

export default MobileNav
