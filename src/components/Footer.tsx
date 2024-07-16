'use client'

import Link from "next/link"



export default function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Hi, I&apos;m Divyanshu Sahu, a passionate web developer with 1 year of experience in building innovative and effective digital solutions. Let&apos;s create something amazing together!
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col">
            <Link
              href="https://www.linkedin.com/in/divyanshu-sahu-820467245/"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sahu-divyanshu"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </Link>
            <Link
              href="https://www.instagram.com/divyanshu_sahu07/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Udaipur, Rajasthan, India</p>
         
          <p>Email:divyanshusahucoc@gmail.com</p>
          <p>Phone: 6378526074 </p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Portfolio . All rights reserved.</p>
    </footer>
    
  
  )
}
