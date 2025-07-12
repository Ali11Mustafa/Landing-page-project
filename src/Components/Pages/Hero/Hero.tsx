"use client"; // Enable client-side rendering for this component
import Image from "next/image"; // Next.js optimized Image component
import React from "react";

// Importing SVG images from the public folder
import RightHeroTopImg from "../../../../public/Hero/right-hero.svg";
import RightHeroBottomImg from "../../../../public/Hero/right-hero-bottom.svg";
import LeftHeroBelowTextImg from "../../../../public/Hero/left-hero-below-texts.svg";

const Hero: React.FC = () => {
  // Tailwind CSS classes for gradient text styling
  const gradientText =
    "bg-gradient-to-br from-primary to-[#4b2a4e] to-90% text-transparent bg-clip-text";

  // Base Tailwind CSS classes for buttons to keep consistent styling
  const buttonBase =
    "flex items-center justify-center text-md font-bold rounded-full h-[55px]";

  return (
    // Main section container: responsive flex layout, spacing, min-height set
    <section className="w-full mb-2 px-3 mt-10 md:px-0 md:pl-22 flex flex-col md:flex-row justify-between overflow-hidden min-h-[600px] md:h-[700px]">
      {/* Left Content: text and buttons */}
      <div className="max-w-[632px] flex flex-col justify-start gap-4">
        {/* Heading with responsive font sizes and gradient emphasis */}
        <h1 className="mt-5 text-center md:text-left text-white text-[28px] md:text-[50px] font-semibold leading-[36px] md:leading-[63px]">
          Transform your business with our{" "}
          <span className="text-primary">
            <span className={gradientText}>Creative</span> Marketing{" "}
            <span className={gradientText}>Solutions!</span>
          </span>
        </h1>

        {/* Description paragraph with responsive text size and color */}
        <p className="text-base md:text-lg text-[#fffefe] text-center md:text-left font-medium leading-relaxed">
          Welcome to Focus Marketing Solutions! We&apos;re a creative team
          dedicated to driving your business forward with innovative marketing
          strategies. From digital marketing to social media management,
          we&apos;re here to help you succeed. Let&apos;s build something
          extraordinary together.
        </p>

        {/* Buttons container with responsive layout */}
        <div className="flex flex-col md:flex-row gap-3 mt-3">
          {/* Primary Join Us button */}
          <button
            className={`${buttonBase} bg-primary text-white md:w-[102px]`}
          >
            Join us
          </button>
          {/* Secondary Contact Us button with border and hover effects */}
          <button
            className={`${buttonBase} border border-white text-white hover:bg-white hover:text-black transition md:w-[132px]`}
          >
            Contact us
          </button>
        </div>

        {/* Decorative background image under text - shown only on medium screens and larger */}
        <div
          className="w-[488px] h-[300px] mt-[110px] object-cover brightness-50 rounded-2xl mask-fade-bottom hidden md:block"
          style={{
            backgroundImage: `url(${LeftHeroBelowTextImg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Right Images container - only visible on medium screens and up */}
      <div className="hidden md:flex flex-col gap-10">
        {/* Top right hero image with fixed size and rounded corners */}
        <Image
          src={RightHeroTopImg}
          alt="Hero Top Right Image"
          width={535}
          height={445}
          className="w-[535px] h-[445px] object-cover rounded-2xl"
        />
        {/* Bottom right hero image as a div with background image and fade mask */}
        <div
          className="w-[312px] h-[394px] rounded-2xl bg-cover bg-center mask-fade-bottom"
          style={{ backgroundImage: `url(${RightHeroBottomImg.src})` }}
        />
      </div>
    </section>
  );
};

export default Hero;
