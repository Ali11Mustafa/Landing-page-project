import Image from "next/image";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/Hero/Hero";
import Partners from "@/Components/partners/Partners";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Partners/>
      
      <h1>---------</h1>
      <Footer/>
      
    </div>
  );
}
