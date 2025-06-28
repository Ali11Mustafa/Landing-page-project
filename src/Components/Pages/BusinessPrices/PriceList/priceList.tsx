'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { PricingPlan } from '../../../types/Pricing';
import PriceBackground from '../../../../../public/price/PriceBackground.png';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingData } from "../../../data/pricingData";


interface PricingCardProps {
  item: PricingPlan;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ item, index, isOpen, onToggle }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur(); // avoid scroll jump
    onToggle(index);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`md:w-[480px] rounded-xl overflow-hidden relative transition-all duration-300 ${
        isOpen ? 'bg-primary text-white' : 'bg-[#1a1a1a] text-primary'
      }`}
    >
      {isOpen && (
        <div
          className="absolute inset-0 z-0"
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

      <div className="relative z-10">
        <div className="flex justify-between items-center px-6 py-4 cursor-pointer">
          <h3 className="text-[27px] font-medium flex items-center gap-3">
            {item.title}
            {item.badge && (
              <span className="w-[82px] h-[36px] flex items-center justify-center bg-white text-primary text-sm font-semibold rounded">
                {item.badge}
              </span>
            )}
          </h3>
          <div
            className={`p-1 rounded-full ${
              isOpen ? 'bg-[#7e6581d7]' : 'bg-primary text-white'
            }`}
          >
            {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-8 overflow-hidden"
            >
              <p className="mb-4 text-md font-medium text-left text-white/80">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{item.price}</span>
                {item.button && (
                  <div className="bg-white text-neutral-800 px-4 py-2 rounded-lg font-bold">
                    {item.button}
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

const PricingListing: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default open: Pro

  const handleToggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="flex flex-col gap-4">
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
