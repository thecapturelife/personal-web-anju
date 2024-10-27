'use client'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaProjectDiagram, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 bg-gray-950 z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <h1 className="text-white font-bold text-3xl">ANJU</h1>

        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center">
            <FaHome className="mr-2" /> Home
          </li>
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center">
            <FaProjectDiagram className="mr-2" /> Project
          </li>
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center">
            <FaPhone className="mr-2" /> Contact
          </li>
        </ul>

        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-gray-950 text-white flex flex-col items-center space-y-4 py-4 shadow-md">
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center" onClick={toggleMenu}>
              <FaHome className="mr-2" /> Home
            </li>
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center" onClick={toggleMenu}>
              <FaProjectDiagram className="mr-2" /> Project
            </li>
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer flex items-center" onClick={toggleMenu}>
              <FaPhone className="mr-2" /> Contact
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
