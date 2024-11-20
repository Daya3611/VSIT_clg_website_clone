import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Link from 'next/link';
  
const cource = [
    {
        name:'B.Sc.(Information Technology)'
    },
    {
        name:'B.Sc. (Data Science)'
    },
    {
        name:'B.Com.(Accounting & Finance)'
    },
    {
        name:'B.M.S.'
    },
    {
        name:'B.Com.(Banking & Insurance)'
    },
    {
        name:'B.Com.(F.M.)'
    },
    {
        name:'B.A.(M.M.C)'
    },
    {
        name:'M.Sc.(Information Technology)'
    },
    {
        name:'M.Com.(Banking & Finance)'
    },
    {
        name:'M.Com.(Advance Accountancy)'
    },
    {
        name:'M.Com. (Business Management)'
    },
    {
        name:'M.A. (Entertainment, Media & Advertising)'
    },
    {
        name:'Ph.D. (Commerce)'
    },
    {
        name:'Business Economics'
    },
]

const features = [
    { title: 'Classroom Experience', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/classroom.jpg' },
    { title: 'Projects', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Modern%20Labs.jpg' },
    { title: 'Seminars / Exhibitions', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Project.jpg' },
    { title: 'Campus Liveliness', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Seminars.jpg' },
    { title: 'Green Campus', color: 'bg-green-600', img: 'https://vsit.edu.in/images/Glimpses/Campus_liveliness.jpg' },
    { title: 'Technology enabled campus', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Green.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Technology.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/National%20Anthem.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/Art&Culture.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/sports.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/nss.jpg' },
    { title: 'National Anthem', color: 'bg-red-600', img: 'https://vsit.edu.in/images/Glimpses/ccd.jpg' },
        
    
  ];


export default function Hero() {
  return (
    <section>
        <div className=''>
            <h2 className='text-4xl text-center mt-9 font-bold'><span className='text-red-500'>Courses</span> Offered</h2>
            <div className='grid grid-cols-3 px-[90px] gap-3 mt-4'>
                {cource.map((item,index) => (
                    <p className='bg-yellow-400 p-5 rounded-lg gap-5 text-center text-lg font-bold hover:text-red-600 hover:bg-yellow-300' key={index}>{item.name}</p>
                    
                ))}
            </div>
        </div>
        
    </section>
  )
}

export function Hero2() {
    return(
        <section>
            <div>
                <h2 className='text-4xl text-center mt-[60px] font-bold'><span className='text-red-500'>Glimpses of</span> Student Life</h2>
                <p className='text-justify px-[90px] mt-2'>Vidyalankar offers a wide spectrum of co-curricular, extracurricular, and athletic opportunities in addition to academics, which stands on the pillars of many Student Clubs and Student Councils. The synaesthesia of sports, culture, literary and technical forums at VSIT harness the creative potential of students keeping in view the tastes of the Millennial Generation that shall equip the students as successful professionals and future global leaders.</p>
            </div>
            <div>
            <div className="grid grid-cols-4 gap-3 p-4 px-[90px]">
                

                {features.map((feature, index) => (
                <div
                    key={index}
                    className={`${feature.color} text-white p-4 relative group h-[200px] rounded-xl`}
                    style={{ backgroundImage: `url(${feature.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <span className="text-lg font-semibold">{feature.title}</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export function Hero3() {
    return(
        <section>
            <div>
                <h2 className='text-4xl text-center mt-[60px] font-bold'><span className='text-red-500'>Eminent</span> Personalities on Campus</h2>
                <p className='text-justify px-[320px] mt-4'>Specially invited talks on the campus by distinguished stalwarts and Padma Awardees help to promote a global outreach, inspire and enrich young minds.</p>
            </div>
            <div>
            <Carousel>
                <CarouselContent className='mt-4'>
                    <CarouselItem className='basis-1/3 px-4'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='basis-1/3'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on "Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='basis-1/3'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on "Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='basis-1/3'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on "Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='basis-1/3'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on "Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>

                    <CarouselItem className='basis-1/3'>
                        <div className='items-center'>
                            <img src="https://vsit.edu.in/images/eminent/Dr.shashikumar%20chitre.jpg" alt="" className='w-[350px] h-[300px] items-center text-center' />
                            <a href="" className='text-center'>
                                <h2 className='text-3xl'>Dr. Shashikumar Chitre</h2>
                                <p className='font-bold text-lg'>Padma Bhushan</p>
                                <p className='text-justify px-5'>Indian Mathematician and Astrophysicist addressed VSITians on "Origin of Life in the Universe</p>
                            </a>
                        </div>
                    </CarouselItem>
                    
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>

            </div>
        </section>
    )
}

export function Hero4() {
    return(
        <section>
            <div>
                <h2 className='text-4xl text-center mt-[60px] font-bold'><span className='text-red-500'>VSIT</span> Visuals</h2>
            </div>
            <div className='flex gap-5 items-center text-center px-[230px]'>
                <Link href={'https://www.youtube.com/embed/lNtcINGsKAU'}>
                    <img src="https://vsit.edu.in/images/Video%20Gallery/campus_tour.jpg" alt="" className='h-[300px] object-cover rounded-xl'/>
                    
                </Link>
                <Link href={'https://www.youtube.com/embed/QOPeRkkawyM'}>
                    <img src="https://vsit.edu.in/images/Video%20Gallery/back_campus.JPG" alt="" className='h-[300px] object-contain rounded-xl'/>
                </Link>
            </div>
        </section>
    )
}

const company = [
    {   
        url:'https://vsit.edu.in/images/placement/CL1.jpeg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL2.jpg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL3.jpg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL4.png',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL5.png',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL6.png',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL7.jpg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL8.png',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL9.jpg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL10.png',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL11.jpg',
    },
    {   
        url:'https://vsit.edu.in/images/placement/CL12.png',
    },
]

export function Hero5(){
    return(
        <section>
            <div>
                <h2 className='text-4xl text-center mt-[60px] font-bold'>We place students in top most companies</h2>
            </div>
            <div className='grid grid-cols-6 px-[90px] mt-[60px] gap-4 items-center '>
                {company.map((item,index) => (
                    <img src={item.url} alt="" key={index} />
                ))}
            </div>
        </section>
    )
}