import React from 'react';
import { projectData } from '../components/ProjectData'; // Import project data
import Card from '../components/Card'; // Import the Card component

const Project = () => {
  return (
    <section className="w-full min-h-screen px-4 py-16 overflow-x-hidden text-white bg-gray-900 -mt-20">
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        
        <h1 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          My Projects
        </h1>

        <div className="grid w-full grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
