import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-primary text-white shadow-lg fixed w-full top-0 left-0 z-50">
    <div className="flex items-center space-x-6">
      <Link href="/" className="text-3xl font-semibold tracking-tight hover:text-accent transition-colors">
        Syahrul Amri
      </Link>
    </div>
    <div className="space-x-6 flex items-center">
      <Link
        href="/"
        className="text-lg font-medium hover:text-accent transition-colors ease-in-out duration-300"
      >
        Home
      </Link>
      <Link
        href="/articles"
        className="text-lg font-medium hover:text-accent transition-colors ease-in-out duration-300"
      >
        Articles
      </Link>
    </div>
  </nav>
);

export default Navbar;
