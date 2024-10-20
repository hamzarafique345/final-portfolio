"use client"
import React from 'react'
import Typewriter from "typewriter-effect";
import Image from 'next/image';
export default function MyHome () {
  return (
    <div>

      {/*Hero Section */}
      
    <section  className="0"  >
    <div className="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif text-gray-900">
          Hi,<br />
          I am Hamza Rafique
          <div>
            <h1 className="title-font  font-black font-serif  sm:text-4xl text-3xl mb-4 font-bold text-cyan-500">
              <Typewriter
                options={{
                  strings: ["Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </h1>
        <p className="mb-8 leading-relaxed font-black text-blue-900">
          Hello Everyone I am a Tech Enthusiast | Learning HTML, CSS,
          typescript, React, and Next.Js | Enrolled in Governor Sindh
          Initiative for Gen AI, Web3 and Metaverse
        </p>
        <div className="flex justify-center space-x-4">


       
<button
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
>
  <a href='https://www.linkedin.com/in/hamza-rafiq-5120752b8/'>Hire Me</a>
</button>

     
<button
  className="font-sans  flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
  type="submit"
>
  View CV
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 19"
    className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
  >
    <path
      className="fill-gray-800 group-hover:fill-gray-800"
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
    ></path>
  </svg>
</button>

          
        </div>

      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2  ">
        <Image
        width={750}
        height={750}
          className="object-cover ml-30 h-[450px] w-[450px] object-center rounded-full  shadow-2xl shadow-black "
          alt="hero"
          src="/one.jpg"
        ></Image>


<div className="flex flex-wrap md:flex-nowrap mt-16 object-cover object-center justify-center items-center h-full space-x-2 space-y-2">
  <button
    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
    type="button"
  >
    <a href='https://www.facebook.com/'>Facebook</a>
  </button>
  
  <button
    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
    type="button"
  >
    <a href='https://www.youtube.com'>YouTube</a>
  </button>
  
  <button
    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
    type="button"
  >
    <a href=''>Twitter</a>
  </button>
  
  <button
    className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
    type="button"
  >
    <a href="https://www.instagram.com/hamza.rafique.5836711/?hl=en">Instagram</a>
  </button>
</div>

      </div>
    </div>

   
  </section>
  
</div>
  )
}
