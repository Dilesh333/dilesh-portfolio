import React from 'react';

function SkillCard({ name, logo }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-6 w-32 h-28 shadow-md rounded-md hover:scale-105 transition-transform duration-300">
      <img src={logo} alt={name} className="w-12 h-12 object-contain" />
      <h3 className="text-xl font-semibold mt-2 text-black">{name}</h3>
    </div>
  );
}

export default SkillCard;

