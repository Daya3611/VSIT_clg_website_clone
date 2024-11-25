"use client"

import Slider from "./components/Slider";
import Hero, { Hero2, Hero3, Hero4, Hero5 } from "./components/Hero";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";


export default function Home() {

  const [isOpen, setIsOpen] = useState(true);

    // Toggle the popup visibility
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Optionally, if you want the popup to close automatically after a certain period (e.g., 5 seconds)
    useEffect(() => {
        // Automatically close after 5 seconds
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 5000); // 5000ms = 5 seconds

        return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }, []);
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
        <div>
            <Popup isOpen={isOpen} onClose={togglePopup} />
        </div>
        
    </div>
  );
}
