import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#1b2442] text-[#E4E4E4]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3">
          <div>
            <p className="sm:text-right text-3xl text-left font-bold">
                Hi, I'm Euan, this is my portfolio, have a look around.
            </p>
          </div>
          <div>
            <p>
                I'm an aspiring software developer, a recent graduate from Brunel university with a 
                degree in Computer Science, and am currently working as a Measurement Engineer at Accenture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
