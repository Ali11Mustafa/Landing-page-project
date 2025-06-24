import Image from 'next/image';
import BMW from '../../../public/partners/bmw-partner.svg';
import HUAWI from '../../../public/partners/nasa-partner.svg';
import CBI from "../../../public/partners/CIB.png"
import NASA from "../../../public/partners/NASA.png"


const logos = [BMW, HUAWI,CBI,NASA]; // Add more logos if you want

const PartnersItem = ({ Logo }) => (
  <div className="w-[355px] h-[88px] flex items-center justify-center bg-white rounded-lg flex-shrink-0">
    <Image
      src={Logo}
      alt="Partner Logo"
      className="max-w-[400px] max-h-[75px]"
    />
  </div>
);

const Partners = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-16 items-center justify-center">
      <h2 className="text-lg md:text-5xl text-white leading-[60px] font-medium">
        Our Partners
      </h2>

      <div className="overflow-hidden w-full py-6">
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {[...logos, ...logos].map((Logo, idx) => (
            <PartnersItem key={idx} Logo={Logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
