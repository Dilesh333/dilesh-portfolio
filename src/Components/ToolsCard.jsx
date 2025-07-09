import React from 'react';

function ToolsCard({ name, logo }) {
  return (
    <div className='bg-white flex flex-col h-28 w-32 justify-center items-center p-6 shadow-md rounded-md hover:scale-105 transition-transform duration-300'>
      <div>
        <img src={logo} alt={name} className="h-12 w-12 object-contain" />
      </div>
      <h3 className='text-xl font-semibold mt-2 text-black'>{name}</h3>
    </div>
  );
}

export default ToolsCard;
