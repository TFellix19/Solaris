import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full sm:w-1/3 h-48 sm:h-auto">
          <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        </div>
        <div className="p-4 sm:p-6 w-full sm:w-2/3">
          <h2 className="text-xl text-gray-700 font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
          <button className="px-6 py-3 border border-black text-black font-semibold rounded">saber mais</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

