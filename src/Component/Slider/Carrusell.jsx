import React, { useState, useEffect } from 'react';
import './Carrusell.css'
const technologies = [
  // Aca van las referencias de las imagenes del carrusell
  { name: 'HTML5', image: '/html5.svg' },
  { name: 'CSS3', image: '/css3.svg' },
  { name: 'JS', image: '/javascript.svg' },
  { name: 'Node.js', image: '/nodedotjs.svg' },
  { name: 'React', image: '/react.svg' },
  {name: 'Tailwind', image: '/tailwindcss.svg'},
  {name: 'WordPress', image: '/wordpress.svg'},
  {name: 'Boostrap', image: '/bootstrap.svg'},
  {name: 'mongodb', image: '/mongodb.svg'}
  
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