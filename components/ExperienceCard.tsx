import React from 'react';
import { Experience } from '../types/type';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h3 className="text-xl font-bold text-dark">{experience.position}</h3>
        <span className="text-primary font-medium">{experience.duration}</span>
      </div>
      <h4 className="text-lg text-secondary mb-4">{experience.organization}</h4>
      <ul className="list-disc pl-5 space-y-2">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;