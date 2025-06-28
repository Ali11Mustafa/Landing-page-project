import Image, { StaticImageData } from 'next/image';

// Improved descriptive image names
import BmwLogo from '../../../../public/partners/bmw-partner.svg';
import HuaweiLogo from '../../../../public/partners/nasa-partner.svg'; // Double-check: this seems mislabeled
import CibLogo from '../../../../public/partners/CIB.png';
import NasaLogo from '../../../../public/partners/NASA.png';

const partnerLogos: StaticImageData[] = [BmwLogo, HuaweiLogo, CibLogo, NasaLogo];

interface PartnersItemProps {
  Logo: StaticImageData;
}

const PartnersItem: React.FC<PartnersItemProps> = ({ Logo }) => (
  <div className="w-[271px] h-[57px] md:w-[419px] md:h-[80px] flex items-center justify-center bg-white rounded-lg flex-shrink-0">
    <Image
      src={Logo}
      alt="Partner Logo"
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

const Partners: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-16 md:mt-5 items-center justify-center">
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
