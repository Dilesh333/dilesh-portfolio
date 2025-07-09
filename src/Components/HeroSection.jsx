import React from "react";
import { Typewriter } from "react-simple-typewriter";
import heroAnimation from "../assets/hero-1.json";
import heroBg from "../assets/hero-bg.jpg";
import Lottie from "lottie-react";
import { MdFileDownload } from "react-icons/md";

function HeroSection() {
  return (
    // 🔷 Hero Background
    <div
      id="top"
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="relative z-10 font-poppins max-w-6xl mx-auto pt-15 px-4">
        
        {/* 🔷 Responsive Flex Layout: col-reverse on mobile, row on md+ */}
        <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[640px] gap-8 my-10">
          
          {/* 🔶 LEFT PART: Text */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">Hi There,</h2>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">I'm Dileswar Sahu</h1>
            <h2 className="text-2xl md:text-3xl font-bold mt-5">
              I am a{" "}
              <span className="text-orange-400">
                <Typewriter
                  words={[
                    "Fullstack Developer",
                    "Front-End Developer",
                    "Back-End Developer",
                    "Coder",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="mt-6 mb-6 text-base md:text-lg">
              Passionate fullstack developer focused on building user-friendly, scalable web applications with clean and efficient code.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="flex items-center gap-2 bg-[#142EB3] hover:bg-[#FB523C] transform hover:scale-105 transition duration-300 shadow-md w-fit px-5 py-3 rounded-md text-base md:text-lg text-white mt-5">
                Download CV <MdFileDownload size={25} />
              </button>
            </div>
          </div>

          {/* 🔶 RIGHT PART: Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie
              animationData={heroAnimation}
              loop={true}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
