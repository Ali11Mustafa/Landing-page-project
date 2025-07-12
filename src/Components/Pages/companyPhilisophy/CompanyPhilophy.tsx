"use client";

import CountUp from "react-countup"; // Animation component to count numbers up
import { companyStats } from "../../Data/companyData"; // Company statistics data
import DonutChart from "./Charts/DountChart"; // Donut chart component
import ProfitChart from "./Charts/ProfitChart"; // Profit chart component

// Small reusable stat card displaying a count with a label
const StatCard = ({ count, label }: { count: number; label: string }) => (
  <div className="max-w-[141px] md:w-auto flex flex-col gap-2">
    {/* Animated count number with a plus sign */}
    <h3 className="text-5xl text-white font-semibold leading-[60px]">
      <CountUp end={count} duration={3} />+
    </h3>
    {/* Label describing the statistic */}
    <p className="text-lg text-[#646a69] font-medium whitespace-nowrap">
      {label}
    </p>
  </div>
);

// Section heading with a small decorative dot and text
const SectionHeading = () => (
  <div className="w-full pb-4 flex items-center gap-2 border-b border-[#d9dedd]">
    {/* Small circular dot */}
    <span className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
    {/* Heading text */}
    <p className="text-sm text-primary leading-5">
      The company&apos;s philosophy
    </p>
  </div>
);

// Content section combining textual description and company stats side-by-side
const PhilosophyContent = () => (
  <div className="flex flex-col md:flex-row justify-between mt-14">
    {/* Left side: headline and descriptive paragraph */}
    <div className="md:w-[592px] flex flex-col gap-6">
      <h2 className="text-[32px] md:text-[62px] text-primary md:leading-[75px]">
        We bear the responsibility of developing the sector.
      </h2>
      <p className="text-md md:text-2xl text-[#646a69] md:leading-[36px]">
        Elevate your brand with our comprehensive marketing solutions, including
        Digital Marketing, Content Creation, and Social Media Strategy. Enhance
        visibility through expert SEO and PPC management.
      </p>
    </div>

    {/* Right side: a list of stat cards displaying various company stats */}
    <div className="w-full md:w-[334px] flex flex-wrap md:flex-col gap-6 md:gap-[64px] mt-3 md:mt-0">
      {companyStats.map(({ id, count, label }) => (
        <StatCard key={id} count={count} label={label} />
      ))}
    </div>
  </div>
);

// Section displaying charts: ProfitChart and DonutChart side by side on larger screens
const ChartsOverview = () => (
  <div className="mt-[90px] flex flex-col gap-[25px]">
    {/* Section title */}
    <h3 className="text-3xl font-bold text-white">Our charts</h3>

    {/* Container for charts, stacked vertically on small screens, side-by-side on xl+ */}
    <div className="flex flex-col xl:flex-row gap-[45px]">
      {/* Profit chart taking half the width on xl screens */}
      <div className="w-full xl:w-1/2">
        <ProfitChart />
      </div>

      {/* Donut chart taking half the width on xl screens */}
      <div className="w-full xl:w-1/2">
        <DonutChart />
      </div>
    </div>
  </div>
);

// Main component assembling the entire Company Philosophy section
const CompanyPhilosophy = () => (
  <section className="px-6 md:px-[72px] flex flex-col" id="branches">
    {/* Section heading */}
    <SectionHeading />

    {/* Text and stats content */}
    <PhilosophyContent />

    {/* Charts section */}
    <ChartsOverview />
  </section>
);

export default CompanyPhilosophy;
