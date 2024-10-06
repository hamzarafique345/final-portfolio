"use client"
import React from 'react'
import Typewriter from "typewriter-effect";

export default function About() {
  return (
<section id="hamza"  className="text-gray-600 body-font bg-slate-800">
        <div className="container px-5 pt-6 pb-28 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <br />
            <br />
            <h1 className="text-3xl bg-white font-bold text-black font-serif  underline inline border shadow-lg  shadow-yellow-500 rounded-full  p-0 py-2 px-9">
              About ME
            </h1>
            <br />
            <br />
            <br />
            <br />
            <p className="leading-8  text-1xl font-serif  text-white font-semibold ">
              Hello everyone! I wanted to share a little bit about myself. I
              recently passed my intermediate in medical, but I realized that my
              true passion lies in the IT field. It was a difficult decision,
              but I took a leap of faith and joined the Governor Initiative
              program. At first, I faced many challenges, but thanks to my
              amazing mentor Mehak Alamgir, I was able to overcome them. Now, I
              have successfully completed my first quarter and I am currently
              working on the second quarter, which is all about Next.js. Mehak
              Alamgir has been an incredible guide and support throughout this
              journey. I am grateful for this opportunity and excited for whats
              to come.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-cyan-500  font-serif font-bold text-4xl    title-font tracking-wider text-sm">
              Hamza Rafique
            </h2>
            <h2 className="text-yellow-400 text-2xl font-bold">
                      <Typewriter
                options={{
                  strings: ["Junior Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <br />
        </div>
      </section>
  )
}
