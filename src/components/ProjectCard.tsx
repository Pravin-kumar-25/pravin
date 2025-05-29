import React from 'react';

const ProjectCard: React.FC = () => {
    return (
        <div className="flex flex-col justify-between bg-[#1e293b] rounded-xl p-6 shadow-md border border-gray-700 hover:border-accent hover:shadow-accent/20 transition-transform duration-300 hover:scale-[1.03] max-w-[350px] w-full">
            <div>
                <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
                <p className="text-gray-400 text-sm mb-4">
                    Short description offasdfasdfasdfasdfasdf what this project is about. You can tweak the text as needed.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-sky-300 mb-4">
                    <span className="bg-sky-800 px-2 py-1 rounded">Tech 1</span>
                    <span className="bg-sky-800 px-2 py-1 rounded">Tech 2</span>
                    <span className="bg-sky-800 px-2 py-1 rounded">Tech 3</span>
                </div>
            </div>
            <a href="#" className="mt-auto text-accent hover:underline text-sm">
                View Project →
            </a>
        </div>
    );
};

export default ProjectCard;