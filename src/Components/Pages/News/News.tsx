// components/News/News.tsx
import Image from 'next/image';
import News1 from '../../../../public/News/News-1.png';
import { newsData } from '../../data/news';
import NewsCard from './NewComponents/newsCard';
import NewsButtons from './NewComponents/newButton';

const News = () => {
  return (
    <section id="jobs" className='w-full px-3 md:px-22 flex mt-0 md:mt-30 flex-col gap-[108px]'>
      {/* Header */}
      <div className='flex items-center justify-center md:justify-between'>
        <h2 className='text-center md:text-left text-[44px] text-white font-medium leading-[54px]'>
          News
        </h2>
        <button className="hidden md:inline-flex items-center justify-center w-[167px] h-[55px] px-4 font-bold text-white bg-primary rounded-full leading-none whitespace-nowrap">
          Show all news
        </button>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col gap-8'>
          <Image
            src={News1}
            alt='News Image 1'
            className='w-full md:w-[696px] h-[226px] md:h-[460px] object-cover rounded-2xl'
          />
          <div className='md:w-[696px] flex flex-col gap-4'>
            <NewsButtons />
            <h3 className='mt-2 text-lg md:text-[32px] text-white font-medium leading-10'>
              We specialize in fostering effective partnerships with supportive companies to drive mutual success.
            </h3>
            <p className='text-md md:text-lg text-[#646a69] leading-[26px]'>
              We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
            </p>
          </div>
        </div>

        <div className='w-full md:w-[530px] flex flex-col gap-8'>
          {newsData.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>

      {/* Mobile button full-width */}
      <div className="mt-6 md:hidden flex justify-center w-full">
        <button className="w-[351px] h-[55px] px-[24px] py-[16px] rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center gap-[10px]">
          View all news
        </button>
      </div>
    </section>
  );
};

export default News;
