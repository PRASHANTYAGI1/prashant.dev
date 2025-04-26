import React from 'react';

const Card = ({ title, description, imgSrc, link }) => {
  return (
    <div className="group [perspective:1000px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="relative p-4 transition-transform duration-500 bg-gray-800 rounded-lg shadow-lg sm:p-6 transform-style preserve-3d hover:rotate-x-6 hover:-rotate-y-3 hover:scale-105">

        {/* Image */}
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-40 mb-4 transition-transform duration-500 rounded-md sm:h-48 md:h-56 group-hover:translate-z-10 group-hover:-translate-y-2 group-hover:scale-110"
        />

        {/* Text content */}
        <div className="relative z-10 transition-transform duration-500 group-hover:translate-z-10 group-hover:-translate-y-1">
          <h2 className="text-xl font-semibold text-white transition-all duration-300 sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm text-gray-400 transition-all duration-300 sm:text-base">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-600 sm:text-base"
          >
            View Project
          </a>
        </div>

      </div>
    </div>
  );
};

export default Card;
