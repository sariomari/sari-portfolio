import HTML from '../../public/HTML.png'
import python from '../../public/python.png'
import js from '../../public/js.png'
import java from '../../public/java.png'
import linux from '../../public/linux.png'
import mysql from '../../public/mysql.png'
import react from '../../public/react.png'
import clang from '../../public/C.png'
import nosql from '../../public/nosql.png'
import Image from 'next/image'
import React from 'react'

export default function Skills(){
    return (
        <div name="skills" className="flex flex-col align-center">
            <div>
              <div className="sm:text-center pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">Skills</p>
                <h2 className="py-4 dark:text-[#ccd6f6]">Languages & Tools I worked with</h2>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
                  <p className="my-6">HTML</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={python} alt="Python Icon" />
                  <p className="my-6">Python</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={react} alt="React Icon" />
                  <p className="my-6 py-2">React</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={mysql} alt="MySQL Icon" />
                  <p className="my-6 py-6">MySQL</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={clang} alt="C Icon" />
                  <p className="my-6">C Language</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={js} alt="js Icon" />
                  <p className="my-6 py-2">JavaScript</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={linux} alt="Linux Icon" />
                  <p className="my-6 py-2">Linux</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={nosql} alt="Nosql Icon" />
                  <p className="my-6 py-2">Distributed Databases</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={java} alt="Java Icon" />
                  <p className="my-6">Java</p>
                </div>
              </div>
            </div>
          </div>
    );
}