import Image, { StaticImageData } from "next/image";
// Import Next.js Image component and StaticImageData type for typed image imports and it's typescript type

// Import partner logos from public folder
// Note: HuaweiLogo seems to import NASA partner image, double-check this path or naming
import BmwLogo from "../../../../public/partners/bmw-partner.svg";
import HuaweiLogo from "../../../../public/partners/nasa-partner.svg"; // Possible mislabeling, confirm actual image
import CibLogo from "../../../../public/partners/CIB.png";
import NasaLogo from "../../../../public/partners/NASA.png";

// Array of partner logo images typed as StaticImageData for type safety
const partnerLogos: StaticImageData[] = [
  BmwLogo,
  HuaweiLogo,
  CibLogo,
  NasaLogo,
];

// Props interface for PartnersItem component expects a single Logo image
interface PartnersItemProps {
  Logo: StaticImageData;
}

// Functional component that renders an individual partner logo inside a styled container
const PartnersItem: React.FC<PartnersItemProps> = ({ Logo }) => (
  //React.FC is typescript type
  <div
    className="w-[271px] h-[57px] md:w-[419px] md:h-[80px] flex items-center justify-center bg-white rounded-lg flex-shrink-0"
    // Fixed width and height for logo container, responsive sizes for md screens and above
    // Flexbox centers the logo, white background and rounded corners for card-like appearance
    // flex-shrink-0 prevents shrinking when inside flex containers
  >
    <Image
      src={Logo}
      alt="Partner Logo" // Descriptive alt text for accessibility
      className="max-w-full max-h-full object-contain"
      // Ensure the logo fits within container without distortion
    />
  </div>
);

// Main Partners component that displays a marquee of partner logos
const Partners: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-16 md:mt-5 items-center justify-center">
      {/* Section heading with responsive font size and styling */}
      <h2 className="text-lg md:text-5xl text-white leading-[60px] font-medium">
        Our Partners
      </h2>

      {/* Container for the scrolling logos */}
      <div className="overflow-hidden w-full py-6">
        {/* Inner flex container with marquee animation and nowrap to scroll logos horizontally */}
        <div className="flex animate-marquee whitespace-nowrap gap-6">
          {/* 
            Duplicate the logos array to create a continuous scrolling effect in the marquee
            Map over the combined array and render a PartnersItem for each logo.

            we display each item then apply the marque on which we defined on global css
          */}

          {[...partnerLogos, ...partnerLogos].map((Logo, idx) => (
            <PartnersItem key={idx} Logo={Logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
