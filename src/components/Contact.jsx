import React from "react";

// www.getform.io for from submission location

const Contact = () => {
    return(
        <div name="contact" className="h-full w-screen bg-[#1b2442] flex justify-center items-center py-4">
            <form method="POST" action="https://getform.io/f/ayvpwyob" className="flex flex-col max-w-[600px] w-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-green-600 text-white">Contact</p>
                    <p className="text-white py-4"> Sumbit the form below</p>
                </div>
                <input className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
                <textarea className="my-4 p-2 bg-[#ccd6f6]" name="message" rows="10" placeholder="Message" ></textarea>
                <button className="text-white border-2 hover:bg-green-600 hover:border-green-800 hover:text-black px-4 py-3 my-8 mx-auto flex items-center">Submit message</button>
            </form>
        </div>
    )
}

export default Contact;