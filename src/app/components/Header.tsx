import React from 'react'
import Navbar, { Navbar2 } from './Navbar'

export default function Header() {
  return (
    <div>
      <header className='md:flex justify-between px-[100px] py-4 pt-3 md:h-full h-[100px] bg-red-700'>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-9 '>
          <img src="https://vsit.edu.in/images/VSIT-New-white.png" alt="" className='w-full h-full' />
          <div className='block md:hidden'>
            <Navbar/>
          </div>
        </div>
        <div className='pt-3 items-center md:block hidden '>
            <img src="https://vsit.edu.in/images/vsitright-min.png" alt=""  className='w-[500px]'/>
            <img src="https://vsit.edu.in/images/vsitmarathi.png" alt="" className='w-[350px] pl-3' />
        </div>
      </header>
      <div className='hidden lg:block'>
        <Navbar2/>
      </div>
      <div className='flex bg-gray-500'>
        <div className='bg-red-700 max-w-[350px] px-2 text-white font-bold text-center items-center py-2'>
          Announcement
        </div>
        <div className='w-full py-2'>
          <div className="marquee">
            <div className="marquee-content text-gray-100">Your announcement text here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

