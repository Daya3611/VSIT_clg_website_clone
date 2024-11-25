import { Building, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react'
import React from 'react'

// B.Sc.IT | B.Sc. Data Science | B.M.S | B.A.F | B.B.I | B.F.M | B.A. (M.M.C) | M.Sc.IT | M.Com(B & F) | M.Com(AA) | M.Com(Management) | M.A.(Entertainment,Media & Adevertising) | Ph.D

const course = [
    {
        name: 'B.Sc.IT',
        url: '/'
    },
    {
        name: 'B.Sc. Data Science',
        url: '/'
    },
    {
        name: 'B.M.S',
        url: '/'
    },
    {
        name: 'B.A.F',
        url: '/'
    },
    {
        name: 'B.B.I',
        url: '/'
    },
    {
        name: 'B.F.M',
        url: '/'
    },
    {
        name: 'B.A. (M.M.C)',
        url: '/'
    },
    {
        name: 'M.Sc.IT',
        url: '/'
    },
    {
        name: 'M.Com(B & F)',
        url: '/'
    },
    {
        name: 'M.Com(AA)',
        url: '/'
    },
    {
        name: 'M.Com(Management)',
        url: '/ee'
    },
    {
        name: 'M.A.(Entertainment,Media & Adevertising)',
        url: '/'
    },
    {
        name: 'Ph.D',
        url: '/dd'
    },
]

export default function Footer() {
  return (
    <footer >
        <div className='bg-neutral-700 p-6 px-[90px] grid grid-cols-4 gap-9 mt-3'>
            <div className='items-center'>
                <img src="https://vsit.edu.in/images/VSIT-New-white.png" alt="" />
                <p className='text-justify text-white mt-6'>Vidyalankar School of Information Technology is amongst the most popular colleges of the city offering undergraduate, postgraduate and doctoral programmes in IT, Commerce, Management and Mass Media. Vidyalankar School of Information Technology is a college affiliated to the University of Mumbai and approved by the Government of Maharashtra.</p>
            </div>
            <div className=''>
                <h2 className='text-2xl text-orange-500'>Constact Us</h2>
                <div className='mt-3'>
                    <p className='flex gap-3 text-white mb-2'> <Building className='w-[60px] h-[60px] text-yellow-500'/> Vidyalankar School of Information Technology ,Vidyalankar College Marg, Wadala (East), Mumbai - 400037</p>
                    <a href="tel:+912224104244" className='flex gap-3 text-white mb-2'> <PhoneCallIcon className='text-yellow-500' /> +91 22 2410 42 44</a>
                    <a href="mailto:principal@vsit.edu.in" className='flex gap-3 text-white mb-2'> <MailIcon className='text-yellow-500'/> principal@vsit.edu.in</a>
                    <a href="https://tinyurl.com/VSITDirection" className='flex gap-3 text-white mb-2'> <MapPin className='text-yellow-500'/> Get Directions</a>
                </div>
            </div>
            <div>
                <h2 className='text-2xl text-orange-500'>Academics</h2>
                {course.map((item,index) => (
                    <a href={item.url} key={index} className='text-lg text-gray-300 hover:text-yellow-500 mt-3'>{item.name}<span className='text-yellow-500 pr-2 pl-2'>|</span> </a>
                ))}
            </div>
            <div>
                <h2 className='text-2xl text-orange-500'>Website</h2>
                <div className='grid grid-cols-1'>
                    <a href="https://vsit.edu.in/" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Home</a>
                    <a href="https://vsit.edu.in/about-us" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>About Us</a>
                    <a href="https://vsit.edu.in/academics" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Student Life</a>
                    <a href="https://vsit.edu.in/admissions" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Admissions</a>
                    <a href="https://vsit.edu.in/" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Placements</a>
                    <a href="https://vsit.edu.in/about-us" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Alumni</a>
                    <a href="https://vsit.edu.in/academics" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Events & Updates</a>
                    <a href="https://vsit.edu.in/admissions" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Notice Board</a>
                    <a href="https://vsit.edu.in/academics" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Transcript</a>
                    <a href="https://vsit.edu.in/admissions" className='text-lg text-gray-300 hover:text-yellow-500 mt-1'>Contact Us</a>
                </div>
            </div>
        </div>
        <div className='w-full bg-red-700 text-center'>
            <p className='text-gray-50'>© 2024, All Rights Reserved By Vidyalankar School of Information Technology 
                <span className='pl-4'><a href="" className='hover:font-bold hover:text-yellow-300'>Terms & Conditions</a> | <a href="" className='hover:font-bold hover:text-yellow-300'>Privacy Policy</a></span>
                
            </p>
            <p className='bg-yellow-500'>
                Made by Daya3611 for practice purposes. This is not the official website of Vidyalankar School of Information Technology. Visit <a href="https://dayanandgawade.in" className='hover:font-bold hover:text-red-600'>dayanandgawade.in</a> for more information.
            </p>
        </div>
    </footer>
  )
}
// Website
// Home
// About Us
// Student Life
// Admissions
// Placements
// Alumni
// Events & Updates
// Notice Board
// Transcript
// Contact Us