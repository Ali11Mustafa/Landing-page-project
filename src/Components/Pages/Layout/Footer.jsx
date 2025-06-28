'use client';

import Image from 'next/image';
import Logo from '../../../../public/Logo/logo.svg';
import BG1 from '../../../../public/Footer-BG/footer-bg.svg';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    console.log('Email submitted');
  };

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: '#' },
    { icon: FaInstagram, name: 'Instagram', url: '#' },
    { icon: FaLinkedin, name: 'LinkedIn', url: '#' }
  ];

  const companyLinks = [
    { text: 'Who are we', url: '#' },
    { text: 'Services', url: '#' },
    { text: 'Jobs', url: '#', badge: '12' },
    { text: 'Branches', url: '#' }
  ];

  const helpLinks = [
    { text: 'Common questions', url: '#' },
    { text: 'Contact us', url: '#' },
    { text: 'Register as merchant', url: '#' }
  ];

  return (
    <footer className='bg-primary px-3 md:px-22 pt-[130px] flex flex-col text-white relative overflow-hidden'>
      {/* Hero Section */}
      <section className='mb-[73px]'>
        <h2 className='text-2xl text-center md:text-left md:text-[46px] font-bold md:leading-16 mb-4'>
          What are you waiting for?
        </h2>
        <p className='md:w-[727px] text-center md:text-left text-md md:text-2xl text-[#f8f8f8] font-light md:leading-[45px]'>
          Register now to get the best delivery experience for you and your
          clients in Iraq!
        </p>
      </section>

      {/* Email Registration Form */}
      <form onSubmit={handleEmailSubmit} className='flex flex-col md:flex-row items-center gap-3 mb-30'>
        <input
          type="email"
          placeholder='Your email'
          required
          aria-label="Email address"
          className='w-full md:w-[349px] h-[56px] px-4 md:px-5 md:py-4 text-md bg-white rounded-full text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50'
        />
        <button 
          type="submit"
          className='w-full md:w-[157px] h-[56px] bg-[#161616] font-sans font-medium rounded-full hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors capitalize'
        >
          register now
        </button>
      </form>

      {/* Footer Content */}
      <div className='flex flex-col md:flex-row justify-between mb-[250px]'>
        {/* Left Section - Logo and Links */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-[67px] mb-10 md:mb-0'>
          <Image 
            src={Logo} 
            alt='Leader Express Delivery Company Logo' 
            className='w-[135px] h-[40px]' 
            priority
          />
          
          <nav className='flex gap-8'>
            {/* Company Links */}
            <div className='flex flex-col items-start gap-6'>
              <h3 className='text-md font-bold'>The company</h3>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className='text-md font-medium opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2'
                  aria-label={link.text}
                >
                  <span>{link.text}</span>
                  {link.badge && (
                    <span className='px-2 py-1 text-xs font-medium bg-black rounded-full'>
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Help Center Links */}
            <div className='flex flex-col items-start gap-6'>
              <h3 className='text-md font-bold'>Help center</h3>
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className='text-md font-medium opacity-80 hover:opacity-100 transition-opacity'
                  aria-label={link.text}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Right Section - Social Media */}
        <div className='flex flex-col gap-4'>
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                className='w-[150px] h-[32px] md:w-[256px] md:h-[56px] flex items-center gap-3 px-1 py-2 rounded-full bg-[#ffffff3d] text-white hover:bg-[#ffffff4d] focus:bg-[#ffffff4d] focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors'
                aria-label={`Visit our ${social.name} page`}
              >
                <div className='w-7 h-7 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-primary'>
                  <IconComponent className="text-primary h-6 w-6" />
                </div>
                <span className='text-md md:text-md font-medium'>{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <p className='text-sm text-[#ffffffcc] text-center font-light mb-[55px]'>
        © 2024 Leader Express Delivery Company. All rights reserved.
      </p>

      {/* Background Decoration */}
      <Image
        src={BG1}
        alt=''
        className='absolute top-160 right-110 w-290 h-auto pointer-events-none'
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;