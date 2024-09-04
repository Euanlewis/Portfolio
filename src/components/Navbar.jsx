import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import Logo from "../assets/EL.png"
import CV from "../assets/Euan_Lewis.pdf";
import {Link} from "react-scroll";



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const CopyEmailLink = () => {
          const email = 'euanlewisjobs@hotmail.com';
          navigator.clipboard.writeText(email).then(() => {
            alert("Euan's email copied to clipboard");
          }).catch(err => {
            console.error("Failed to copy email", err);
          });   
    }

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b2442] text-gray-300">
            
            <div>
                <img src={Logo} alt="Logo Image" style={{width: "70px"}}/>
            </div>

            {/* menu */}  
            
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="uniprojects" smooth={true} duration={500}>
                        Uni-Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
           

            {/*hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


           {/*mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1b2442] flex flex-col justify-center items-center"}>
                <li className="py-6 text-3xl">
                        <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                        Home
                        </Link>
                </li>
                <li className="py-6 text-3xl">
                        <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                        About
                        </Link>
                </li>
                <li className="py-6 text-3xl">
                         <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                        Skills
                        </Link>
                </li>
                <li className="py-6 text-3xl">
                        <Link onClick={handleClick}  to="projects" smooth={true} duration={500}>
                        Projects
                        </Link>
                </li>
                <li className="py-6 text-3xl">
                        <Link onClick={handleClick}  to="uniprojects" smooth={true} duration={500}>
                        Uni-Projects
                        </Link>
                </li>
                <li className="py-6 text-3xl">
                        <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                </li>
            </ul>


            {/*socials */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/euan-l-lewis/" target="_blank">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/Euanlewis" target="_blank">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="#" onClick={CopyEmailLink}> 
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href={CV} target="_blank">
                            CV <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Navbar;