
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
        description: 'Swift is a dual app system that reshapes the way you handle your clothing needs. Swift facilitates the effortless delivery of apparel from your favorite shops that are in your zone, the app lets you order clothes and get them in the same hour, Whether youre a fashionista seeking convenience or a driver looking to earn, Swift makes fashion accessible, efficient, and exciting.',
        githubLink: 'https://github.com/sariomari/swift',
        image1: swift_driver_app,
        image2: swift_customerapp_1,
        image3: swift_customerapp_2
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
                                
                            </div>
                            <div className="mb-4 flex justify-between">
                                <div className="mb-4">
                                    <Image src={project.image1} alt={project.title} height={300} width={300}/>
                                </div>
                                <div className="w-4" />
                                <div className="mb-4">
                                    <Image src={project.image2} alt={project.title} height={300} width={300}/>
                                </div>
                                <div className="w-4" />
                                <div className="mb-4">
                                    <Image src={project.image3} alt={project.title} height={300} width={300}/>
                                </div>
                            </div>
                            <div>
                            <p className="text-gray-700 dark:text-[#ccd6f6]">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}