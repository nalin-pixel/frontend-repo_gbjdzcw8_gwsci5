import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="container mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Logo />
        <div className="text-xs md:text-sm">
          © {new Date().getFullYear()} Monochrome Robotics — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
