import Image from "next/image";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";

export default function Home() {
  return (
    <div >
      <h1>Hello there!</h1>
      <Navbar/>
      <h1>---------</h1>
      <Footer/>
      
    </div>
  );
}
