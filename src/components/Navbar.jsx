// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Anda di sini */}
        <a href="/" className="text-2xl font-bold text-primary">
          Sentra<span className="text-white">Lokal</span>
        </a>

        {/* Contoh Navigasi (opsional) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Beranda</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Tentang</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Kontak</a>
        </div>

        {/* Hamburger Menu untuk mobile (bisa ditambahkan nanti) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Ikon hamburger */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;