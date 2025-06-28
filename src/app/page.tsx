import React from "react";
import {
  Navbar,
  Hero,
  Partners,
  AboutUs,
  Services,
  CompanyPhilisophy,
  News,
  BusinessPrices as Pricing,
  ClientQuota as Clients,
  Footer
} from "../Components/Pages";

const Home: React.FC = () => {
  return (
    <div >
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <AboutUs />
        <Services />
        <CompanyPhilisophy />
        <News />
       <Pricing />
<div className="my-12" />
     <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
