'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../../../../public/Logo/logo.svg';

interface NavLink {
  href: string;
  label: string;
  badge?: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About us' },
  { href: '#services', label: 'Services' },
  { href: '#branches', label: 'Branches' },
  { href: '#jobs', label: 'Jobs', badge: '12' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  // Scroll smoothly to section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle clicking nav links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToSection(targetId);
    setIsOpen(false); // close mobile menu if open
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-2xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Container with overflow control */}
      <div className="w-full overflow-x-hidden">
        <nav className="w-full max-w-[1440px] mx-auto mt-6 px-4 md:px-8 lg:px-12 xl:px-16 text-white flex items-center justify-between relative z-50">
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
              className="text-white text-2xl w-8 h-8 relative flex items-center justify-center"
            >
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
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Image src={Logo} alt="Logo" width={135} height={40} />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-x-6 lg:gap-x-8 xl:gap-x-12 items-center text-md font-medium mt-5 flex-shrink-0">
            {NAV_LINKS.map(({ href, label, badge }) => (
              <li key={href} className="flex items-center gap-1 relative whitespace-nowrap">
                <a
                  href={href}
                  onClick={(e) => handleNavLinkClick(e, href)}
                  className="hover:text-primary transition-colors duration-400 font-bold"
                >
                  {label}
                </a>
                {badge && (
                  <span className="text-[12px] bg-primary px-1.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            <button className="flex items-center justify-center font-bold border border-white text-white hover:bg-white hover:text-black rounded-full transition-colors duration-600 px-4 py-2 text-sm lg:text-base whitespace-nowrap">
              Contact us
            </button>
            <button className="flex items-center justify-center bg-primary font-bold text-white rounded-full transition px-4 py-2 text-sm lg:text-base whitespace-nowrap">
              Join us
            </button>
          </div>

          {/* Mobile Slide Menu */}
          <div
            className={`fixed inset-x-0 top-[72px] mx-6 rounded-xl z-50 bg-transparent text-sm font-medium md:hidden text-center overflow-hidden transform transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            <div className="flex flex-col gap-4 px-4 py-6 bg-[#161616] rounded-xl">
              {NAV_LINKS.map(({ href, label, badge }) => (
                <div key={href} className="flex justify-center items-center gap-2">
                  <a
                    href={href}
                    className="hover:text-gray-300"
                    onClick={(e) => handleNavLinkClick(e, href)}
                  >
                    {label}
                  </a>
                  {badge && (
                    <span className="text-[12px] bg-primary px-1.5 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>
              ))}
              <button className="flex items-center justify-center bg-primary text-white hover:bg-purple-700 transition w-full h-[40px] rounded-xl">
                Join Us
              </button>
              <button className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-black transition w-full h-[40px] rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;