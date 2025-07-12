"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import { clients } from "../../../Data/quota"; // Importing client data
import { Client } from "../../../types/Quota"; // Type definition for client object

// Component to display an individual quote card
interface QuoteCardProps {
  client: Client;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ client }) => (
  <div className="flex flex-col p-[45px] bg-[#161616] rounded-[10px] w-[314px] md:w-[427px] max-h-[400px]">
    {/* Client's avatar image */}
    <div className="relative w-[64px]">
      <Image
        src={client.image}
        alt={client.name}
        width={64}
        height={60}
        className="rounded-full object-cover"
      />
      {/* Decorative quote symbol at top-right of the image */}
      <p className="pt-2 w-4 h-4 #50DCB7 rounded-full text-lg text-black absolute top-0 right-0 flex items-center justify-center">
        &quot;
      </p>
    </div>

    {/* Client's name */}
    <p className="text-white font-semibold mt-[10px]">{client.name}</p>

    {/* Client's quote text */}
    <p className="text-sm md:text-lg font-meduim text-white leading-[33px] mt-4">
      {client.quote}
    </p>
  </div>
);

// Main carousel component for displaying multiple quotes
const QuotesCarousel: React.FC = () => {
  // State to track the currently visible quote index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref for the container div that holds all quote cards
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to smoothly scroll the container to center the card at `index`
  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    const children = container?.children;

    if (!container || !children) return;

    // Due to padding, the first child is empty spacer, so offset by 1
    const card = children[index + 1] as HTMLElement | undefined;
    if (!card) return;

    // Calculate center positions for container and card
    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    // Scroll container so the card is centered
    container.scrollTo({
      left: cardCenter - containerCenter,
      behavior: "smooth",
    });

    // Update current index state
    setCurrentIndex(index);
  }, []);

  // Navigate to previous quote (with boundary check)
  const goToPrevious = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Navigate to next quote (with boundary check)
  const goToNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, clients.length - 1));

  // Scroll to the selected index whenever it changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, scrollToIndex]);

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Left navigation button (shown only if not at first quote) */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-full md:top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <AiOutlineLeft className="w-5 h-5" />
        </button>
      )}

      {/* Right navigation button (shown only if not at last quote) */}
      {currentIndex < clients.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-full md:top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <AiOutlineRight className="w-5 h-5" />
        </button>
      )}

      {/* Container for the quote cards, horizontally scrollable */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory px-6 md:px-2 gap-4 w-full max-w-screen-xl scroll-smooth"
      >
        {/* Left spacer to center first card */}
        <div style={{ width: "10%" }} className="shrink-0 md:w-[30%]" />

        {/* Map through clients and render each QuoteCard */}
        {clients.map((client, index) => (
          <div
            key={client.name + index}
            className="shrink-0 snap-center"
            style={{ width: "min(90vw, 427px)" }}
          >
            <QuoteCard client={client} />
          </div>
        ))}

        {/* Right spacer to center last card */}
        <div style={{ width: "10%" }} className="shrink-0 md:w-[50%]" />
      </div>

      {/* Pagination dots below the carousel (only on medium+ screens) */}
      <div className="hidden md:flex gap-2 mt-6">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuotesCarousel;
