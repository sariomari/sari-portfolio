
import React from "react"
import Image from "next/image";
import swift_driver_app from '../../public/swift_driver_app.png'
import swift_customerapp_1 from '../../public/swift_customerapp_1.png'
import swift_customerapp_2 from '../../public/swift_customerapp_2.png'
import githubIcon from '../../public/github.png'

const projects = [
    {
        id: 1,
        title: 'Swift - Clothing Delivery App',
        description: 'Swift is a suite of 2 apps - one for delivery drivers and one for the customer.',
        githubLink: 'https://github.com/sariomari/swift',
        image1: swift_driver_app,
        image1Description: "The app that the delivery driver uses. The driver can accept tasks and can use the map to navigate from customers to stores",
        image2: swift_customerapp_1,
        image2Description: "Customer App - here we can see the home screen whenever a customer logs in",
        image3: swift_customerapp_2,
        image3Description: "Customer App - here we can see what happens when we click on a store",
    },
];


export default function Projects() {
    return (
        <div name="projects">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-200 dark:text-[#ccd6f6]">
                        Personal Projects
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="flex flex-col">
                            <div className="rounded-lg p-6 flex-1 justify-center">
                                <div className="flex items-center mb-2">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <Image className="mx-4" src={githubIcon} height={30} width={30} />
                                    </a>
                                </div>
                                <div>
                                    <p className="py-2 text-gray-600 text-md font-medium dark:text-white">{project.description}</p>
                                </div>

                            </div>
                            <div className="flex flex-wrap justify-around">
                                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out dark:bg-white">
                                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-600">Driver App</h3>
                                    <div className="flex justify-center"><Image src={project.image1} alt={project.title} height={300} width={300} className="mb-2 rounded-lg shadow-lg" /></div>
                                    <p className="text-gray-700"> {project.image1Description}</p>
                                </div>
                                <div className="w-4" />
                                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out dark:bg-white">
                                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-600">Customer Home Screen</h3>
                                    <div className="flex justify-center"><Image src={project.image2} alt={project.title} height={300} width={300} className="mb-2 rounded-lg shadow-lg" /></div>
                                    <p className="text-gray-700">{project.image2Description} </p>
                                </div>
                                <div className="w-4" />
                                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out dark:bg-white">
                                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-600">Customer Store Screen</h3>
                                    <div className="flex justify-center"><Image src={project.image3} alt={project.title} height={300} width={300} className="mb-2 rounded-lg shadow-lg" /></div>
                                    <p className="text-gray-700">{project.image3Description} </p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}