import Image from 'next/image';

// import ContactUsButton from '../UI/ContactUsButton';
// import JoinUsButton from '../UI/JoinUsButton';

import BG1 from '../../../public/Hero/right-hero.svg';
import BG2 from '../../../public/Hero/right-hero-bottom.svg';
import BG3 from '../../../public/Hero/left-hero-below-texts.svg';
const Hero = () => {
  return (
    <section className='w-full h-[700px] mt-2 px-3 md:px-0 md:pl-22 flex justify-between overflow-hidden'>
      <div className='max-w-[632px] flex flex-col justify-start gap-4'>
        <h1 className='mt-5 text-center md:text-left text-white text-[32px] md:text-[50px] font-semibold leading-[63px]'>
          Transform your business with our{' '}
          <span className='text-primary'>
            <span className='bg-gradient-to-br from-primary to-[#4b2a4e] to-90% text-transparent bg-clip-text'>
              Creative
            </span>{' '}
            Marketing{' '}
            <span className='bg-gradient-to-br from-primary to-[#4b2a4e] to-90% text-transparent bg-clip-text'>
              Solutions!
            </span>
          </span>
        </h1>
        <p className='text-md text-[#d9d9d9] text-center md:text-left'>
          Welcome to Focus Marketing Solutions! We&apos;re a creative team
          dedicated to driving your business forward with innovative marketing
          strategies. From digital marketing to social media management, we&apos;re
          here to help you succeed. Let&apos;s build something extraordinary together
        </p>
      <div className='flex flex-col md:flex-row gap-4'>
             <button className="flex items-center justify-center bg-primary text-white text-sm rounded-full hover:bg-purple-700 transition md:w-[102px] h-[55px]">
  Join us
     </button>
      <button className="flex items-center justify-center border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition md:w-[132px] h-[55px]">
     Contact us
     </button>
       
        </div>
        <div
          className='w-[488px] h-full mt-[110px] object-cover brightness-50 rounded-2xl mask-fade-bottom hidden md:flex'
          style={{
            backgroundImage: `url(${BG3.src})`,
          }}
        />
      </div>
      <div className='hidden md:flex flex-col gap-10'>
        <Image
          src={BG1}
          alt='Hero Image 1'
          className='w-[535px] h-[445px] object-cover rounded-2xl'
        />
        <div
          className='w-[312px] h-[394px] rounded-2xl bg-cover bg-center mask-fade-bottom  hidden md:flex'
          style={{
            backgroundImage: `url(${BG2.src})`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;