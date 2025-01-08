import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-primary text-white shadow-md">
    <Link href="/" className="text-2xl font-bold hover:opacity-90">
      Syahrul Amri
    </Link>
    <div className="space-x-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/articles" className="hover:underline">
        Articles
      </Link>
    </div>
  </nav>
);

export default Navbar;
