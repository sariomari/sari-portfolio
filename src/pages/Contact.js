import React from "react";
import {Link} from 'react-scroll'
const Contact = () => {
    return (
        <div>
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-lg font-burtons justify-center text-white">
                    <Link to="home" smooth={true} className="items-center px-10 flex mb-10">Home</Link>
                </h1>
            </nav>
            <div name="contact" className="w-full h-screen flex justify-center items-center">
                <form action="https://getform.io/f/6647e865-b783-4400-ba14-849d9553ebee" method="POST" className="flex flex-col max-w-[600px] w-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-white">Let's get in touch!</p>
                    </div>
                    <input className="bg-cyan-50 rounded-md" type="text" placeholder="Name" name="name"/>
                    <input className="my-4 bg-cyan-50 rounded-md" type="text" placeholder="Email" name="email"/>
                    <textarea className="bg-cyan-50 rounded-md" type="text" placeholder="Message" name="message" rows="10"/>
                    <button className="text-white border-2 hover:bg-cyan-300 hover: border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center rounded-2xl">Submit</button>
                    
                </form>
            </div>
        </div>
    )
};

export default Contact;