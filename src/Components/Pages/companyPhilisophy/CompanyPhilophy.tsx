"use client";

import CountUp from "react-countup";
import { companyStats } from "../../data/companyData";
import DonutChart from "./Charts/DountChart";
import ProfitChart from "./Charts/ProfitChart";

// Reusable small stat card
const StatCard = ({ count, label }: { count: number; label: string }) => (
  <div className="max-w-[141px] md:w-auto flex flex-col gap-2">
    <h3 className="text-5xl text-white font-semibold leading-[60px]">
      <CountUp end={count} duration={3} />+
    </h3>
    <p className="text-lg text-[#646a69] font-medium whitespace-nowrap">{label}</p>
  </div>
);

// Section heading
const SectionHeading = () => (
  <div className="w-full pb-4 flex items-center gap-2 border-b border-[#d9dedd]">
    <span className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
    <p className="text-sm text-primary leading-5">The company&apos;s philosophy</p>
  </div>
);

// Left content with text, right with stats
const PhilosophyContent = () => (
  <div className="flex flex-col md:flex-row justify-between mt-14">
    <div className="md:w-[592px] flex flex-col gap-6">
      <h2 className="text-[32px] md:text-[62px] text-primary md:leading-[75px]">
        We bear the responsibility of developing the sector.
      </h2>
      <p className="text-md md:text-2xl text-[#646a69] md:leading-[36px]">
        Elevate your brand with our comprehensive marketing solutions,
        including Digital Marketing, Content Creation, and Social Media
        Strategy. Enhance visibility through expert SEO and PPC management.
      </p>
    </div>
    <div className="w-full md:w-[334px] flex flex-wrap md:flex-col gap-6 md:gap-[64px] mt-3 md:mt-0">
      {companyStats.map(({ id, count, label }) => (
        <StatCard key={id} count={count} label={label} />
      ))}
    </div>
  </div>
);

// Charts section
const ChartsOverview = () => (
  <div className="mt-[90px] flex flex-col gap-[25px]">
    <h3 className="text-3xl font-bold text-white">Our charts</h3>
    <div className="flex flex-col xl:flex-row gap-[45px]">
      <div className="w-full xl:w-1/2">
        <ProfitChart />
      </div>
      <div className="w-full xl:w-1/2">
        <DonutChart />
      </div>
    </div>
  </div>
);

// Main component
const CompanyPhilosophy = () => (
  <section className="px-6 md:px-[72px] flex flex-col" id="branches">
    <SectionHeading />
    <PhilosophyContent />
    <ChartsOverview />
  </section>
);

export default CompanyPhilosophy;
