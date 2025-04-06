'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/', hoverColor: 'hover:text-blue-400' },
    { name: 'About', href: '/About', hoverColor: 'hover:text-blue-400' },
    { name: 'Skills', href: '/Skills', hoverColor: 'hover:text-blue-400' },
    { name: 'Projects', href: '/projects', hoverColor: 'hover:text-blue-400' },
    { name: 'Team', href: '/Team', hoverColor: 'hover:text-blue-400' },
    { name: 'Contact', href: '/Contact', hoverColor: 'hover:text-blue-400' },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700/50 fixed w-full z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center mb-2 md:mb-0 hover:opacity-90 group transition-all duration-300">
            <div className="relative">
              <Image
                width={40}
                height={40}
                src="https://media.licdn.com/dms/image/v2/D5603AQE-lhyBUpPYQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710336293886?e=1733356800&v=beta&t=2c6MXB_Pc29TBv8o5Mw47jdBWxwq9qM1MYii1aq-qkw"
                alt="Hamza Rafique's profile picture"
                className="w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110 ring-2 ring-blue-400/50"
              />
              <div className="absolute -inset-1  rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>
            <span className="ml-2 text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition duration-300 transform group-hover:translate-x-1">
              Hamza Rafique
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 top-4 p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-8`}>
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                className={`relative text-gray-300 font-medium text-base md:text-lg hover:text-white transition-all duration-300 group
                  ${pathname === item.href ? 'text-blue-400' : ''}
                `}
                href={item.href}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
                {pathname === item.href && (
                  <span className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm" />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 flex-col md:flex-row`}>
            <button 
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              aria-label="Login"
            >
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative">Login</span>
            </button>
            <button 
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg group focus:outline-none focus:ring-2 focus:ring-violet-500/50 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              aria-label="Sign Up"
            >
              <span className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
