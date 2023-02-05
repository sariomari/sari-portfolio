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
              <li className="mx-3 text-gray-700 font-medium">
                <a href="/Contact" className="dark:text-white">Contact</a>
              </li>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              </li>
              <li>
                <button>
                  <Link to="home" smooth={true} furation={500} className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</Link>
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-6">
            <h2 className="text-5xl py-2 text-cyan-700">Sari Omari</h2>
            <h3 className="text-2xl py-2">Junior Software Developer</h3>
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
                  <p className="text-4xl font-bold inline border-b-4 border-cyan-200">
                    About Me
                  </p>
                </div>
                <div></div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                  <p>Hi, I&apos;m Sari. Nice to meet you!</p>
                </div>
                <div>
                  <p className=" text-gray-700 dark:text-white">
                    Greetings! I am Sari, a distinguished Computer Science student in the final stretch of my academic
                    journey at Tel Aviv University.
                    I embarked on this academic path with the intention of unlocking limitless avenues of growth, innovation, and creativity.
                    This field also allows me to have the opportunity to work alongside the brightest minds at the world&apos;s most desirable companies. What&apos;s more, this field offers unparalleled flexibility, granting me the freedom to explore new horizons and pursue my passion for travel.
                  </p>
                  <p className="text-md text-gray-700 dark:text-white">
                    I&apos;m always thriving to be useful and to provide value to the people around me, while continuously crafting my skills.
                  </p>
                  <p className="text-md text-gray-700 dark:text-white">
                    I have worked on various projects during my spell at the university, where high-level ones include Python and Java, and low level ones in C. I have also worked with databases like MySQL and Cassandra, and is familiar with Relational/No-SQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="flex justify-center p-10">
          <div name="experience" className="flex flex-col align-center">
            <h3 className="text-3xl flex justify-center p-10">Experience</h3>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl dark: bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "50vh" }}>
                <Image className="rounded-md" src={jpmc} height={100} width={100} />
                <h3 className="text-xl py-7 font-medium text-gray-600"> Incoming SWE Intern</h3>
                <p className="font-medium text-gray-600">April 2022</p>
                <p className="py-2 text-gray-600 text-md font-medium">To be written...</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl dark: bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "50vh" }}>
                <Image src={metalogo} height={100} width={100} />
                <h3 className="text-xl py-7 font-medium text-gray-600"> Meta (Facebook) Intern</h3>
                <p className="font-medium text-gray-600">2022</p>
                <p className="py-2 text-gray-600 text-md font-medium">I worked as a software engineer intern in the Dataswarm team.</p>
                <p className="py-1 text-gray-600 text-md font-medium">Implemented an improved API for a new version of Dataswarm - which is a python framework for building data pipelines. </p>
                <p className="py-1 text-gray-600 text-md font-medium">Main languages used were Python and Thrift. </p>

              </div>
            </div>
          </div>
        </section>

      </main>
    </div>

  );
}
