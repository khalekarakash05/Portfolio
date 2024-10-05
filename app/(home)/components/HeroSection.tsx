import {  MovingBorder, MovingBorderBtn } from '@/components/ui/moving-border'
// import { Link } from 'react-scroll';
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const HeroSection = () => {
  return (
    <div className='min-h-[60vh] mt-24 lg:mt-24 lg:px-16 flex flex-col-reverse space-y-12 gap-y-20 lg:space-y-0 lg:gap-y-0 lg:flex-row items-center justify-between '>
        <div className='space-y-10  text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold' 
            >Nice to meet you ! 👋 <br></br> 
                <span
                    className='underline underline-offset-8 decoration-green-500'
                >{"I'm Akash."}</span>
            </h1>

            <p className='md:w-96 text-lg text-gray-300'>
                {"Based in Pune, India. I'm a MERN stack developer Passionate about building web applications and solving problems."}
            </p>

            <Link 
            href="https://drive.google.com/file/d/1Mf4KLIcdEXBJnuT--tA-9qU-hrFG7VI8/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='inline-block group'
            >
                <Title text='Check Resume 📄' className='relative p-4' width='48'></Title>
            </Link>
        </div>



        {/* right side */}
        <div className='relative'>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative '>

                <div className='flex gap-3 translate-x-8'>
                    <div className=' w-32 h-32 rounded-2xl bg-green-500'></div>

                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>

                <div className='flex gap-3 -translate-x-8'>
                    
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>

                    <div className=' w-32 h-32 rounded-full bg-green-500'></div>
                </div>

                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>


            </div>

            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                <MovingBorderBtn borderRadius='0.5rem'
                className='p-3 font-semibold'>
                    {/* <a>📢 Available to Work</a > */}
                    <Link
                    href="#contact"
                    className=" text-white  rounded cursor-pointer"
                    >
                    📢 Available to Work
                    </Link>
                </MovingBorderBtn>
            </div>
        </div>
    </div>
  )
}

export default HeroSection