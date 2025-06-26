import Image from "next/image";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/Hero/Hero";
import Partners from "@/Components/partners/Partners";
import Services from "@/Components/OurServices/Services";
import CompanyPhilisophy from "@/Components/companyPhilisophy/CompanyPhilophy";
import AboutUs from "../../src/Components/About/About";
import News from "@/Components/News/News";
import Pricing from "@/Components/BusinessPrices/Prices";
import Clients from "../Components/ClientQuota/QuotaCarousel"
export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Partners/>
      <AboutUs/>
      <Services/>
      <CompanyPhilisophy/>
      <News />
       <h1>-</h1>
         <h1>-</h1>
         <h1>-</h1>
      <Pricing/>
      <Clients/>
      
      
      <h1>---------</h1>
      <Footer/>
      
    </div>
  );
}
