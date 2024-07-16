'use client'

import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

export default function Skills() {

    const featuredskills = [
        {
          title: 'ReactJS ',
          description:
            '⭐⭐⭐⭐⭐',

        },
        {
          title: 'Tailwind CSS',
          description:
            '⭐⭐⭐⭐',
 
        },
        {
          title: 'JavaScript',
          description: '⭐⭐⭐⭐',
        },

        {
          title: 'Express JS',
          description:
            '⭐⭐⭐',
    
        },
        // Added two more skills
        {
          title: 'Mongo DB',
          description:
            '⭐⭐⭐',
    
        },
        {
          title: 'DSA',
          description:
            '⭐⭐⭐⭐',
        },
        {
          title: 'C++',
          description: '⭐⭐⭐⭐',
        },
        {
          title: 'SQL',
          description: '⭐⭐⭐',
        },
        {
          title: 'Python',
          description: '⭐⭐⭐',
        },
      ];

  return (
    <div className='p-12 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-3xl font-bold text-center my-8 z-10'>Featured Skills</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'></p>
        </div>
        <div className='mt-8'>
            <HoverEffect items={featuredskills.map(skills=>(
                {
                    title:skills.title,
                    description:skills.description,
                }
            ))}/>
        </div>

      </div>
    </div>
  )
}
