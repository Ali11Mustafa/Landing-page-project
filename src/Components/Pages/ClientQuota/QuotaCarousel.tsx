// app/components/Clients.tsx
import React from 'react';
import ClientQuota from './ClientQuota/ClientQuta';

const Clients: React.FC = () => {
  return (
    <section className="w-full h-[700px] md:h-[1048px] bg-primary flex flex-col items-center mb-[400px] gap-20 overflow-hidden">
      <h2 className="text-white text-2xl md:text-5xl mt-10 md:mt-[50px]">
        Our clients opinions
      </h2>
      <ClientQuota />
    </section>
  );
};

export default Clients;
