"use client";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-20">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Background"
        width={800}
        height={800}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30 transition-opacity duration-300"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 transition duration-500 hover:scale-105 hover:text-gray-100">
            Hello! I am a passionate learner transitioning from a medical background to the dynamic world of IT. After completing my intermediate in medical studies, I discovered my true passion for technology and decided to take a bold step into the field of Information Technology. I am currently enrolled in the prestigious Governor Initiative program, where I have successfully completed my first quarter. With the guidance and support of my mentor, Mehak Alamgir, I am now diving deeper into the second quarter, focusing on mastering Next.js.
            <br />
            <br />
            Through hard work and perseverance, I haveve overcome challenges and embraced the journey of continuous learning in web development. I am excited about the future and committed to making a meaningful impact in the IT industry.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Skills", value: "15 +" },
              { label: "Projects", value: "20+" },
              { label: "Hours per Week", value: "60+" },
              { label: "Paid Time Off", value: "Unlimited" },
            ].map((item, index) => (
              <div className="flex flex-col-reverse transition-transform duration-300 transform hover:scale-105" key={index}>
                <dt className="text-base leading-7 text-gray-300">{item.label}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
