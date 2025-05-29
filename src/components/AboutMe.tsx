import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="bg-background px-6 py-20 md:py-28 border-t border-gray-700 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-accent mb-6">
                About Me
            </h2>

            <div className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
                <p className="mb-6">
                    I'm a Software Development Engineer in Test with a strong love for frontend design, creative coding, and building things people enjoy using.
                    Whether it's testing frameworks or designing sleek UIs, I blend engineering precision with artistic flair — and a bit of gamer strategy 🎮.
                </p>
                <p>
                    Tools I vibe with: <span className="text-white">React, Spring Boot, Selenium, Docker, TailwindCSS, and ChatGPT.</span>
                </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12 w-12" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="h-12 w-12" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-12 w-12" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-12 w-12" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-12 w-12" />
            </div>
        </section>
    );
};

export default AboutMe;