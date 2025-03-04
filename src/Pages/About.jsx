import React from "react";
import { motion } from "framer-motion";

import {
  Book,
  Bot,
  Brain,
  Code,
  Dumbbell,
  Languages,
  LanguagesIcon,
} from "lucide-react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import Footer from "../component/Footer";
import Chart from "./Chart";

const About = () => {
  return (
    <>
      <div className="min-h-[80vh] sm:min-h-screen bg-[#0C0413] text-white flex flex-col items-center justify-center px-6 py-10">
        {/* Introduction and Hobbies */}
        <motion.div
          className="flex flex-col md:flex-row items-center mt-13 justify-center gap-8 w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/*Introduction Section*/}
          <motion.div
            className="p-6 md:w-1/2 sm:w-1/2 rounded-lg shadow-lg bg-transparent border border-purple-800 
                       shadow-purple-900 text-center md:text-left"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="public/Photos/Photo.jpg"
              alt="Masooma"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto md:mx-0 mb-4 
                         border-2 border-purple-900 object-cover"
            />

            <p className="text-sm text-justify">
              I’m Masooma, a passionate tech enthusiast and lifelong learner
              dedicated to education, innovation, and community service. I
              actively contribute as a volunteer member at Generation of
              Thinkers and a mentor at Bold Her Voice, where I empower students
              through education and mentorship.
              <br />
              Academically, I have successfully passed the TOEFL and am
              currently preparing for the SAT through online classes at
              Afghanistan Development Academy. Alongside my studies, I am
              expanding my digital skills by learning web development, driven by
              my deep passion for technology and innovation.
            </p>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            className="flex flex-col gap-5 md:w-1/4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Hobbies */}
            <div
              className="p-2 bg-transparent border border-purple-800 rounded-lg 
                            text-center shadow-lg shadow-purple-900"
            >
              <h3 className="text-md font-semibold text-fuchsia-600">
                Hobbies
              </h3>
              <p className=" text-white flex font-poppins gap-2">
              
                <Book className="text-fuchsia-500" /> Reading Books
              </p>
              <p className=" text-white flex gap-2">
                {" "}
                <LanguagesIcon className="text-fuchsia-500" />
                Learning New Languages
              </p>
              <p className=" text-white flex gap-2">
                {" "}
                <Dumbbell className="text-fuchsia-500" />
                Martial Arts & Fitness
              </p>
            </div>

            {/*Interests*/}
            <div className="p-2 bg-transparent border border-purple-800 rounded-lg text-center shadow-lg shadow-purple-900">
              <h3 className="text-md font-semibold text-fuchsia-600">
                Interests
              </h3>
              <p className="text-white flex gap-2">
                {" "}
                <Bot className="text-fuchsia-500" />
                AI
              </p>
              <p className="text-white flex gap-2">
                {" "}
                <Code className="text-fuchsia-500" />
                Web Development
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <Chart/>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
