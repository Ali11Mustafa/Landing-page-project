import React from "react";
import { aboutUsData } from "../../Data/about";
import type { AboutParagraphPart } from "../../types/About";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center px-4 py-12 md:px-0 md:h-[626px] min-h-[500px] overflow-hidden text-white"
      aria-labelledby="about-us-heading"
    >
      {/* Background image for small screens (mobile, tablets) */}
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-cover lg:hidden"
        style={{ backgroundImage: "url('/About/lines-bg-sm.svg')" }}
        role="presentation" // marks this div as decorative for assistive tech
        aria-hidden="true" // hides from screen readers
      />

      {/* Background image for large screens (desktop and above) */}
      <div
        className="absolute inset-0 hidden lg:block bg-left bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/About/lines-bg.svg')" }}
        role="presentation" // decorative element, not informative
        aria-hidden="true" // hidden from assistive technologies
      />

      {/* Main content container, positioned above background with z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl gap-6 text-center md:text-left">
        {/* Section heading */}
        <h2
          id="about-us-heading"
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          {aboutUsData.heading}
        </h2>

        {/* Paragraphs rendering */}
        {aboutUsData.paragraphs.map(({ id, parts }) => (
          <p
            key={id}
            className="text-base md:text-lg lg:text-xl leading-relaxed font-medium text-[#fffefe]"
          >
            {parts.map((part: AboutParagraphPart, idx: number) =>
              part.text ? (
                // Render normal text segment
                part.text
              ) : (
                // Render highlighted text segment with special styling
                <span key={idx} className="text-primary">
                  {part.highlight}
                </span>
              )
            )}
          </p>
        ))}

        {/* Action buttons container */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center w-full px-4 md:px-0">
          {aboutUsData.buttons.map(({ id, label, link }) => (
            <a
              key={id}
              href={link ?? "#"} // fallback to '#' if link is missing
              className="w-full md:w-[148px] h-[56px] text-primary text-lg font-bold bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white transition duration-300 flex items-center justify-center"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
