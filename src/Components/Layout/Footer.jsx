import Image from 'next/image';
import Logo from '../../../public/Logo/logo.svg';
import BG1 from '../../../public/Footer-BG/footer-bg.svg';

const Footer = () => {
  return (
    <footer className='bg-primary px-3 md:px-22 pt-[130px] flex flex-col text-white relative overflow-hidden'>
      <h2 className='text-2xl text-center md:text-left md:text-[46px] font-bold md:leading-16'>
        What are you waiting for?
      </h2>
      <p className='md:w-[727px] text-center md:text-left text-md md:text-2xl text-[#f8f8f8] font-light md:leading-[45px]'>
        Register now to get the best delivery experience for you and your
        clients in Iraq!
      </p>

      <div className='flex flex-col md:flex-row items-center gap-3 mt-[73px]'>
        <input
          placeholder='Your email?'
          className='w-full md:w-[349px] h-[56px] px-4 md:px-5 md:py-4 text-md bg-white rounded-full text-black placeholder:text-gray-500'
        />

        <button className='w-full md:w-[157px] h-[56px] bg-[#161616] font-sans font-medium rounded-full'>
          register now
        </button>
      </div>

      <div className='flex flex-col md:flex-row justify-between mt-30'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-[67px]'>
          <Image src={Logo} alt='Logo' className='w-[135px] h-[40px]' />
          <div className='flex gap-8'>
            <div className='flex flex-col items-start gap-6'>
              <h3 className='text-md font-medium'>The company</h3>
              <h3 className='text-md font-medium opacity-80'>Who are we</h3>
              <h3 className='text-md font-medium opacity-80'>Services</h3>
              <div className='text-md font-medium flex items-center justify-center gap-2'>
                <h3 className='opacity-80'>Jobs</h3>
                <p className='px-2 py-1 text-xs font-medium bg-black rounded-full'>
                  12
                </p>
              </div>
              <h3 className='text-md font-medium opacity-80'>Branches</h3>
            </div>
            <div className='flex flex-col items-start gap-6'>
              <h3 className='text-md font-medium'>Help center</h3>
              <h3 className='text-md font-medium opacity-80'>
                Common questions
              </h3>
              <h3 className='text-md font-medium opacity-80'>Contact us</h3>
              <h3 className='text-md font-medium opacity-80'>
                Register as merchant
              </h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-10 md:mt-0'>
           <button className='w-[150px] h-[32px] md:w-[256px] md:h-[56px] flex items-center gap-3 px-3 py-2 rounded-lg bg-[#ffffff3d] text-white hover:bg-[#ffffff4d] transition-colors'>
  <div className='w-7 h-7 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center text-primary'>
    image
  </div>
  <span className='text-xs md:text-md font-medium'>Facebook</span>
</button>
   <button className='w-[150px] h-[32px] md:w-[256px] md:h-[56px] flex items-center gap-3 px-3 py-2 rounded-lg bg-[#ffffff3d] text-white hover:bg-[#ffffff4d] transition-colors'>
  <div className='w-7 h-7 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center text-primary'>
    image
  </div>
  <span className='text-xs md:text-md font-medium'>Instagram</span>
</button>
   <button className='w-[150px] h-[32px] md:w-[256px] md:h-[56px] flex items-center gap-3 px-3 py-2 rounded-lg bg-[#ffffff3d] text-white hover:bg-[#ffffff4d] transition-colors'>
  <div className='w-7 h-7 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center text-primary'>
    image
  </div>
  <span className='text-xs md:text-md font-medium'>Linkdein</span>
</button>     
        </div>
      </div>

      <p className='text-sm text-[#ffffffcc] text-center font-light mt-[250px] mb-[55px]'>
        © 2024 Leader Express Delivery Company. All rights reserved.
      </p>
      <Image
        src={BG1}
        alt='Footer Background'
    
        className='absolute top-160 right-110 w-290  h-auto'
      />
    </footer>
  );
};

export default Footer;