
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center p-4">

        {/* Logo Section */}
        <a className="flex items-center mb-2 md:mb-0">
          <Image
            width={40}
            height={40}
            src="https://media.licdn.com/dms/image/v2/D5603AQE-lhyBUpPYQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710336293886?e=1733356800&v=beta&t=2c6MXB_Pc29TBv8o5Mw47jdBWxwq9qM1MYii1aq-qkw"
            alt="logo"
            className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <span className="ml-2 text-lg md:text-2xl text-white font-bold transition duration-300 transform hover:translate-x-1">
            Hamza Rafique
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center mt-2 md:mt-0 space-x-3">
          {[
            { name: 'Home', href: '/', hoverColor: 'hover:text-red-500' },
            { name: 'About', href: './About', hoverColor: 'hover:text-green-500' },
            { name: 'Skills', href: './Skills', hoverColor: 'hover:text-blue-500' },
            { name: 'Projects', href: './projects', hoverColor: 'hover:text-purple-500' },
            { name: 'Team', href: './Team', hoverColor: 'hover:text-purple-500' },
            { name: 'Contact', href: './Contact', hoverColor: 'hover:text-yellow-500' },
            { name: 'Privacy Policy', href: '../Privacy_Privacy', hoverColor: 'hover:text-orange-500' },
          ].map((item, index) => (
            <Link
              key={index}
              className={`text-white font-bold text-base md:text-lg ${item.hoverColor} transition duration-300 relative`}
              href={item.href}
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2 mt-2 md:mt-0">
          <button className="bg-blue-500 text-white font-bold text-base md:text-lg px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
            Login
          </button>
          <button className="bg-orange-500 text-white font-bold text-base md:text-lg px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
