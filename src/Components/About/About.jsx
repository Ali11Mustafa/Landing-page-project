const AboutUs = () => {
  return (
    <section className="relative flex items-center justify-center px-3 py-8 md:px-0 md:h-[626px] min-h-[500px] overflow-hidden text-background md:mt-12">
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-cover lg:hidden"
        style={{ backgroundImage: "url('/About/lines-bg-sm.svg')" }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-left bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/About/lines-bg.svg')" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[900px] gap-6">
        <h2 className="text-2xl md:text-5xl font-medium text-white leading-[60px]">
          About Us
        </h2>

        <p className="text-base md:text-lg lg:text-[20px] text-[#fffefe] text-center md:text-left font-medium leading-[2] lg:leading-[1.5]">
          Welcome&nbsp;to&nbsp;
          <span className="text-primary">Focus Marketing Solutions</span>! We're a creative team
          dedicated to driving your business forward with innovative marketing strategies. From
          digital marketing to social media management, we're here to help you succeed.&nbsp;
          <span className="text-primary">Let's build something extraordinary together.</span>
        </p>

        <button className="w-full md:w-[148px] h-[56px] text-primary text-lg font-bold bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white transition">
          Read more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
