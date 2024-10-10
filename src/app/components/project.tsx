import Image from 'next/image'
import React from 'react'
export default function Project() {
  return (
    <div className="bg-slate-800"><br />
    <br /><br />


    <div  className='flex justify-center'>
           <h1 className="inline-block shadow-sm shadow-white   px-8 py-4 underline text-white font-bold text-3xl bg-black  rounded-3xl ">
             My Latest Project
           </h1></div>
           <br /><br />

   {/*Project 1 */}

           <div className="flex justify-center flex-wrap  ">
             <div className=" shadow-[0_4px_25px_-5px_rgb(0,0,0,4)] border bg-white p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden max-auto mt-4 ">
               <div className="min-h-[245px]">
                 <Image
                   src="https://img.static-rmg.be/a/view/q75/w2000/h1333/4973404/d89abcc52304fdda2ba464f0a14e59a9-jpg.jpg"
                   alt="Atm Machine "
                   className="w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
                 />
               </div>
   
            
   
               <div className="p-b text-center p-0 bg-white py-6">
                 <h2 className="text-xl shadow-lg shadow-black font-black bg-white  text-black hover:text-black inline rounded-2xl p-0 px-6 py-2 ">
                   Project 1
                 </h2>
                 <br />
                 <br />
                 <h3 className="text-2xl font-black text-black underline">Atm Project</h3>
                 <p className="p-6 font-bold text-black">
                   This is ATM MACHINE Project using Typescript with basic
                   functionalities of a real ATM machine, such as creating pin,
                   withdrawing cash, checking account balance, and depositing cash.
                 </p>
                 <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
                   <button className="inline-flex item-center rounded-2xl bg-blue-200 text-black shadow-xl shadow-blue-800 border-0 py-2 ml-1 px-6 focus:outline-none hover:font-bold rounded text base">
                     Read More !
                   </button>
                 </div>
               </div>
             </div>
             <div className="bg-white ml-3 bg-green-200 shadow-[0_4px_25px_-5px_rgb(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden max-auto mt-4 ">
               <div className="min-h-[245px]">
                 <Image
                   src="https://th.bing.com/th/id/OIP.sj12ngJs9_nOHLBRCfK99gHaE8?rs=1&pid=ImgDetMain"
                   alt="Atm Machine "
                   className="w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
                 />
               </div>
   
   
               {/*Project 2 */}
   
               <div className="p-b bg-white text-center p-0 py-6">
                 <h2 className="text-xl font-black bg-white shadow-lg shadow-black text-black 0 inline rounded-2xl p-0 px-9 py-2  hover:text-black">
                   Project 2
                 </h2>
                 <br />
                 <br />
                 <h3 className="text-2xl font-black text-black underline ">
                   Currency Converter
                 </h3>
                 <p className="p-6 font-bold text-black" >
                   The Currency Converter project is a tool
                   designed to convert one currency to another using real-time
                   exchange rates , which can swiftly convert the value of one
                   currency to another.
                 </p>
                 <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
                   <button className="inline-flex item-center rounded-2xl bg-blue-200 text-black shadow-xl shadow-blue-800 border-0 py-2 ml-1 px-6 focus:outline-none hover:font-bold rounded text base">
                     Read More !
                   </button>
                 </div>
               </div>
             </div>
   
             <div className="bg-white ml-3 shadow-[0_4px_25px_-5px_rgb(0,0,0,4)] border p-2 bg-pink-200 w-full max-w-sm rounded-lg font-sans overflow-hidden max-auto mt-4 ">
               <div className="min-h-[245px]">
                 <Image
                   src="https://th.bing.com/th/id/OIP.R8Q-hZRu99uYLsaP61c_LAAAAA?rs=1&pid=ImgDetMain"
                   alt="Atm Machine "
                   className="w-full h-60 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
                 />
               </div>
   
               {/*Project 3 */}
   
               <div className="p-b bg-white text-center p-0 py-6">
                 <h2 className="text-xl font-black bg-white shadow-lg text-black shadow-black inline text-black hover:text-black rounded-2xl p-0 px-7 py-2 ">
                   Project 3
                 </h2>
                 <br />
                 <br />
                 <h3 className="text-2xl font-black underline text-black">Guessing Game</h3>
                 <p className="p-6 font-bold text-black">
                   This guess the number game is a short TypeScript/Node.js project
                   that allows the user to guess the number generated by the
                   computer if you lose its say tried again and if you give correct
                   you win.
                 </p>
                 <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
                   <button className="inline-flex item-center rounded-2xl bg-blue-200  text-black shadow-xl shadow-blue-800 border-0 py-2 ml-1 px-6 focus:outline-none hover:font-bold rounded text base">
                     Read More !
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <br />
           <br />
           <br />
         </div>



  )
}
