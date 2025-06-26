import Image from 'next/image';

import RightHeroTopImg from '../../../public/Hero/right-hero.svg';
import RightHeroBottomImg from '../../../public/Hero/right-hero-bottom.svg';
import LeftHeroBelowTextImg from '../../../public/Hero/left-hero-below-texts.svg';

const Hero = () => {
  const gradientText = 'bg-gradient-to-br from-primary to-[#4b2a4e] to-90% text-transparent bg-clip-text';
  const buttonBase = 'flex items-center justify-center text-md font-bold rounded-full h-[55px]';

  return (
    <section className="w-full h-[700px] mb-2 px-3 mt-15 md:px-0 md:pl-22 flex justify-between overflow-hidden">
      {/* Left Content */}
      <div className="max-w-[632px] flex flex-col justify-start gap-4">
        <h1 className="mt-5 text-center md:text-left text-white text-[32px] md:text-[50px] font-semibold leading-[40px] md:leading-[63px]">
          Transform your business with our{' '}
          <span className="text-primary">
            <span className={gradientText}>Creative</span>{' '}
            Marketing{' '}
            <span className={gradientText}>Solutions!</span>
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#fffefe] text-center md:text-left font-medium leading-relaxed">
          Welcome to Focus Marketing Solutions! We&apos;re a creative team
          dedicated to driving your business forward with innovative marketing
          strategies. From digital marketing to social media management, we&apos;re
          here to help you succeed. Let&apos;s build something extraordinary together.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-3">
          <button className={`${buttonBase} bg-primary text-white md:w-[102px]`}>
            Join us
          </button>
          <button className={`${buttonBase} border border-white text-white hover:bg-white hover:text-black transition md:w-[132px]`}>
            Contact us
          </button>
        </div>

        {/* Decorative BG Left Image */}
        <div
          className="w-[488px] h-full mt-[110px] object-cover brightness-50 rounded-2xl mask-fade-bottom hidden md:flex"
          style={{ backgroundImage: `url(${LeftHeroBelowTextImg.src})` }}
        />
      </div>

      {/* Right Images */}
      <div className="hidden md:flex flex-col gap-10">
        <Image
          src={RightHeroTopImg}
          alt="Hero Top Right Image"
          className="w-[535px] h-[445px] object-cover rounded-2xl"
        />
        <div
          className="w-[312px] h-[394px] rounded-2xl bg-cover bg-center mask-fade-bottom hidden md:flex"
          style={{ backgroundImage: `url(${RightHeroBottomImg.src})` }}
        />
      </div>
    </section>
  );
};

export default Hero;
