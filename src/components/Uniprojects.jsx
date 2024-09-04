import React from "react";
import ProjectPH from "../assets/projectph.jpeg";

const Uniprojects = () =>{
    return(
        <div name="uniprojects" className="w-full md:h-screen text-[#E4E4E4] bg-[#1b2442]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-600">Uni-Projects</p>
                    <p className="py-4">These are projects I developed during my time at university</p>
                </div>

                {/* Grid items */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* item1 */}
                    <div style={{backgroundImage: `url(${ProjectPH})`}} 
                    className="shadow-lg shadow-[#00001A] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl text-center font-bold text-white tracking-wider"> 
                                Task Management Application with Prioritisation function
                            </p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/Euanlewis/TaskmanagerApp" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item1 ends */}

                    {/* item2 */}
                    <div style={{backgroundImage: `url(${ProjectPH})`}} 
                    className="shadow-lg shadow-[#00001A] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl text-center font-bold text-white tracking-wider"> 
                                Recycling-Finder Website
                            </p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/Euanlewis/Recycle" target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item2 ends */}

                    {/* item3 */}
                    <div style={{backgroundImage: `url(${ProjectPH})`}} 
                    className="shadow-lg shadow-[#00001A] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl text-center font-bold text-white tracking-wider"> 
                                Multi-function Calculator
                            </p>
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
                    {/* item3 ends */}
                </div>  
                {/* Grid items end */}
                
                
            </div>
        </div>
    )
}

export default Uniprojects;