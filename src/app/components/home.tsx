"use client"
import React from 'react'
import Typewriter from "typewriter-effect";
import Profile from '../fonts/image/hamza.jpg';
import { profile } from 'console';
export default function MyHome () {
  return (
    <div>

      {/*Hero Section */}
      
    <section  className="0"  >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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
          typescript, React, and Next.Js | Enrolled in "Governor Sindh
          Initiative for Gen AI, Web3 and Metaverse"
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Hire me!
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View My CV
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
        <img
          className="object-cover ml-44 h-[450px] w-[450px] object-center rounded-full shadow-xl shadow-slate-900 "
          alt="hero"
          src="https://th.bing.com/th/id/OIF.K1M6ljwgsPcHmHqoEl9h6Q?rs=1&pid=ImgDetMain"
        ></img>
      </div>
    </div> <br /><br />
  </section>
</div>
  )
}
