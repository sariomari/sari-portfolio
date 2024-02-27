import React from 'react'
import metalogo from '../../public/META-4767da84.png'
import jpmc from '../../public/jpmc.png'
import Image from 'next/image'
export default function Experience() {
    return (
        <div name="experience" className="flex flex-col align-center">
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">
                Experience
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "70vh", width: "50vh" }}>
                <Image className="rounded-md hover:scale-110 duration-500" src={jpmc} height={100} width={100} />
                <h3 className="text-xl py-7 font-medium text-gray-600">Software Engineer</h3>
                <p className="font-medium text-gray-600">April 2022</p>
                <ul className="list-disc text-left">
                  <li className="py-2 text-gray-600 text-md font-medium">Developed and implemented solutions for scaling, performance improvement and monitoring of large-scale datasets.</li>
                  <li className="py-1 text-gray-600 text-md font-medium">Proactively proposing efficient handling of data, focusing on quantifiable reductions in both processing time and storage space leveraging libraries such as Pandas and NumPy.</li>
                  <li className="py-1 text-gray-600 text-md font-medium">Acted as a point of contact within the global data team serving internal and external clients, proposing and implementing data tools involving AWS S3, Time-Series data, Oracle and DynamoDB..</li>
                </ul>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl dark: bg-white" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "70vh", width: "50vh" }}>
                <Image className="hover:scale-110 duration-500" src={metalogo} height={150} width={150} />
                <h3 className="text-xl py-7 font-medium text-gray-600"> Meta (Facebook) Intern</h3>
                <p className="font-medium text-gray-600">Summer 2022</p>
                <ul className="list-disc text-left">
                  <li className="py-2 text-gray-600 text-md font-medium">I worked as a software engineer intern in the Dataswarm team.</li>
                  <li className="py-1 text-gray-600 text-md font-medium">Implemented an improved API for a new version of Dataswarm - which is a python framework for building data pipelines. </li>
                  <li className="py-1 text-gray-600 text-md font-medium">Main languages used were Python and Thrift. </li>
                </ul>

              </div>
            </div>
          </div>
    )
}