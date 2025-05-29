import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-24 md:py-36">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">
          Engineer by Trade.<br />Artist at Heart.<br /><span className="text-accent">Gamer Always.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          I build intuitive, testable, and creative UIs using React, Spring Boot, and a splash of pixel magic.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-accent hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-xl transition">
            View Projects
          </a>
          <a href="#contact" className="border border-accent text-accent hover:bg-accent hover:text-white py-2 px-6 rounded-xl transition">
            Contact Me
          </a>
        </div>
      </section>
    );
};

export default HeroSection;