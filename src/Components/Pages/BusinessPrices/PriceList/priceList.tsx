"use client"; // Next.js directive for client-side rendering

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Icons for expand/collapse arrows
import { PricingPlan } from "../../../types/Pricing"; // Type definition for pricing plans
import PriceBackground from "../../../../../public/price/PriceBackground.png"; // Background image for pricing cards
import { motion, AnimatePresence } from "framer-motion"; // Animation components for smooth open/close transitions

// Sample pricing plans data array following PricingPlan type
const pricingData: PricingPlan[] = [
  {
    title: "Intro",
    description:
      "The Intro plan offers essential features, allowing you to upload HD videos with ease while catering to basic business requirements.",
    price: "Free",
  },
  {
    title: "Base",
    description:
      "The Base plan is designed for small teams, providing robust tools to support your growing business needs.",
    price: "$49",
  },
  {
    title: "Pro",
    description:
      "The Pro plan enables advanced capabilities, including unlimited HD video uploads and comprehensive features tailored to meet the demands of professional users.",
    price: "$123",
    badge: "Save $40", // Badge shown on this plan
    button: "Try 1 month", // Call to action button label
  },
  {
    title: "Enterprise",
    description:
      "The Enterprise plan delivers a complete suite of solutions designed for large-scale operations and customized business requirements.",
    price: "Custom",
  },
];

interface PricingCardProps {
  item: PricingPlan; // The pricing plan data to show
  index: number; // Index of this card in the list
  isOpen: boolean; // Whether this card is currently expanded/open
  onToggle: (index: number) => void; // Function to toggle open state
}

const PricingCard: React.FC<PricingCardProps> = ({
  item,
  index,
  isOpen,
  onToggle,
}) => {
  // Handles click on the card header to open/close it
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur(); // Remove focus from button to avoid scroll jump issues
    onToggle(index); // Toggle this card open/close state
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`md:w-[480px] rounded-xl overflow-hidden relative transition-all duration-300 ${
        isOpen ? "bg-primary text-white" : "bg-[#1a1a1a] text-primary"
      }`}
    >
      {/* Background image shown only when card is open */}
      {isOpen && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${PriceBackground.src})`,
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            filter: "brightness(1.2)",
          }}
        />
      )}

      {/* Content container with higher z-index to appear above background */}
      <div className="relative z-10">
        {/* Card header: title, badge, and toggle icon */}
        <div className="flex justify-between items-center px-6 py-4 cursor-pointer">
          <h3 className="text-[27px] font-medium flex items-center gap-3">
            {item.title}
            {/* Badge display if available */}
            {item.badge && (
              <span className="w-[82px] h-[36px] flex items-center justify-center bg-white text-primary text-sm font-semibold rounded">
                {item.badge}
              </span>
            )}
          </h3>

          {/* Chevron icon changes depending on open/closed state */}
          <div
            className={`p-1 rounded-full ${
              isOpen ? "bg-[#7e6581d7]" : "bg-primary text-white"
            }`}
          >
            {isOpen ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* AnimatePresence and motion.div provide smooth animation for expanding/collapsing */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }} // start hidden and collapsed
              animate={{ opacity: 1, height: "auto" }} // animate to visible and full height
              exit={{ opacity: 0, height: 0 }} // animate back to hidden on close
              transition={{ duration: 0.3 }} // animation duration
              className="px-6 pb-8 overflow-hidden"
            >
              {/* Description text */}
              <p className="mb-4 text-md font-medium text-left text-white/80">
                {item.description}
              </p>

              {/* Bottom row with price and optional button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">
                  {item.price}
                </span>
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
  // openIndex stores which card is expanded; default open is the Pro plan (index 2)
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  // Toggles the open card; clicking an open card closes it
  const handleToggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="flex flex-col gap-4">
      {/* Render all pricing cards */}
      {pricingData.map((item, index) => (
        <PricingCard
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index} // Pass whether this card is open
          onToggle={handleToggle} // Pass toggle handler
        />
      ))}
    </div>
  );
};

export default PricingListing;
