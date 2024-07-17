'use client';

import React, { FormEvent, useState } from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
import Image from 'next/image';
import linkedin from "@/utils/linkedinn.svg"
import instagram from "@/utils/instagram.svg"
import { Spotlight } from '@/components/ui/Spotlight';
import emailjs from '@emailjs/browser'

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = 'service_1emhb2h'
    const templateId = 'template_ylz4lea'
    const publicKey = 'M8_EvgvewKWgR_gUT'

    const templateParams = {
      from_name:name,
      from_email:email,
      to_name: 'Divyanshu Sahu',
      message: message,
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.log('FAILED...', err);
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative ">
      {' '}

      <Spotlight
        className="top-0 left-0 md:left-60 md:-top-44 fixed"
        fill="grey"
      />
      <Spotlight
        className="md-left-96 left-60 top-52 md-top-96 fixed"
        fill="grey"
      />
     

      <div className='flex flex-wrap mx-auto z-10 text-center justify-center'>
        <div className='basis-2/5 flex flex-col space-y-6 sm:justify-start justify-center text-center'> 
          <h1 className="md:mt-6 mt-4 sm:mx-24 text-lg mx-10">We can do so much together.</h1>
          <p className='sm:mx-24 mx-10 text-lg'>Mail: <Link href="mailto:divyanshusahucoc@gmail.com">divyanshusahucoc@gmail.com</Link> </p>
          <p className='sm:mx-24 mx-10 text-lg'>Call: 6378526074</p>
          <p className='sm:mx-24 mx-10 text-lg'>Connect with me:</p>
        <div className="md:mt-6 mt-4 ml-5 justify-center flex flex-wrap space-x-4">
            <Link href={'https://www.linkedin.com/in/divyanshu-sahu-820467245/'}>
                <Button borderRadius='1.75rem' className="bg-white dark:bg-gray-950 text-black  dark:text-white border-neutral-200 dark:border-slate-900 flex justify-evenly">
                  <span className="text-lg ">LinkedIn </span>
                  <Image className="h-7 w-7  text-white" src={linkedin} alt=" "/>
                </Button>
            </Link>
            <Link href={'https://www.instagram.com/divyanshu_sahu07/'}>
                <Button borderRadius='1.75rem' className="bg-white dark:bg-gray-950 text-black  dark:text-white border-neutral-200 dark:border-slate-900 flex justify-evenly">
                  <span className="text-lg  ">Instagram </span>
                  <Image className="h-7 w-7   text-white" src={instagram} alt=" "/>
                </Button>
            </Link>
        </div>
        </div>
        <div className="max-w-xl mx-auto p-4 relative z-10">
          {' '}
          {/* Add relative and z-10 to bring content to the front */}
          <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-4 text-white">
            Send us a message🚀
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            I&apos;am here to help with any questions about myself ,
            my projects, or any other queries. Reach out and let me know how I can assist you
            in your journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-2 bg-neutral-950 placeholder:text-neutral-700"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-2 bg-neutral-950 placeholder:text-neutral-700"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-2 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            
          </form>
        </div>
      </div>
   
    </div>
  );
}

export default MusicSchoolContactUs;