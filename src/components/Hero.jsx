
import { FiGithub, FiLinkedin } from "react-icons/fi"; 
import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="bg-[#F9F9F9]">
        <div className="lg:max-w-[950px] max-w-[550px] flex flex-col lg:flex lg:items-start lg:justify-center mx-auto py-28 min-h-[calc(100vh-100px)] lg:gap-24 gap-9 px-8 ">
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center ">
                <div className="flex order-2 lg:order-1 flex-col lg:gap-9 gap-8">
                    <h1 className="lg:text-6xl text-3xl text-[#2D2E32] font-bold lg:text-left text-center">MERN-Stack Developer👋🏻</h1>
                    <p className="text-[#6D6D6D] text-center lg:text-left text-[16px] lg:text-xl">Hi, I'm Mohit Rakh. A passionate MERN Stack Developer based in Surat, Gujarat. 📍</p>
                    <div className="text-3xl flex items-center justify-center lg:justify-start gap-4 text-[#2D2E32]">
                    <a href="https://github.com/mohitrakh" target='_blank'>  <FiGithub className="hover:text-[#4D9CFB] cursor-pointer"/></a>
                    <a href="https://www.linkedin.com/in/mohit-rakh/" target='_blank'><FiLinkedin className="hover:text-[#4D9CFB] cursor-pointer" /></a>

                    </div>
                </div>
                {/* <div className="flex max-w-[24rem] lg:w-[30rem] order-1 lg:order-1">
                    <img className="w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn9kpOWXphUzezvpoB8sWIEK4Fx_mOEZMsw&usqp=CAU" alt="" />
                </div> */}
                 <div className="blob order-1 lg:order-1 flex max-w-[24rem] lg:w-[30rem]"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center gap-6">
                  <h1 className="text-[20px] underline font-bold lg:no-underline">Tech Stack </h1>
                  <div className="hidden lg:flex w-[0.16rem] rounded-lg h-8 bg-[#939395]"></div>
                  <div className="flex gap-4 flex-wrap justify-center">
                  <img className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] cursor-pointer" src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" />
                <img className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] cursor-pointer" src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" />
                <img className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] cursor-pointer" src="https://skillicons.dev/icons?i=nodejs,expressjs" alt="skill-icon" />
                <img className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] cursor-pointer" src="https://skillicons.dev/icons?i=mongodb,react" alt="skill-icon" />
                <img className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-[-5px] cursor-pointer" src="https://skillicons.dev/icons?i=tailwind,css" alt="skill-icon" />
                  </div>
                </div>
        </div>
    </div>
  );
};

export default Hero;
