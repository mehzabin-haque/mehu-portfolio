import React from 'react';
import { Project } from '../types/type';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-dark">{project.title}</h3>
        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">{project.year}</span>
      </div>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-light text-dark text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;