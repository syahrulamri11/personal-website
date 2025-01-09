import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 left-0 z-50">
    {/* Logo Section */}
    <div className="flex items-center space-x-2 group hover:cursor-pointer">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-3xl font-bold text-primary transition-transform group-hover:-translate-y-1 group-hover:scale-110 duration-300 ease-in-out">
          Syahrul
        </span>
        <span className="text-3xl font-bold text-accent transition-transform group-hover:translate-y-1 group-hover:scale-110 duration-300 ease-in-out">
          Amri.
        </span>
      </Link>
    </div>

    {/* Navigation Links */}
    <div className="ml-auto flex items-center space-x-8">
      <Link
        href="/"
        className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300"
      >
        Home
      </Link>
      <Link
        href="/articles"
        className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300"
      >
        Articles
      </Link>
      <Link
        href="/about"
        className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300"
      >
        About Me
      </Link>
      <a
        href="https://linkedin.com/in/syahrulamri"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-link text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        LinkedIn
      </a>
    </div>
  </nav>
);

export default Navbar;
