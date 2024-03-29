import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import React from 'react'
import { useTheme } from 'next-themes'

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex flex-row justify-between py-10 px-6 bg-fixed">
            <h1 className="text-xl px-6 font-burtons left-4 fixed ">sariomari</h1>
            <nav className="py-10 px-6 flex justify-end fixed top-0 right-4">
                <ul className="flex items-center">
                    <li className="mx-3 text-gray-700 font-medium dark:text-white">
                        <button className="hover:scale-110 duration-500">
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </button>
                    </li>
                    <li className="mx-3 text-gray-700 font-medium dark:text-white">
                        <button className="hover:scale-110 duration-500">
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </button>
                    </li>
                    <li className="mx-3 text-gray-700 font-medium dark:text-white">
                        <button className="hover:scale-110 duration-500">
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </button>
                    </li>
                    <li className="mx-3 text-gray-700 font-medium dark:text-white">
                        <button className="hover:scale-110 duration-500">
                            <Link to="experience" smooth={true} duration={500}>
                                Experience
                            </Link>
                        </button>
                    </li>
                    <li className="mx-3 text-gray-700 font-medium dark:text-white">
                        <button className="hover:scale-110 duration-500">
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </button>

                    </li>
                    <li>
                        <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                    </li>
                    <li>
                        <button className="hover:scale-110 duration-500">
                            <a href="https://drive.google.com/drive/folders/1fU6zJdK74vWDpHhi6vdaE0HR2LXgryHa?usp=sharing" target="_blank" rel="noopener noreferrer" className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}