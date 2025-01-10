"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 h-16 bg-white shadow-md fixed w-full top-0 left-0 z-50">
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

      {/* Hamburger Menu (Mobile View) */}
      <button
        className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden focus:outline-none group"
        onClick={toggleMenu}
      >
        {/* Line 1 */}
        <span
          className={`block w-8 h-1 bg-text rounded transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        {/* Line 2 */}
        <span
          className={`block w-8 h-1 bg-text rounded mt-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        {/* Line 3 */}
        <span
          className={`block w-8 h-1 bg-text rounded mt-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-md shadow-lg md:hidden`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link
            href="/"
            className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300 py-2"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300 py-2"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-text hover:text-accent transition-colors ease-in-out duration-300 py-2"
          >
            About Me
          </Link>
          <a
            href="https://linkedin.com/in/syahrul-amri-1b8338197"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-link text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.57c-1.13 0-2.06-.92-2.06-2.05 0-1.13.92-2.05 2.06-2.05 1.13 0 2.06.92 2.06 2.05 0 1.12-.93 2.05-2.06 2.05zm14.9 12.88h-3.56v-5.59c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.38-1.86 3.62 0 4.29 2.38 4.29 5.47v6.28z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
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
          href="https://linkedin.com/in/syahrul-amri-1b8338197"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 py-1.5 border-2 border-link text-link font-medium rounded-lg shadow-md hover:bg-link hover:text-white transition-colors duration-300"
          aria-label="Visit my LinkedIn profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.57c-1.13 0-2.06-.92-2.06-2.05 0-1.13.92-2.05 2.06-2.05 1.13 0 2.06.92 2.06 2.05 0 1.12-.93 2.05-2.06 2.05zm14.9 12.88h-3.56v-5.59c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.38-1.86 3.62 0 4.29 2.38 4.29 5.47v6.28z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
