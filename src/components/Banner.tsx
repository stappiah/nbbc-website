import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/banner.jpg'

export default function Banner() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src={bannerImage} 
          alt="Worship Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-light mb-4 sm:mb-6">
            Experience
            <div className="font-bold mt-2">
              REAL LOVE. REAL PEOPLE.<br className="hidden sm:block" />
              REAL CHANGE.
            </div>
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join us in-person or online every Sunday at 10AM!</p>
          
          <Link 
            to="/watch" 
            className="inline-flex items-center gap-2 bg-[#0D92F4] text-white px-6 py-3 rounded-full hover:bg-[#FFB200] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            JOIN SERVICE ONLINE
          </Link>
        </div>
      </div>
    </section>
  )
}