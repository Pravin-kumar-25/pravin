import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <h1 className="text-2xl font-heading text-accent tracking-wide">Pravin kumar</h1>
            <nav className="hidden md:flex space-x-8 font-medium">
                <a href="#about" className="hover:text-accent">About</a>
                <a href="#projects" className="hover:text-accent">Projects</a>
                <a href="#contact" className="hover:text-accent">Contact</a>
            </nav>
            <button className="md:hidden text-accent text-2xl">☰</button>
        </header>
    );
};

export default Navbar;