'use client';

import { useState } from 'react';
import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

import Logo from '../../../public/Logo/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className='w-full mt-6 px-6 text-white flex items-center justify-between md:px-22 relative z-50'>
      <div className='md:hidden'>
        <button onClick={toggleMenu} aria-label='Toggle menu'>
          {isOpen ? "X" : "menu"}
        </button>
      </div>

      <div className='flex items-center space-x-2'>
        <Image src={Logo} alt='Logo' width={135} height={40} />
      </div>

      <ul className='hidden md:flex gap-x-8 items-center text-sm font-medium'>
        <li>
          <a href='#home' className='hover:text-gray-300'>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className='hover:text-gray-300'>
            About us
          </a>
        </li>
        <li>
          <a href='#services' className='hover:text-gray-300'>
            Services
          </a>
        </li>
        <li>
          <a href='#branches' className='hover:text-gray-300'>
            Branches
          </a>
        </li>
        <li className='flex gap-1 items-center relative'>
          <a href='#jobs' className='hover:text-gray-300'>
            Jobs
          </a>
          <span className='text-[12px] bg-primary px-1.5 py-0.5 rounded-full'>
            12
          </span>
        </li>
      </ul>

      <div className='hidden md:flex items-center space-x-4'>
        
<button className="flex items-center justify-center border w-[112px] h-[47px] border-white text-white text-sm hover:bg-white hover:text-black transition px-5 py-2 rounded-full">
  Contact us
</button>
        <button className="flex items-center justify-center w-[87px] h-[47px] bg-primary text-white text-sm rounded-full hover:bg-purple-700 transition px-4 py-2">
  Join us
</button>
      </div>

      {isOpen && (
        <div className='absolute top-[100%] left-0 w-full bg-[#1a1a1a] px-6 py-4 flex flex-col gap-4 text-sm font-medium md:hidden'>
          <a href='#home' className='hover:text-gray-300' onClick={toggleMenu}>
            Home
          </a>
          <a href='#about' className='hover:text-gray-300' onClick={toggleMenu}>
            About us
          </a>
          <a
            href='#services'
            className='hover:text-gray-300'
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href='#branches'
            className='hover:text-gray-300'
            onClick={toggleMenu}
          >
            Branches
          </a>
          <div className='flex items-center gap-2'>
            <a href='#jobs' className='hover:text-gray-300'>
              Jobs
            </a>
            <span className='text-[12px] bg-primary px-1.5 py-0.5 rounded-full'>
              12
            </span>
          </div>
          <ContactUsButton className='w-full h-[40px] rounded-xl' />
          <JoinUsButton className='w-full h-[40px] rounded-xl' />
        </div>
      )}
    </nav>
  );
};

export default Navbar;