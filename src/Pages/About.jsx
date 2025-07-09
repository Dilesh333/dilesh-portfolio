import React from "react";
import myImage from "../assets/dilesh.jpg";

function About() {
  return (
    <div id="about" className="bg-[#0F172A] text-white scroll-mt-24 py-20">
      <div className="font-poppins max-w-6xl mx-auto py-10 px-4">

        {/* 🔷 Heading */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold mt-5">About Me</h1>
        </div>

        {/* 🔷 Main content: flex-col on mobile, flex-row on desktop */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">

          {/* 🔶 Image section */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0">
            <img
              src={myImage}
              alt="Dilesh"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* 🔶 Text section */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">I'm Dilesh</h1>
            <h4 className="text-xl font-semibold mt-1">Full Stack Developer</h4>
            <p className="mt-3 max-w-2xl text-justify">
              I am a Full-Stack developer based in Odisha, India. I am pursuing MCA
              from REC, Bhubaneswar. I’m passionate about enhancing my coding skills
              and building responsive, high-quality web applications. I develop
              full-stack projects using the MERN stack and continuously challenge
              myself through self-driven development and clone projects.
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:dilesh.dev333@gmail.com"
                className="text-blue-400 underline"
              >
                dilesh.dev333@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
