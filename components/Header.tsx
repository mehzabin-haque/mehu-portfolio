import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark">Mehzabin Haque</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-dark hover:text-primary transition">About</a></li>
              <li><a href="#experience" className="text-dark hover:text-primary transition">Experience</a></li>
              <li><a href="#projects" className="text-dark hover:text-primary transition">Projects</a></li>
              <li><a href="#publications" className="text-dark hover:text-primary transition">Publications</a></li>
              <li><a href="#education" className="text-dark hover:text-primary transition">Education</a></li>
              <li><a href="#contact" className="text-dark hover:text-primary transition">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;