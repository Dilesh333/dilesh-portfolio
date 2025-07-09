import React from "react";
import SkillCard from "../Components/SkillCard";
import ToolsCard from "../Components/ToolsCard";

// === Tech Stack Logos ===
import htmlLogo from "../assets/Logos/html-5.svg";
import cssLogo from "../assets/Logos/css3.svg";
import jsLogo from "../assets/Logos/javascript.svg";
import reactLogo from "../assets/Logos/react-js-icon1.png";
import nodeLogo from "../assets/Logos/node-js.svg";
import expressLogo from "../assets/Logos/express-js.svg";
import mongoLogo from "../assets/Logos/mongodb.svg";

// === Tools Logos ===
import gitLogo from "../assets/Logos/git.svg";
import githubLogo from "../assets/Logos/github.svg";
import vsLogo from "../assets/Logos/vs-code.svg";
import postmanLogo from "../assets/Logos/postman.png";
import compassLogo from "../assets/Logos/compass.svg";
import vercelLogo from "../assets/Logos/vercel.svg";
import netlifyLogo from "../assets/Logos/netlify.svg";

function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "ReactJs", logo: reactLogo },
    { name: "NodeJs", logo: nodeLogo },
    { name: "ExpressJs", logo: expressLogo },
    { name: "MongoDB", logo: mongoLogo },
  ];

  const tools = [
    { name: "GIT", logo: gitLogo },
    { name: "GITHUB", logo: githubLogo },
    { name: "VSCode", logo: vsLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "Compass", logo: compassLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Netlify", logo: netlifyLogo },
  ];

  return (
    <div className="bg-[#0F172A] text-white py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* === Skills Section === */}
        <div className="flex flex-col items-center">
          <h1 className="font-poppins text-3xl font-bold mb-10">Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} logo={skill.logo} />
            ))}
          </div>
        </div>

        {/* === Tools Section === */}
        <div className="flex flex-col items-center mt-16">
          <h1 className="font-poppins text-3xl font-bold mb-10">Tools</h1>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 justify-items-center">
            {tools.map((tool, index) => (
              <ToolsCard key={index} name={tool.name} logo={tool.logo} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
