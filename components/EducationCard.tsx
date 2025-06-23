import React from 'react';
import { Education } from '../types/type';

const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-bold text-dark mb-2">{education.degree}</h3>
      <h4 className="text-lg text-secondary mb-2">{education.institution}</h4>
      <p className="text-gray-600 mb-2">{education.duration}</p>
      <p className="text-gray-700">{education.details}</p>
    </div>
  );
};

export default EducationCard;