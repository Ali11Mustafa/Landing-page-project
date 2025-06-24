'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../../../public/Logo/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Background overlay with fade transition */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-2xl pointer-events-none transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <nav className="w-full mt-6 px-6 text-white flex items-center justify-between md:px-22 relative z-50">
        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white text-2xl relative w-8 h-8 flex items-center justify-center"
          >
            {/* Icons with fade and rotate */}
            <HiMenu
              className={`absolute transition-all duration-300 ease-in-out transform ${
                isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <HiX
              className={`absolute transition-all duration-300 ease-in-out transform ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={135} height={40} />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-x-8 items-center text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#branches" className="hover:text-gray-300">
              Branches
            </a>
          </li>
          <li className="flex gap-1 items-center relative">
            <a href="#jobs" className="hover:text-gray-300">
              Jobs
            </a>
            <span className="text-[12px] bg-primary px-1.5 py-0.5 rounded-full">
              12
            </span>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center justify-center border w-[112px] h-[47px] border-white text-white text-sm hover:bg-white hover:text-black transition px-5 py-2 rounded-full">
            Contact us
          </button>
          <button className="flex items-center justify-center w-[87px] h-[47px] bg-primary text-white text-sm rounded-full hover:bg-purple-700 transition px-4 py-2">
            Join us
          </button>
        </div>

        {/* Mobile Menu Panel with slide down/up transition */}
        <div
          className={`fixed inset-x-0 top-[72px] mx-6 rounded-xl z-50 bg-transparent text-sm font-medium md:hidden text-center overflow-hidden
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'}
          `}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="flex flex-col gap-4 px-4 py-6">
            <a href="#home" className="hover:text-gray-300" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="hover:text-gray-300" onClick={toggleMenu}>
              About us
            </a>
            <a href="#services" className="hover:text-gray-300" onClick={toggleMenu}>
              Services
            </a>
            <a href="#branches" className="hover:text-gray-300" onClick={toggleMenu}>
              Branches
            </a>
            <div className="flex justify-center items-center gap-2">
              <a href="#jobs" className="hover:text-gray-300" onClick={toggleMenu}>
                Jobs
              </a>
              <span className="text-[12px] bg-primary px-1.5 py-0.5 rounded-full">12</span>
            </div>
            <button className="flex items-center justify-center bg-primary text-white text-sm hover:bg-purple-700 transition w-full h-[40px] rounded-xl">
              Join US
            </button>
            <button className="flex items-center justify-center border border-white text-white text-sm hover:bg-white hover:text-black transition w-full h-[40px] rounded-xl">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
