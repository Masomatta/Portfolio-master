import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu and manage scroll behavior
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.classList.remove("overflow-hidden");  // Allow scrolling when menu is closed
    } else {
      document.body.classList.add("overflow-hidden");  // Prevent scrolling when menu is open
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#10061f] sm:bg-[#0C0413] text-white flex justify-between items-center sm:py-0 sm:px-0 z-50">
        {/* Logo Section */}
        <div className=" p-2 rounded-md">
          <img 
            src="/images/Photos/Masooma Logo.png" 
            alt="Logo"
            className="sm:w-60 w-40 "
          />
        </div>

        {/* For large Devices */}
        <ul className="hidden md:flex space-x-11 font-poppins font-bold text-md text-md p-7">
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="hover:text-purple-300 font-poppins transition-all duration-300">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link to={'/achievements'}>Achievements</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link to={'/skills'}>Skills</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>

        {/* Navigation Menu (Mobile) */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          <div className={`w-7 h-1 bg-white mb-1 transition-all duration-300 mr-2 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
          <div className={`w-7 h-1 bg-white mb-1 transition-all duration-300 mr-2 ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-7 h-1 bg-white transition-all duration-300 mr-2 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
        </div>

        {/* Mobile Menu (Sliding Sidebar) */}
        <div className={`fixed top-0 right-0 h-90 bg-transparent backdrop-blur-2xl text-center w-full p-2 shadow-lg transition-transform duration-300 ease-in-out z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-2xl"></button>
          <ul className="space-y-6 font-poppins text-lg font-semibold mt-10 ">
            <li className="hover:text-purple-300 font-poppins">
              <Link to={'/'} onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:text-purple-300 font-poppins">
              <Link to={'/about'} onClick={toggleMenu}>About</Link>
            </li>
            <li className="hover:text-purple-300 font-poppins">
              <Link to={'/achievements'} onClick={toggleMenu}>Achievements</Link>
            </li>
            <li className="hover:text-purple-300 font-poppins">
              <Link to={'/projects'} onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="hover:text-purple-300 font-poppins">
              <Link to={'/skills'} onClick={toggleMenu}>Skills</Link>
            </li>
            <li className="hover:text-purple-300 font-poppins ">
              <Link to={'/contact'} onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
