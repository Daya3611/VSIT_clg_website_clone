
import Header from "@/app/components/Header";
import Image from "next/image";
import Slider from "./components/Slider";
import Hero, { Hero2, Hero3, Hero4, Hero5 } from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      
      <Slider/>
      <Hero/>
      <div>
            <Hero2/>
            <div className='px-[90px]'>
                <Hero3/>
            </div>
            <Hero4/>
            <Hero5/>
            
        </div>
        
    </div>
  );
}
