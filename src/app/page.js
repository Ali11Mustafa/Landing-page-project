import Image from "next/image";
import Navbar from "../Components/Pages/Layout/Navbar";
import Footer from "../Components/Pages/Layout/Footer"
import Hero from "../Components/Pages/Hero/Hero";
import Partners from "../Components/Pages/partners/Partners";
import Services from "../Components/Pages/OurServices/Services";
import CompanyPhilisophy from "../Components/Pages/companyPhilisophy/CompanyPhilophy";
import AboutUs from "../Components/Pages/About/About";
import News from "../Components/Pages/News/News";
import Pricing from "../Components/Pages/BusinessPrices/Prices";
import Clients from "../Components/Pages/ClientQuota/QuotaCarousel"
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
