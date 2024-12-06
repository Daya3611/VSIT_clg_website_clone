"use client"

import Slider from "./components/Slider";
import Courses, { Student_glimpses, Eminent, YT_videos, Company } from "./components/Hero";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";


export default function Home() {

  const [isOpen, setIsOpen] = useState(true);

    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 5000); 

        return () => clearTimeout(timer); 
    }, []);
  return (
    <div className="">
      
      <Slider/>
      <Courses/>
      <div>
            <Student_glimpses/>
            <div className='px-[90px]'>
                <Eminent/>
            </div>
            <YT_videos/>
            <Company/>
            
        </div>
        <div>
            <Popup isOpen={isOpen} onClose={togglePopup} />
        </div>
        
    </div>
  );
}
