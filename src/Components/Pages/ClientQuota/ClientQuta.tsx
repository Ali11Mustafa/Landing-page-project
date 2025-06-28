'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import { clients } from '../../data/Quota';
import type { Client } from '../../types/Quota';

interface QuoteCardProps {
  client: Client;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ client }) => (
  <div className="flex flex-col p-[45px] bg-[#161616] rounded-[10px] w-[314px] md:w-[427px] max-h-[400px]">
    <div className="relative w-[64px]">
      <Image
        src={client.image}
        alt={client.name}
        width={64}
        height={60}
        className="rounded-full object-cover"
      />
      <p className="pt-3 w-4 h-4 bg-green-400 rounded-full text-lg text-black absolute top-0 right-0 flex items-center justify-center">
        &quot;
      </p>
    </div>
    <p className="text-white font-semibold mt-[10px]">{client.name}</p>
    <p className="text-sm md:text-lg text-white leading-[27px] mt-4">
      {client.quote}
    </p>
  </div>
);

const QuotesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const card = container?.children[index + 1] as HTMLElement | undefined; // Skip left-padding element
    if (container && card) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: 'smooth',
      });
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center w-full relative">
      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="absolute left-4 top-full md:top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <AiOutlineLeft className="w-5 h-5" />
        </button>
      )}

      {currentIndex < clients.length - 1 && (
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, clients.length - 1))
          }
          className="absolute right-4 top-full md:top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <AiOutlineRight className="w-5 h-5" />
        </button>
      )}

      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory px-6 md:px-2 gap-4 w-full max-w-screen-xl scroll-smooth"
      >
        <div style={{ width: '10%' }} className="shrink-0 md:w-[30%]" />
        {clients.map((client, i) => (
          <div
            key={i}
            className="shrink-0 snap-center"
            style={{ width: 'min(90vw, 427px)' }}
          >
            <QuoteCard client={client} />
          </div>
        ))}
        <div style={{ width: '10%' }} className="shrink-0 md:w-[50%]" />
      </div>

      <div className="hidden md:flex gap-2 mt-6">
        {clients.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-black' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuotesCarousel;
