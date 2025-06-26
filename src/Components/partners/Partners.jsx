import Image from 'next/image';

// Improved descriptive image names
import BmwLogo from '../../../public/partners/bmw-partner.svg';
import HuaweiLogo from '../../../public/partners/nasa-partner.svg'; // Double-check: this seems mislabeled
import CibLogo from '../../../public/partners/CIB.png';
import NasaLogo from '../../../public/partners/NASA.png';

const partnerLogos = [BmwLogo, HuaweiLogo, CibLogo, NasaLogo];

const PartnersItem = ({ Logo }) => (
  <div className="w-[419px] h-[80px] flex items-center justify-center bg-white rounded-lg flex-shrink-0">
    <Image
      src={Logo}
      alt="Partner Logo"
      className="max-w-[419px] max-h-[88px]"
    />
  </div>
);

const Partners = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-16 mt-5 items-center justify-center">
      <h2 className="text-lg md:text-5xl text-white leading-[60px] font-medium">
        Our Partners
      </h2>

      <div className="overflow-hidden w-full py-6">
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {[...partnerLogos, ...partnerLogos].map((Logo, idx) => (
            <PartnersItem key={idx} Logo={Logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
