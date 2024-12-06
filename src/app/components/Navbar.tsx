import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, PlusIcon } from 'lucide-react'
// import { PlusIcon } from 'lucide-react'
const list = [
  {
    name:'Admission',
    link:'ssdsd'
  },
  {
    name:'Alumni',
    link:'ssdsd'
  },
  {
    name:'Events@VSIT',
    link:'ssdsd'
  },
  {
    name:'Transcript',
    link:'ssdsd'
  },
  {
    name:'Notice Board',
    link:'ssdsd'
  },
  {
    name:'Contact Us',
    link:'ssdsd'
  },
  {
    name:'Results',
    link:'/result'
  },
  {
    name:'Payment',
    link:'ssdsd'
  },
  {
    name:'Careers@VSIT',
    link:'ssdsd'
  }
]

export default function Navbar() {
  return (
    <div>
       <div className='hidden md:block'>
        <Sheet>
            <SheetTrigger className='flex gap-1'>More <PlusIcon/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle>Title of sheet</SheetTitle> */}
                <SheetDescription>
                  
                  {list.map((item,index) => (
                    <p key={index} className='text-xl text-black before:content-[""] hover:before:left-auto hover:before:right-0 hover:before:duration-300 before:h-[1.5px] before:bg-red-600 before:w-0 hover:before:w-full before:transition-all before:absolute relative before:left-0 before:-bottom-0.5 py-1 hover:font-bold hover:text-red-600'><a href={item.link}>{item.name}</a></p>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
       </div>

       {/* <div className='block md:hidden'>
        <Sheet>
            <SheetTrigger className='flex gap-1'> <MenuIcon/> </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                
                <SheetDescription>
                  
                  {list.map((item,index) => (
                    <p key={index} className='text-lg text-black before:content-[""] hover:before:left-auto hover:before:right-0 hover:before:duration-300 before:h-[1.5px] before:bg-red-600 before:w-0 hover:before:w-full before:transition-all before:absolute relative before:left-0 before:-bottom-0.5 py-1 hover:font-bold hover:text-red-600 text-left'><a href={item.link}>{item.name}</a></p>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
       </div> */}

    </div>
  )
}

export function Navbar2() {
  return(
    <div className='flex items-center text-center justify-evenly bg-neutral-800 text-white'>
        <div className='flex items-center text-center gap-5 text-lg py-2'>
          <a href='' className='navbar-main'>Home</a>
          <a href='' className='navbar-main'>About Us</a>
          <a href='' className='navbar-main'>Academics</a>
          <a href='' className='navbar-main'>Students@VSIT </a>
          <a href='' className='navbar-main'>Placements</a>
          <a href='' className='navbar-main'>Happenings@VSIT</a>
          <div className='navbar-main '><Navbar/> </div>
        </div>
    </div>
  )
}
