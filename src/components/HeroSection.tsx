import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {Button} from './ui/moving-border'
import ds from '../utils/ds.jpeg'

import Image from 'next/image'
import linkedin from "../utils/linkedin.svg"
import github from "../utils/github.svg"

export default function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md bg-black flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
       <Spotlight
        className="top-0 left-0 md:left-60 md:-top-44 fixed"
        fill="grey"
      />
      <Spotlight
        className="md-left-96 left-60 top-52 md-top-96 fixed"
        fill="grey"
      />
      <div className='p-4 relative z-10 w-full text-center'>

      <Image className="h-32 w-32 mt-20 object-cover rounded-full m-auto" src={ds} alt="logo image" />

        <h1 className='text-2xl md:my-6 my-2'>Hi I&apos;m Divyanshu😎</h1>
        <h1 className=' md:my-6 my-2 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'> Webapps Developer</h1>
        <p className='md:mt-4 font-normal md:text-2xl text-lg text-neutral-300 max-w-lg mx-auto'>i&apos;ve completed MERN Stack, Specialised in React JS and Demonstrated discipline by successfully completing 3 rounds of the 100 Days of Code challenge on LinkedIn</p>
        <div className="md:mt-6 mt-4 justify-center flex flex-wrap space-x-4">
            <Link href={'https://www.linkedin.com/in/divyanshu-sahu-820467245/'}>
                <Button borderRadius='1.75rem' className="bg-gray-950 text-white border-slate-900 flex justify-evenly">
                  <span className="text-lg ">LinkedIn </span>
                  <Image className="h-7 w-7  text-white" src={linkedin} alt=" "/>

                </Button>
            </Link>
            <Link href={'https://github.com/sahu-divyanshu'}>
                <Button borderRadius='1.75rem' className="bg-gray-950 text-white border-slate-900 flex justify-evenly">
                  <span className="text-lg ml-2 ">Github </span>
                  <Image className="h-10 w-10   text-white" src={github} alt=" "/>

                </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}
