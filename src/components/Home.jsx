import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full  h-screen pt-[50px] bg-[#1b2442]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#E4E4E4]">
          Euan Lewis
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#636363]">
          A Software Developer.
        </h2>
        <p className="text-[#E4E4E4] py-4 max-w-[700px]">
          An aspiring software developer, with good fundamental skills and
          understanding of of software and its development process. With a
          degree in Computer Science and experience building full-stack websites
          as well as Andriod mobile applications. Known languages and framworks
          include:
          <ul>
            <li>&#8226; Java</li>
            <li>&#8226; Javascript</li>
            <li>&#8226; React</li>
            <li>&#8226; Spring Boot</li>
            <li>&#8226; Tailwind</li>
          </ul>
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-green-500 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#232323] hover:border-green-500">
              View Projects
              <span className="group-hover:ml-5 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
