const AboutUs = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-3 md:px-0 md:h-[626px] min-h-[500px] text-background py-8">
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-cover lg:hidden"
        style={{ backgroundImage: "url('/About/lines-bg-sm.svg')" }}
      />
      <div
        className="absolute inset-0 hidden bg-left bg-no-repeat bg-contain lg:block"
        style={{ backgroundImage: "url('/About/lines-bg.svg')" }}
      />
      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl md:text-5xl text-white leading-[60px] font-medium">
          About Us
        </h2>
        <p className="text-center md:text-justify text-md text-[#d9d9d9]">
          Welcome to{' '}
          <span className="text-primary">Focus Marketing Solutions</span>! We&apos;re
          a creative team dedicated to driving your business forward with innovative marketing
          strategies. From digital marketing to social media management, we&apos;re here to help
          you succeed.{' '}
          <span className="text-primary">
            Let&apos;s build something extraordinary together.
          </span>
        </p>
        <button className="w-full md:w-[148px] h-[56px] text-[#9350f2] text-lg font-medium bg-transparent border border-[#9350f2] rounded-full hover:bg-purple-700 hover:text-white transition">
          Read more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
