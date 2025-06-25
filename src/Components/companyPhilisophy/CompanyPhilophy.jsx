const CompanyPhilosophy = () => {
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
