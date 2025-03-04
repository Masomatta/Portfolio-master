import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Footer from "../component/Footer";


const projects = [
  {
    title: "Stop Watch",
    description:
      "Using HTML, CSS, and JavaScript, creating a simple Stop Watch",
  
    link: "githublink",
  },
  {
    title: "Calculator",
    description:
      "Using HTML, CSS, and JavaScript, creating a simple Arithmetic Calculator",
    image: "public/images/Projects/Calculator.PNG",
    link: "githublink",
  },
  {
    title: "To-Do List",
    description:
      "Using HTML, CSS, and JavaScript, creating a list for daily activities",
    image: "public/images/Projects/TO Do list.PNG",
    link: "githublink",
  },
  {
    title: "Quiz App",
    description:
      "Using HTML, CSS, and JavaScript, creating an app containing questions",
    image: "public/images/Projects/Quiz app.PNG",
    link: "githublink",
  },
  {
    title: "Counter App",
    description:
      "Using TailwindCSS and React.js, creating a simple counter app",
    image: "public/images/Projects/Counter App.PNG",
    link: "githublink",
  },
  {
    title: "Log In Form",
    description:
      "Using TailwindCSS and React.js, creating a simple login form showcasing data using (useState)",
    image: "public/images/Projects/Log in form2.PNG",
    link: "githublink",
  },
];

const Projects = () => {
  return (
    <>
      <div className="min-h-[80vh] sm:min-h-screen flex flex-col bg-[#0C0413] p-6 mt-10">
        <motion.h2
          className="text-center text-purple-400 text-3xl font-bold mt-10 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-transparent border-2 border-purple-800 rounded-lg text-center shadow-lg shadow-purple-900 cursor-pointer p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(191, 64, 191, 0.7)",
              }}
            >
              <img
                src={project.image}
                className="w-full h-50 sm:h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                alt={project.title}
              />
              <h1 className="text-purple-600 font-semibold mt-3 text-lg">
                {project.title}
              </h1>
              <p className="text-white text-sm mt-1">{project.description}</p>

              <a
                href={project.link}
                className="text-blue-800 mt-3 inline-flex items-center gap-2"
              >
                See More <FaArrowUpRightFromSquare className="text-lg" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
