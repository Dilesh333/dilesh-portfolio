import React from "react";

function ProjectCard({ title, image, desc, tech, live, code }) {
  return (
    <div className="relative group bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Hover Overlay with Buttons */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={live}
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm font-medium text-white"
        >
          Live Preview
        </a>
        <a
          href={code}
          target="_blank"
          className="bg-slate-700 hover:bg-slate-800 px-4 py-2 rounded text-sm font-medium text-white"
        >
          Source Code
        </a>
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-slate-400 text-sm mt-1">{desc}</p>
        <p className="mt-2 text-sm text-teal-400">{tech}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
