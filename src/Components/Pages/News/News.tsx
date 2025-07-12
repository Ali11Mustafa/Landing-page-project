// components/News/News.tsx
import Image from "next/image"; // Next.js optimized Image component
import News1 from "../../../../public/News/News-1.png"; // Importing main news image
import { newsData } from "../../Data/news"; // News data array
import NewsCard from "./NewComponents/newsCard"; // Component for individual news items
import NewsButtons from "./NewComponents/newButton"; // Component for news category buttons or filters

const News = () => {
  return (
    <section
      id="jobs"
      className="w-full px-3 md:px-22 flex mt-0 md:mt-30 flex-col gap-[108px]"
    >
      {/* Header section with title and desktop-only button */}
      <div className="flex items-center justify-center md:justify-between">
        {/* Section title */}
        <h2 className="text-center md:text-left text-[44px] text-white font-medium leading-[54px]">
          News
        </h2>

        {/* 'Show all news' button visible only on medium+ screens */}
        <button className="hidden md:inline-flex items-center justify-center w-[167px] h-[55px] px-4 font-bold text-white bg-primary rounded-full leading-none whitespace-nowrap">
          Show all news
        </button>
      </div>

      {/* Main content area - splits into column on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: large news image and descriptive content */}
        <div className="flex flex-col gap-8">
          {/* Featured news image */}
          <Image
            src={News1}
            alt="News Image 1"
            className="w-full md:w-[696px] h-[226px] md:h-[460px] object-cover rounded-2xl"
          />

          {/* Text content and news filter buttons below the image */}
          <div className="md:w-[696px] flex flex-col gap-4">
            {/* Buttons to filter or categorize news */}
            <NewsButtons />

            {/* Headline/summary of the news */}
            <h3 className="mt-2 text-lg md:text-[32px] text-white font-medium leading-10">
              We specialize in fostering effective partnerships with supportive
              companies to drive mutual success.
            </h3>

            {/* Description paragraph */}
            <p className="text-md md:text-lg text-[#646a69] leading-[26px]">
              We are committed to building effective partnerships with
              supporting companies, contributing to the advancement,
              development, and expansion of the sector through diverse
              capabilities, expertise, and technological innovation.
            </p>
          </div>
        </div>

        {/* Right column: list of smaller news cards */}
        <div className="w-full md:w-[530px] flex flex-col gap-8">
          {/* Render each news item using NewsCard component */}
          {newsData.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>

      {/* Mobile-only full-width button to view all news */}
      <div className="mt-6 md:hidden flex justify-center w-full">
        <button className="w-[351px] h-[55px] px-[24px] py-[16px] rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center gap-[10px]">
          View all news
        </button>
      </div>
    </section>
  );
};

export default News;
