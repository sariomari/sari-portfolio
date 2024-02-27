import Head from 'next/head'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import sari from '../../public/IMG_1393.jpeg'
import React from 'react'
import NavBar from '../../src/pages/NavBar'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sari Omari</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <NavBar />
          <div className="text-center p-6">
            <h2 className="text-5xl py-2 text-cyan-700">Sari Omari</h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <div className="relative flex justify-center">
              <Image src={sari} width={400} height={400} className="rounded-full" />
            </div>
            <p className="text-md py-3 leading-8 text-gray-700 dark:text-white">
              Software developer, travel enthusiast, mission-oriented person who&apos;s enthusiastic about tech.
            </p>
            <p className="text-md text-gray-700 dark:text-white">BsC in Computer Science - Tel Aviv University.</p>
            <div className="text-5xl flex justify-center gap-16 px-7 py-3 text-gray-600">
              <a href="https://www.instagram.com/sariomari/"><AiFillInstagram /></a>
              <a href="https://www.linkedin.com/in/sari-omari-3661b6205/"><AiFillLinkedin /></a>
            </div>
          </div>
        </section>
        <section className="flex justify-center p-10">
          <Experience />
        </section>
        <section>
          <Projects />
        </section>
        <section className="flex justify-center p-10">
          <Skills />
        </section>
        <section>
          <div>
            <div name="contact" className="w-full h-screen flex justify-center items-center">
              <form action="https://getform.io/f/6647e865-b783-4400-ba14-849d9553ebee" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 text-center">
                  <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">Let&apos;s get in touch!</p>
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
