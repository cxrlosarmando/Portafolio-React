import React, { useState, useEffect } from 'react';
import './Carrusell.css'
const technologies = [
  // Aca van las referencias de las imagenes del carrusell
  { name: 'HTML5', image: 'src/assets/svg/html5.svg' },
  { name: 'CSS3', image: 'src/assets/svg/css3.svg' },
  { name: 'JS', image: 'src/assets/svg/javascript.svg' },
  { name: 'Node.js', image: 'src/assets/svg/nodedotjs.svg' },
  { name: 'React', image: 'src/assets/svg/react.svg' },
  {name: 'Tailwind', image: 'src/assets/svg/tailwindcss.svg'},
  {name: 'WordPress', image: 'src/assets/svg/wordpress.svg'},
  {name: 'Boostrap', image: 'src/assets/svg/bootstrap.svg'},
  {name: 'mongodb', image: 'src/assets/svg/mongodb.svg'}
  
];

export const Carrusell = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll">
        {technologies.concat(technologies).map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 flex flex-col items-center p-4"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full rounded-full object-cover"
            />
            <h3 className="text-lg font-medium text-white mt-2">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};