import React from "react";
import TypedComponent from "../component/TypedComponent";
import {
  DownloadIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import Footer from "../component/Footer";
import Profile from "../assets/images/Profile.png";
import CV from "../assets/CV/cv.pdf"

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center min-h-screen bg-[#0C0413] text-white px-6 md:px-12 pt-20">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col justify-center lg:ml-12 items-center md:items-start text-center md:text-left md:w-1/2">
          <div className="flex justify-center sm:hidden items-center lg:mt-3 mt-3 md:mt-0 w-full md:w-1/2">
            <img
              src={Profile}
              alt="Image"
              className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full object-cover border-2 border-purple-500 
      shadow-lg shadow-purple-600 transition-all duration-300 
      hover:shadow-xl hover:shadow-purple-700 animate-pulse"
            />
          </div>
          <h1 className="text-lg sm:text-4xl font-poppins font-bold mt-10 sm:mt-0 md:text-2xl uppercase text-[#F7B6D5]">
            Hello,
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-2xl font-poppins text-[#C2A 5E4] mt-4 sm:mt-6 md:mt-8">
            I am Masooma Atayee
          </h2>
          <h2 className="text-sm sm:text-2xl md:text-3xl font-bold font-poppins text-[#C2A5E4] shadow-purple-400 mt-2">
            <TypedComponent />
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 font-poppins sm:text-base md:text-md max-w-md">
            A passionate learner, who is
            committed to creating innovative solutions for a better future.
            Explore my projects and let's connect!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="https://www.linkedin.com/in/masooma-atayee-350611302"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-lg shadow-lg bg-transparent border border-purple-800 shadow-purple-900 hover:bg-purple-800 hover:scale-110 transition-all duration-200" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566201606615"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-full shadow-lg bg-transparent border border-purple-800 shadow-purple-900 hover:bg-purple-800 hover:scale-110 transition-all duration-200" />
            </a>
            <a
              href="https://github.com/masooma690"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-full shadow-lg bg-transparent border border-purple-800 shadow-purple-900 hover:bg-purple-800 hover:scale-110 transition-all duration-200" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start mt-6">
            
            
              <button className="border border-purple-700 hover:scale-95 mb-5 font-semibold hover:shadow-xl mt-3 bg-transparent text-center shadow-lg shadow-purple-900 hover:shadow-purple-700 px-5 py-2 rounded-xl text-[#D1D5DB] flex items-center">
                <DownloadIcon className="mr-2" /> <a  href={CV} download="Masooma_Atayee_CV.pdf"> Download CV </a>
              </button>
           
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className=" justify-center md:flex hidden  items-center  mt-0 md:mt-0 w-full md:w-1/2">
          <img
            src={Profile}
            alt="Portfolio Image"
            className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full object-cover border-2 border-purple-500 
      shadow-lg shadow-purple-600 transition-all duration-300 
      hover:shadow-xl hover:shadow-purple-700 animate-pulse"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
