import React from "react";

import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/js.png';
import ReactLog from '../assets/react.png';
import TailWind from '../assets/tailwind.png';


const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#1b2442] text-[#E4E4E4]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-green-600">Skills</p>
                    <p className="py-4">Technologies I have experience with:</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-2" src={Java} alt="java.png"/>
                        <p className="my-1">Java</p>
                    </div>
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-2" src={ReactLog} alt="react.png"/>
                        <p className="my-1">React</p>
                    </div>
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-2" src={GitHub} alt="github.png"/>
                        <p className="my-1">Github</p>
                    </div>
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-2" src={JavaScript} alt="js.png"/>
                        <p className="my-1">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-6" src={TailWind} alt="tailwind.png"/>
                        <p className="my-1">TailWind</p>
                    </div>
                    <div className="shadow-md shadow-[#00001A] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto py-6" src={AWS} alt="aws.png"/>
                        <p>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;