import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "/", name: "Beranda" },
    { to: "/jelajahi", name: "Jelajahi" },
    { to: "/daftar-umkm", name: "Daftar UMKM" },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
      isActive
        ? "text-secondary" 
        : "text-gray-300 hover:text-secondary" 
    }`;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-lg shadow-xl"
            : "bg-transparent" 
        }
      `}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-bold text-secondary">
              Sentralokal
            </NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.to} className={getNavLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-secondary focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-lg shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-2 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `block w-full text-center px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-secondary bg-gray-800"
                      : "text-gray-300 hover:text-secondary hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
