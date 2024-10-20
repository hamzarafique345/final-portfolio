import Image from "next/image";
import React from "react";

export default function Project() {
  return (
    <section className="py-10 bg-gradient-to-br from-black to-slate-600 sm:py-10 lg:py-14">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-yellow-500 animate-pulse">
            My Work
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
            I create immersive and responsive web applications that blend innovation with design. Here are some highlights of my skills using HTML, CSS, TypeScript, and Next.js.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {/* Project Card 1 */}
          <div className="bg-white text-black p-4 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-105 shadow-lg">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <Image
                className="object-cover w-full h-56 transition-transform duration-300 hover:scale-110 rounded-2xl"
                src="/project1.png" // Replace with a relevant image URL
                alt="Ecommerce Burger Website"
                width={700}
                height={700}
              />
            </a>
            <div className="flex justify-between mt-9">
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100">
                Project One
              </span>
            </div>
            <p className="mt-6 text-xl font-semibold text-black animate-bounce">
              <a href="#" title="" className="text-yellow-500">Ecommerce Burger Website</a>
            </p>
            <p className="mt-4 text-black">
              A modern e-commerce platform built using Next.js and Tailwind CSS, offering a seamless shopping experience with engaging UI and responsive design.
            </p>
            <div className="mt-auto flex justify-center pt-4">
        
            <button
  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white hover:text-black bg-slate-900 rounded-md group"
>
  <span
    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-500  rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  <span
    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span className="relative text-base font-semibold"><a href="https://vercel.live/link/burger-website-ecommerce-hamza.vercel.app?via=project-dashboard-alias-list&p=1">View Project !</a></span>
</button>

            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white text-black p-4 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-105 shadow-lg">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <Image
                className="object-cover w-full h-56 transition-transform duration-300 hover:scale-110 rounded-2xl"
                src="/todoapp2.jpg"
                alt="Todu App"
                width={800}
                height={800}
              />
            </a>
            <div className="flex justify-between mt-9">
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-purple-500 bg-purple-100">
                Project Two
              </span>
            </div>
            <p className="mt-6 text-xl font-semibold animate-bounce">
              <a href="#" title="" className="text-yellow-500">Todu App</a>
            </p>
            <p className="mt-4 text-black">
              A task management application built with React and Firebase, designed to enhance productivity through intuitive task tracking and collaboration features.
            </p>
            <div className="mt-auto flex justify-center pt-4">
          
<button
  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white hover:text-black bg-slate-900 rounded-md group"
>
  <span
    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-500  rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  <span
    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span className="relative text-base font-semibold"><a href="https://vercel.live/link/todo-app-puce-three-40.vercel.app?via=team-dashboard-project-entity&p=1&passThrough=1&page=/">View Project !</a></span>
</button>

            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white text-black p-4 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-105 shadow-lg">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <Image
                className="object-cover w-full h-56 transition-transform duration-300 hover:scale-110 rounded-2xl"
                src="countdown3.jpg" // Replace with a relevant image URL
                alt="Countdown Timer"
                width={800}
                height={
                  800
                }
              />
            </a>
            <div className="flex justify-between mt-9">
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100">
                Project Three
              </span>
            </div>
            <p className="mt-6 text-xl font-semibold animate-bounce">
              <a href="#" title="" className="text-black text-yellow-500">Countdown Timer</a>
            </p>
            <p className="mt-4 text-black">
              A user-friendly countdown timer application created with Vanilla JavaScript, perfect for tracking events and deadlines with a sleek design.
            </p>
            <div className="mt-auto flex justify-center pt-4">
         
<button
  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white hover:text-black bg-slate-900 rounded-md group"
>
  <span
    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-500  rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  <span
    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span className="relative text-base font-semibold"><a href="https://vercel.live/link/count-down-timer-opal.vercel.app?via=team-dashboard-project-entity&p=1&page=/">View Project !</a></span>
</button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
