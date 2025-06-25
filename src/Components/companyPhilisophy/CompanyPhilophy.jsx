"use client"
import CountUp from 'react-countup';

const CompanyPhilosophy = () => {
  const companyStats = [
    { id: 1, count: 1200, label: 'Clients' },
    { id: 2, count: 20, label: 'Branches' },
    { id: 3, count: 200, label: 'Employees' },
    { id: 4, count: 315, label: 'Sales Representatives' },
  ];

  const CompanyDataRepresentation = ({ count, label }) => {
    return (
      <div className="max-w-[141px] md:w-auto flex flex-col gap-2">
        <h3 className="text-5xl text-white font-semibold leading-[60px]">
          <CountUp end={count} duration={3} separator="" />+
        </h3>
        <p className="text-lg whitespace-nowrap text-[#646a69] font-medium">{label}</p>
      </div>
    );
  };

  const Subheading = () => (
    <div className="w-full pb-4 flex items-center gap-2 border-b border-[#d9dedd]">
      <span className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
      <p className="text-sm text-primary leading-5">The company&apos;s philosophy</p>
    </div>
  );

  const ContentBlock = () => (
    <div className="flex flex-col md:flex-row justify-between mt-14">
      <div className="md:w-[592px] flex flex-col gap-6">
        <h2 className="text-[32px] md:text-[62px] text-primary md:leading-[75px]">
          We bear the responsibility of developing the sector.
        </h2>
        <p className="text-md md:text-2xl text-[#646a69] md:leading-[36px]">
          Elevate your brand with our comprehensive marketing solutions,
          including Digital Marketing, Content Creation, and Social Media
          Strategy. Enhance visibility through expert SEO and PPC management,
        </p>
      </div>
      <div className="w-full md:w-[334px] flex flex-wrap md:flex-col gap-6 md:gap-[64px] mt-3 md:mt-0">
        {companyStats.map((item) => (
          <CompanyDataRepresentation
            key={item.id}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );

  const ChartSection = () => (
    <div className="mt-[86px] flex flex-col gap-[25px]">
      <h3 className="text-2xl font-semibold">Our charts</h3>
      {/* Placeholder for future chart or analytics visualization */}
    </div>
  );

  return (
    <section className="px-6 md:px-[72px] flex flex-col">
      <Subheading />
      <ContentBlock />
      <ChartSection />
    </section>
  );
};

export default CompanyPhilosophy;
