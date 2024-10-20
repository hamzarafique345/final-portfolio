// "use client"
// import React from 'react'
// import { DiHtml5 } from "react-icons/di";
// import { SiCss3 } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";
// import { SiTailwindcss } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import Typewriter from "typewriter-effect";
// export default function Skill() {
//   return (
  
//     <section  className="text-gray-600 bg-slate-800 body-font">

//     <div className="container px-5 pt-10 pb-16 mx-auto">
//       <div className="text-center mb-20">
//       <h1 className="text-3xl  bg-gray-800 font-bold text-cyan-400 font-serif  underline inline border shadow-lg  shadow-white rounded-full  p-0 p-2 px-9">
//                 My Skills
//               </h1>
//         <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
       
//         </p>
//       </div>
//       <div className="flex flex-wrap  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">
//               Html : <strong> 95%</strong>
//             </span>
//           </div>
//         </div>
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">
//              Css :  <strong>70%</strong>
//             </span>
//           </div>
//         </div>
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">Typescript : <strong>90%</strong></span>
//           </div>
//         </div>
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">
//               Next.js : <strong>30%</strong>
//             </span>
//           </div>
//         </div>
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">Tailwind Css: <strong>30%</strong></span>
//           </div>
//         </div>
//         <div className="p-2 sm:w-1/2 w-full">
//           <div className="bg-gray-100 rounded flex p-4 h-full items-center">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//               <path d="M22 4L12 14.01l-3-3" />
//             </svg>
//             <span className="title-font uppercase font-medium">Tailblock : <strong >100%</strong></span>
//           </div>
//         </div>
//       </div>
  
//   {/*Development Tools And frame work */}
  
  
//   <section>
//     <div className="container px-2 py-1 mx-auto flex flex-wrap flex justify-center space-x-8 text-2xl">
//   {/*Icon */}
  
  
//   <div className="flex items-center">
//                   <h1 className="title-font  font-black font-serif  sm:text-4xl text-2xl mb-4 font-bold text-amber-400">
//                     <Typewriter
//                       options={{
//                         strings: ["My Programming ","Skill"],
//                         autoStart: true,
//                         loop: true,
//                       }}
//                     />
//                   </h1>
//                 </div>
  
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-red-500 text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <DiHtml5 />
//   <span className="mt-2 text-lg text-black ">Html</span>
//   </div>
  
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-cyan-600 text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <SiCss3/>
//   <span className="mt-2 text-lg text-black ">Css</span>
//   </div>
  
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-cyan-400 text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <SiTypescript/>
//   <span className="mt-2 text-lg text-black ">Typescript</span>
//   </div>
  
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-black text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <RiNextjsFill/>
//   <span className="mt-2 text-lg text-black ">Next.js</span>
//   </div>
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-black text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <SiTailwindcss />
//   <span className="mt-2 text-lg text-black ">Tailwind Css</span>
//   </div>
  
//   <div className="flex border border-yellow-500 p-4 flex-col items-center text-yellow-500 text-6xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110">
//   <IoLogoJavascript/>
//   <span className="mt-2 text-lg text-black ">Javascript</span>
//   </div>
  
//     </div>    <button className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
//         Read More
//       </button>
//   </section>
  
  
//     </div>
//   </section>
  

//   )
// }
"use client";
import React from "react";
import { DiHtml5 } from "react-icons/di";
import { SiCss3, SiTypescript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import Typewriter from "typewriter-effect";

export default function Skill() {
  return (
    <section className="text-gray-600 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
      <div className="container px-5 pt-10 pb-16 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl bg-gray-800 font-extrabold text-cyan-400 font-serif underline inline border shadow-lg shadow-cyan-500 rounded-full p-4 px-12 transition duration-500 hover:text-white hover:bg-cyan-400 hover:shadow-white">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {[
            { skill: "Html", level: "95%" },
            { skill: "Css", level: "70%" },
            { skill: "Typescript", level: "90%" },
            { skill: "Next.js", level: "30%" },
            { skill: "Tailwind Css", level: "30%" },
            { skill: "Tailblock", level: "100%" },
          ].map(({ skill, level }, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex p-6 h-full items-center shadow-lg hover:shadow-cyan-400 transition-shadow duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font uppercase font-medium text-lg text-gray-800">
                  {skill} : <strong className="text-cyan-500">{level}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Tools And Framework */}
        <section>
          <div className="container px-2 py-6 mx-auto flex flex-wrap justify-center space-x-8 text-2xl">
            {/* Typewriter Animation */}
            <div className="flex items-center">
              <h1 className="title-font font-black font-serif sm:text-4xl text-3xl mb-4 font-bold text-amber-400 animate-pulse">
                <Typewriter
                  options={{
                    strings: ["My Programming", "Skills"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>

            {/* Skill Icons with Hover Effects */}
            {[
              { icon: <DiHtml5 />, name: "Html", color: "text-red-500" },
              { icon: <SiCss3 />, name: "Css", color: "text-cyan-600" },
              { icon: <SiTypescript />, name: "Typescript", color: "text-blue-500" },
              { icon: <RiNextjsFill />, name: "Next.js", color: "text-black" },
              { icon: <SiTailwindcss />, name: "Tailwind Css", color: "text-blue-400" },
              { icon: <IoLogoJavascript />, name: "Javascript", color: "text-yellow-500" },
            ].map(({ icon, name, color }, index) => (
              <div
                key={index}
                className={`flex border border-yellow-500 p-4 flex-col items-center ${color} text-6xl bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-100 hover:shadow-cyan-400`}
              >
                {icon}
                <span className="mt-2 text-lg text-black">{name}</span>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-3 px-10 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none transition duration-300">
            Read More
          </button>
        </section>
      </div>
    </section>
  );
}
