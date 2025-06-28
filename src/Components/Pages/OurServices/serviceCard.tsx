import Image from 'next/image';
import { Service } from '../../types/services';

const ServiceCard = ({ title, description, icon }: Service) => (
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
      <h3 className="text-white font-semibold text-md md:text-[21px] leading-snug hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-[#646a69] text-sm mt-2">{description}</p>
    </div>
  </article>
);

export default ServiceCard;
