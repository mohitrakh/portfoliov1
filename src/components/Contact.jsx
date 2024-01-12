import { BiEnvelope } from "react-icons/bi"; 
import { GoLocation } from "react-icons/go"; 
import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='bg-white '>
      <div className='lg:max-w-[950px] mt-24 lg:flex-col flex-col flex gap-4 max-w-[550px] mx-auto py-7 px-4'>
        <h1 className="text-[#147EFB] lg:text-left text-center font-bold">CONTACT</h1>
        <h2 className="font-bold lg:text-left text-center text-3xl">Don't be shy! Hit me Up!👇</h2>
        <div className="flex flex-col lg:flex-row lg:gap-28">
        <div className="flex flex-col lg:flex-row  lg:justify-start lg:items-center lg:gap-4 justify-center items-center gap-3 mt-8">
            <GoLocation className="text-[#147EFB] text-3xl font-bold" />
            <div>
            <p className="font-bold text-2xl">Location</p>
            <p className="text-[#767676]">Surat, Gujarat</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-8 lg:flex-row  lg:justify-start lg:items-center lg:gap-4">
            <BiEnvelope className="text-[#147EFB] text-3xl font-bold" />
           <div>
           <p className="font-bold text-center lg:text-left text-xl">Mail</p>
            <a target="_blank" className="text-[#767676] text-center lg:text-left" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mohitrakh01@gmail.com">mohitrakh01@gmail.com</a>
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
