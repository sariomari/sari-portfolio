import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import sari from '../../public/IMG_1393.jpeg'
import React from 'react'
import metalogo from '../../public/META-4767da84.png'
import jpmc from '../../public/jpmc.png'
import { useTheme } from 'next-themes'
import { Link } from 'react-scroll'
import HTML from '../../public/HTML.png'
import python from '../../public/python.png'
import js from '../../public/js.png'
import java from '../../public/java.png'
import linux from '../../public/linux.png'
import mysql from '../../public/mysql.png'
import react from '../../public/react.png'
import clang from '../../public/c.png'
import nosql from '../../public/nosql.png'

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Head>
        <title>Sari Omari</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">sariomari</h1>
            <ul className="flex items-center">
              <li className="mx-3 text-gray-700 font-medium dark:text-white">
                <button>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </button>
              </li>
              <li className="mx-3 text-gray-700 font-medium dark:text-white">
                <button>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </button>
              </li>
              <li className="mx-3 text-gray-700 font-medium dark:text-white">
                <button>
                  <Link to="experience" smooth={true} duration={500}>
                    Experience
                  </Link>
                </button>
              </li>
              <li className="mx-3 text-gray-700 font-medium dark:text-white">
                <button>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </button>

              </li>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              </li>
              <li>
                <button>
                  <a href="https://drive.google.com/drive/folders/1fU6zJdK74vWDpHhi6vdaE0HR2LXgryHa?usp=sharing" target="_blank" rel="noopener noreferrer" className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-6">
            <h2 className="text-5xl py-2 text-cyan-700">Sari Omari</h2>
            <h3 className="text-2xl py-2">Computer Science Student</h3>
            <h3 className="py-2 text-gray-700 dark:text-white"> Incoming SWE Intern at J.P. Morgan</h3>
            <div className="relative flex justify-center">
              <Image src={sari} width={230} height={230} className="rounded-full" />
            </div>
            <p className="text-md py-3 leading-8 text-gray-700 dark:text-white">
              Software developer, travel enthusiast, mission-oriented person who&apos;s enthusiastic about everything.
            </p>
            <p className="text-md text-gray-700 dark:text-white">BsC in Computer Science - Tel Aviv University.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://www.instagram.com/sariomari/"><AiFillInstagram /></a>
              <a href="https://www.linkedin.com/in/sari-omari-3661b6205/"><AiFillLinkedin /></a>
            </div>
          </div>
        </section>
        <section>
          <div name="about" className="w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                  <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">
                    About Me
                  </p>
                </div>
                <div></div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                  <p className="dark:text-[#8892b0]">Hi, I&apos;m Sari. Nice to meet you!</p>
                </div>
                <div>
                  <p className=" text-gray-700 dark:text-[#8892b0]">
                    Greetings! I am Sari, a distinguished Computer Science student in the final stretch of my academic
                    journey at Tel Aviv University.
                    I embarked on this academic path with the intention of unlocking limitless avenues of growth, innovation, and creativity.
                    This field also allows me to have the opportunity to work alongside the brightest minds at the world&apos;s most desirable companies. What&apos;s more, this field offers unparalleled flexibility, granting me the freedom to explore new horizons and pursue my passion for travel.
                  </p>
                  <p className="text-md text-gray-700 dark:text-[#8892b0]">
                    I&apos;m always thriving to be useful and to provide value to the people around me, while continuously crafting my skills.
                  </p>
                  <p className="text-md text-gray-700 dark:text-[#8892b0]">
                    I have worked on various projects during my spell at the university, where high-level ones include Python and Java, and low level ones in C. I have also worked with databases like MySQL and Cassandra, and is familiar with Relational/No-SQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="flex justify-center p-10">
          <div name="skills" className="flex flex-col align-center">
            <div>
              <div className="sm:text-center pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">Skills</p>
                <h2 className="py-4 dark:text-[#ccd6f6]">Languages/Tools I'm familiar with</h2>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={HTML}  alt="HTML Icon"/>
                  <p className="my-6">HTML</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={python}  alt="Python Icon"/>
                  <p className="my-6">Python</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={react}  alt="React Icon"/>
                  <p className="my-6 py-2">React</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={mysql}  alt="MySQL Icon"/>
                  <p className="my-6 py-6">MySQL</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={clang}  alt="C Icon"/>
                  <p className="my-6">C Language</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={js}  alt="js Icon"/>
                  <p className="my-6 py-2">JavaScript</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={linux}  alt="Linux Icon"/>
                  <p className="my-6 py-2">Linux</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={nosql}  alt="Nosql Icon"/>
                  <p className="my-6 py-2">Distributed Databases</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={java}  alt="Java Icon"/>
                  <p className="my-6">Java</p>
                </div>
              </div>

            </div>
            
          </div>
        </section>
        <section className="flex justify-center p-10">
          <div name="experience" className="flex flex-col align-center">
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">
                Experience
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl dark: bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "60vh", width: "50vh" }}>
                <Image className="rounded-md hover:scale-110 duration-500" src={jpmc} height={100} width={100} />
                <h3 className="text-xl py-7 font-medium text-gray-600"> Incoming SWE Intern</h3>
                <p className="font-medium text-gray-600">April 2022</p>
                <p className="py-2 text-gray-600 text-md font-medium">To be written...</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl dark: bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "60vh", width: "50vh" }}>
                <Image className="hover:scale-110 duration-500" src={metalogo} height={150} width={150} />
                <h3 className="text-xl py-7 font-medium text-gray-600"> Meta (Facebook) Intern</h3>
                <p className="font-medium text-gray-600">2022</p>
                <p className="py-2 text-gray-600 text-md font-medium">I worked as a software engineer intern in the Dataswarm team.</p>
                <p className="py-1 text-gray-600 text-md font-medium">Implemented an improved API for a new version of Dataswarm - which is a python framework for building data pipelines. </p>
                <p className="py-1 text-gray-600 text-md font-medium">Main languages used were Python and Thrift. </p>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div name="contact" className="w-full h-screen flex justify-center items-center">
              <form action="https://getform.io/f/6647e865-b783-4400-ba14-849d9553ebee" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-cyan-300 dark:text-white">Let&apos;s get in touch!</p>
                  <p className="py-3">Either submit this form or send me an email at sari.omari@gmail.com</p>
                </div>
                <input className="bg-cyan-50 rounded-md" type="text" placeholder="Name" name="name" />
                <input className="my-4 bg-cyan-50 rounded-md" type="text" placeholder="Email" name="email" />
                <textarea className="bg-cyan-50 rounded-md" type="text" placeholder="Message" name="message" rows="10" />
                <button className="text-black border-2 hover:bg-cyan-300 hover: border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center rounded-2xl dark:text-white">Submit</button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>

  );
}
