import Image from 'next/image';


import News1 from '../../../public/News/News-1.png';
import News2 from '../../../public/News/News-2.png';
import News3 from '../../../public/News/News-3.png';
import News4 from '../../../public/News/News-4.png';

const News = () => {
  
const NewsCard = ({ news }) => {
  return (
    <div className="flex gap-8">
      <Image
        src={news?.image}
        alt={news?.title}
        className="w-[115px] md:w-[221px] h-[115px] md:h-[246px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-6">
        <h3 className="text-md md:text-2xl text-white font-medium md:leading-10">
          {news?.title}
        </h3>
        <div className="flex gap-4">
         <button className='w-[94px] md:w-[98px] h-[30px] text-sm text-[#1d1f1e] border border-[#d9dedd] bg-white rounded-full'>
        Company
      </button>
      <button className='w-[85px] md:w-[94px] h-[30px] text-sm text-[#1d1f1e] border border-[#d9dedd] bg-white rounded-full'>
        Contracts
      </button>
        </div>
      </div>
    </div>
  );
};
const NewsButtons = () => {
  return (
    <div className='flex gap-[6px]'>
      <button className='w-[94px] md:w-[98px] h-[30px] text-sm text-[#1d1f1e] border border-[#d9dedd] bg-white rounded-full'>
        Company
      </button>
      <button className='w-[85px] md:w-[94px] h-[30px] text-sm text-[#1d1f1e] border border-[#d9dedd] bg-white rounded-full'>
        Contracts
      </button>
    </div>
  );
};

  
  const NewsData = [
    {
      id: 2,
      image: News2,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
    {
      id: 3,
      image: News3,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
    {
      id: 4,
      image: News4,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
    },
  ];
  return (
    <section className='w-full px-3 md:px-22 flex mt-30 flex-col gap-[108px]'>
      <div className='flex justify-between items-center'>
        <h2 className='text-center md:text-left text-[44px] text-white  font-medium leading-[54px]'>
          News
        </h2>
       <button className="hidden md:inline-flex items-center justify-center w-[167px] h-[55px] px-4  font-bold text-white  bg-primary rounded-full leading-none whitespace-nowrap">
  View all news
</button>
      </div>

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
              We specialize in fostering effective partnerships with supportive
              companies to drive mutual success.
            </h3>
            <p className='text-md md:text-lg text-[#646a69] leading-[26px]'>
              We are committed to building effective partnerships with
              supporting companies, contributing to the advancement,
              development, and expansion of the sector through diverse
              capabilities, expertise, and technological innovation.
            </p>
          </div>
        </div>
        <div className='w-full md:w-[530px] flex flex-col gap-8'>
          {NewsData.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;