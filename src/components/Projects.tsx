'use client'
import {InfiniteMovingCards} from './ui/infinite-moving-cards'

export default function Projects() {

    const Projects = [
        {
          description:
            'FrontendStack is a project where we create reusable UI components using React JS and TailwindCSS, featuring a website with livepreviews, codesnippets, and a modern theme. All components are reusable, with detailed steps to run them locally, and are building blocks for any website, enabling fast development and easy customization',
          name: 'FrontendStack',
          technologies: 'ReactJs , TailwindCSS , JavaScript , Framer Motion ',
          slug:'https://frontendstack.vercel.app/',
        },
        {
          description:
            "Blog website is project with features like login Authentication , Add Post , Edit post , Delete Post and windowing (Pagination) , debounce (in search functionality) . Backend is Powered by appwrite and most of code are reusable ",
          name: 'Blog Website',
          technologies: 'ReactJs , Tailwind CSS , JavaScript , Appwrite Backend ',
          slug:'https://blog-two-theta-19.vercel.app/',
        },
        {
          description:
            "Developed a YouTube backend API using JavaScript, Node.js, Express, and MongoDB, with integration of Cloudinary for third-party video storage and MongoDB Atlas for database management. This tech stack ensures efficient handling of video uploads, storage, and retrieval while offering scalability and robust performance.",

          name: 'MyTube',
          technologies: 'JavaScript,ReactJs , Node.js, Express, MongoDB ,Cloudinary ',
          slug:'https://github.com/sahu-divyanshu/Backend',
        },

      ];

  return (
    <div className='h-[40rem] w-full bg-black bg-dot-white/[0.3] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center -mt-7 mb-12 z-10'>Main Projects</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl h-full'>
         
             <InfiniteMovingCards items={Projects} direction='right' speed='slow'/>
 
        </div>
      </div>
    </div>
  )
}
