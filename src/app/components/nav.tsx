
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="text-grey-600 body-font bg-slate-700">
         <title>Portfolio</title>

        <div className="flex flex-wrap p-2 ml-16  flex-col md:flex-row items-center bg ">
          <a className="flex mb-1 titlefont font-medium items-center text-grey-900 mb-1 md:mb ">
            <Image
           width={100}
           height={100}
              src="https://media.licdn.com/dms/image/v2/D5603AQE-lhyBUpPYQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710336293886?e=1733356800&v=beta&t=2c6MXB_Pc29TBv8o5Mw47jdBWxwq9qM1MYii1aq-qkw"
              alt="logo"
              className="w-10 h-10 rounded-full"
            ></Image>
            <span  className="ml-3 text-xl text-white">Hamza Rafique |</span>
          </a>

          {/* Nav Section */}

          <nav className=" md:mr-auto md:ml-4 md:py-1   m font-serif <hr />d:pl-14 md:border-1 md:border-grey-400 flex flex-wrap items center text-base justify-center">
            <Link className=" text-white ml- mr-5 hover:text-red-500 hover:font-bold" href="/">
              Home
            </Link>
            <Link className=" text-white mr-5 hover:text-blue-500  hover:font-bold" href="./About">
              About
            </Link>
            <Link className=" text-white mr-5 hover:text-orange-500   hover:font-bold" href="./Skills">
              Skill
              </Link>

             <Link className=" text-white mr-5 hover:text-orange-500   hover:font-bold
" href="./Team">
              Team
              </Link>
            <Link className=" text-white mr-5 hover:text-green-500    hover:font-bold" href="./Contact">
              Contact Us
            </Link>
           
            <Link
              className=" text-white mr-5 hover:text-pink-500 hover:font-bold
"
              href="../Privacy_Privacy"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Button Section */}

          <div className="flex space-x-4 mt-4 md:mt-0  ">
            
            <button className=" inline-flex item-center  rounded-2xl bg-cyan-400 text-white border-0 py-1 px-6 focus:outline-none hover:bg-purple-500  rounded text base">
              Login
            </button>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="inline-flex item-center rounded-2xl bg-orange-400 text-white border-0 py-1 ml-1 px-6 focus:outline-none hover:bg-yellow-400 rounded text base">
              Sign Up
            </button>
          </div>
        </div>
        <hr />
    
    </div>
  )
}

