import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection: React.FC = () => {
    return (
<section className="bg-background text-gray-200 py-20 px-4 md:px-0 border-t border-gray-700">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-heading font-bold text-accent mb-12">Projects</h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch justify-items-center">
                    {/* Project Card */}
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />

                </div>
            </div>
        </section>
    );
};

export default ProjectSection;