import Image from 'next/image';

import VideoMaking from '../../../public/ourServices/VideoMaking.png';
import SocialMediaMarketing from '../../../public/ourServices/SocialMediaMarketing.png';
import MarketingStrategy from '../../../public/ourServices/MarketingStrategy.png';
import EmailMarketing from '../../../public/ourServices/EmailMarketing.png';
import ContentWriting from '../../../public/ourServices/ContentWriting.png';
import Branding from '../../../public/ourServices/Branding.png';

const services = [
  {
    title: 'Video Making',
    description: 'Random Content',
    icon: VideoMaking,
  },
  {
    title: 'Branding',
    description: 'Random Content to fill the blank content',
    icon: Branding,
  },
  {
    title: 'Marketing Strategy',
    description: 'Random Content to fill the blank content',
    icon: MarketingStrategy,
  },
  {
    title: 'Email Marketing',
    description: 'Random Content',
    icon: EmailMarketing,
  },
  {
    title: 'Social Media Managing',
    description: 'Random Content to fill the blank content',
    icon: SocialMediaMarketing,
  },
  {
    title: 'Content Writing',
    description: 'Random Content to fill the blank content',
    icon: ContentWriting,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <article className="flex flex-col items-center text-center w-[152px] md:w-[384px] gap-6">
    <div className="bg-[#f1f1f1] rounded-md flex items-center justify-center w-[118px] h-[118px] md:w-[152px] md:h-[152px]">
      <div className="bg-primary rounded-full flex items-center justify-center w-[111px] h-[111px] md:w-[143px] md:h-[143px]">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={72}
          height={72}
          className="object-contain"
          priority
        />
      </div>
    </div>
    <div className="max-w-[280px]">
  <h3 className="text-white font-semibold text-md md:text-[21px] leading-snug hover:text-primary hover:font-bold  transition-all duration-300 ease-in-out">
  {title}
</h3>

      <p className="text-[#646a69] text-sm mt-2">{description}</p>
    </div>
  </article>
);

const Services = () => (
  <section
    aria-labelledby="services-heading"
    className="px-4 py-20 md:py-20 flex flex-col items-center"
  >
    <header className="text-center max-w-3xl mb-16">
      <h2
        id="services-heading"
        className="text-2xl md:text-5xl font-bold text-white"
      >
        Our Services
      </h2>
      <p className="mt-4 text-lg text-[#646a69]">
        Transforming your online presence with innovative digital strategies.
      </p>
    </header>

    <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 w-full max-w-7xl">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default Services;
