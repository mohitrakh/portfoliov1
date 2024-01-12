import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-white min-h-screen">
      <div className="lg:max-w-[950px] lg:flex-row max-w-[550px] mx-auto flex flex-col lg:items-center gap-16 py-24">
        <div className="rounded-lg lg:h-[400px] object-cover flex justify-center">
          <img className="rounded-3xl max-w-[20rem] lg:max-w-[26rem] h-full" src="images/about.webp" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center lg:text-left font-bold text-[#147EFB]">ABOUT ME</h1>
          <h3 className="text-center lg:text-left text-2xl font-bold text-[#2D2E32]">A dedicated Web Developer based in Surat, Gujarat 📍</h3>
          <p className="text-center lg:text-left text-[18px] text-[#919191] lg:px-0 px-2">
          As a junior MERN stack developer, I bring a solid foundation in web development with expertise in MongoDB, Express.js, React.js, and Node.js. A recent graduate, I am proficient in JavaScript and possess a fundamental understanding of both front-end and back-end technologies. Eager to learn and adapt, I am equipped with coding skills, problem-solving abilities, and a collaborative mindset. I am enthusiastic about contributing to web application development and actively seeking opportunities for continuous growth within a dynamic team environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
