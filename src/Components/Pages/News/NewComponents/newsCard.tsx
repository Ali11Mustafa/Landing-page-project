// components/News/NewsCard.tsx
import Image from 'next/image';
import { NewsItem } from "../../../types/news";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => (
  <div className="flex gap-8">
    <Image
      src={news.image}
      alt={news.title}
      className="w-[115px] md:w-[221px] h-[115px] md:h-[246px] object-cover rounded-2xl"
    />
    <div className="flex flex-col gap-6">
      <h3 className="text-md md:text-2xl text-white font-medium md:leading-10">
        {news.title}
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

export default NewsCard;
