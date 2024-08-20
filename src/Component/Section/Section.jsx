import React from 'react';
import Cards from '../Cards/Cards';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Este es un breve resumen de mi primer proyecto.',
    image: 'src/assets/img/proyecto1.jpg',
    link: '#',
  },
  {
    title: 'Proyecto 2',
    description: 'Este es un breve resumen de mi segundo proyecto.',
    image: 'src/assets/img/proyecto2.jpg',
    link: '#',
  },
  {
    title: 'Proyecto 3',
    description: 'Este es un breve resumen de mi tercer proyecto.',
    image: 'src/assets/img/proyecto3.jpg',
    link: '#',
  },
  // Agrega más proyectos aquí
];

export const ProjectsSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Cards key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
