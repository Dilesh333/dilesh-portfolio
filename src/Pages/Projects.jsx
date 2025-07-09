import React from "react";
import ProjectCard from "../Components/ProjectCard,";
import project1 from "../assets/projects/dcs.png"



function Projects() {
  const projectData = [
    {
      title: "Ed-Tech App",
      image: project1,
      desc: "A powerful e-learning platform with integrated cart, secure payments, and a user-friendly dashboard.",
      tech: "Wix Studio",
      live: "https://www.dcslearning.in/",
      code: "https://www.dcslearning.in/",
    },
  ];

  return (
    <div id="projects" className="bg-[#0F172A] text-white py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
