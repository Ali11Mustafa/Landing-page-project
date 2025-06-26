'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import PriceBackground from '../../../public/price/PriceBackground.png';

const pricingData = [
  {
    title: 'Intro',
    description: 'Basic intro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu',
    price: 'Free',
  },
  {
    title: 'Base',
    description: 'Base plan for small teams.',
    price: '$49',
  },
  {
    title: 'Pro',
    description:
      'Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu',
    price: '$123',
    badge: 'Save $40',
    button: 'Try 1 month',
  },
  {
    title: 'Enterprise',
    description: 'Full enterprise suite for scale.',
    price: 'Custom',
  },
];

const PricingCard = ({ item, index, isOpen, onToggle }) => {
  const { title, description, price, badge, button } = item;

  return (
    <button
      type='button'
      onClick={() => onToggle(index)}
      className={`md:w-[480px] rounded-xl overflow-hidden relative transition-all duration-300 ${
        isOpen ? 'bg-primary text-white' : 'bg-[#1a1a1a] text-primary'
      }`}
    >
      {isOpen && (
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${PriceBackground.src})`,
            backgroundSize: '70%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
            filter: 'brightness(1.2)',
          }}
        />
      )}

      <div className='relative z-10'>
        <div className='flex justify-between items-center px-6 py-4 cursor-pointer'>
          <h3 className='text-[27px] font-medium flex items-center gap-3'>
            {title}
            {badge && (
              <span className='w-[82px] h-[36px] flex items-center justify-center bg-white text-primary text-sm font-semibold rounded'>
                {badge}
              </span>
            )}
          </h3>
          <div className={`p-1 rounded-full ${isOpen ? 'bg-[#7e6581d7]' : 'bg-primary text-white'}`}>
            {isOpen ? <FiChevronUp className='w-5 h-5' /> : <FiChevronDown className='w-5 h-5' />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key='content'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='px-6 pb-6'
            >
              <p className='mb-4 text-md text-left text-white/80'>{description}</p>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold text-white'>{price}</span>
                {/* <span>/month</span> */}
                {button && (
                  <div className='bg-white text-neutral-800 px-4 py-2 rounded-lg font-bold'>
                    {button}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

const PricingListing = () => {
  const [openIndex, setOpenIndex] = useState(2); // Default open: Pro

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='flex flex-col gap-4'>
      {pricingData.map((item, index) => (
        <PricingCard
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default PricingListing;
