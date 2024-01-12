import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#2D2E32] py-16 lg:justify-start items-center justify-center">
      <div className="lg:max-w-[950px] max-w-[550px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-9">
        <h1 className="text-white font-bold text-xl lg:text-left text-center">
          Copyright © 2024. All rights are reserved
        </h1>
        <div className="text-3xl text-white flex items-center lg:justify-start justify-center gap-4 ">
          <a href="https://github.com/mohitrakh" target="_blank">
            {" "}
            <FiGithub className="hover:text-[#4D9CFB] cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/mohit-rakh/" target="_blank">
            <FiLinkedin className="hover:text-[#4D9CFB] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
