import React from "react";
import ProjectPH from "../assets/projectph.jpeg";

const Projects = () => {
    return (
        <div name="projects" className="w-full md:h-screen text-[#E4E4E4] bg-[#1b2442]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-600">Projects</p>
                    <p className="py-4">Here are some recents projects I've developed</p>
                </div>

                {/* Grid item */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{backgroundImage: `url(${ProjectPH})`}} 
                    className="shadow-lg shadow-[#00001A] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider"> 
                                Project Placeholder
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Grid item end */}
                
            </div>
        </div>
    )
}

export default Projects; 