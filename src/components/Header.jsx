import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'


const Header = ({setMobileNav}) => {
  return (
    <nav className='flex justify-between px-8 py-6 items-center shadow-lg fixed w-full bg-white'>
      <a href='#' className='font-bold text-[#2D2E32] text-xl'>Mohit.dev</a>
      <ul className=' gap-5 text-[#36373A] font-semibold hidden  text-[1.1rem] lg:flex'>
        <li><a className='hover:text-[#147EFB]' href="#">Home</a></li>
        <li><a className='hover:text-[#147EFB]' href="#about">About</a></li>
        <li><a className='hover:text-[#147EFB]' href="#projects">Project</a></li>
        <li><a className='hover:text-[#147EFB]' href="#contact">Contact</a></li>
      </ul>
      <div className='cursor-pointer lg:hidden' onClick={() => setMobileNav(true)}>
        <GiHamburgerMenu className="text-3xl" />
      </div>

    </nav>
  )
}

export default Header
