import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

const img = [
    {
        url:'https://vsit.edu.in/images/Banner%20Slider/STTPGenZ.png'
    },
    {
        url:'https://vsit.edu.in/images/Banner%20Slider/Alumni_League2023.png'
    },
    {
        url:'https://vsit.edu.in/images/Banner%20Slider/VTalkies_banner.jpg'
    }
]
  
export default function Slider() {
  return (
    <section>
        <Carousel>
            <CarouselContent className=''>
                {img.map((item,index)=> (
                    <CarouselItem className='rounded-3xl' key={index}><img src={item.url} alt=""  className='h-[500px] w-[100%] items-center object-fill px-3 py-3 rounded-[35px]' loading='lazy'/></CarouselItem>
                ))}
                
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>

    </section>
  )
}


