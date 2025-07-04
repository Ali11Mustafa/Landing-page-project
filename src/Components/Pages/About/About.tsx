import React from "react";
import { aboutUsData } from "../../Data/about";
import type { AboutParagraphPart } from "../../types/About";

const AboutUs: React.FC = () => {
  return (
    <section id="about"
      className="relative flex items-center justify-center px-4 py-12 md:px-0 md:h-[626px] min-h-[500px] overflow-hidden text-white"
      aria-labelledby="about-us-heading"
    >
      {/* Background for small screens */}
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-cover lg:hidden"
        style={{ backgroundImage: "url('/About/lines-bg-sm.svg')" }}
        role="presentation"
        aria-hidden="true"
      />

      {/* Background for large screens */}
      <div
        className="absolute inset-0 hidden lg:block bg-left bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/About/lines-bg.svg')" }}
        role="presentation"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl gap-6 text-center md:text-left">
        {/* Section Heading */}
        <h2
          id="about-us-heading"
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          {aboutUsData.heading}
        </h2>

        {/* Paragraphs with optional highlighted parts */}
        {aboutUsData.paragraphs.map(({ id, parts }) => (
          <p
            key={id}
            className="text-base md:text-lg lg:text-xl leading-relaxed font-medium text-[#fffefe]"
          >
            {parts.map((part: AboutParagraphPart, idx: number) =>
              part.text ? (
                // Normal text part
                part.text
              ) : (
                // Highlighted text part
                <span key={idx} className="text-primary">
                  {part.highlight}
                </span>
              )
            )}
          </p>
        ))}

        {/* Action Buttons */}
       <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center w-full px-4 md:px-0">
  {aboutUsData.buttons.map(({ id, label, link }) => (
    <a
      key={id}
      href={link ?? "#"}
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
