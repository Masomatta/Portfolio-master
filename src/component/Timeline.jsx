import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaMedal } from "react-icons/fa";

const timelineData = [
  { year: "2022", event: "Graduated from high school " },
  { year: "2023", event: "Kankoor Examination Prepration" },
  { year: "2024", event: "Passing Doulingo and TOEFL Test " },
  { year: "2025", event: " learning Online, Web Develpment" },
  { year: "2024", event: "volunteering for Afghan Girls" },
];

const backgroundIcons = [
  { icon: <FaGraduationCap />, top: "10%", left: "15%" },
  { icon: <FaMedal />, top: "50%", left: "80%" },
  { icon: <FaLaptopCode />, top: "70%", left: "20%" },
  { icon: <FaGraduationCap />, top: "85%", left: "60%" },
];

const Timeline = () => {
  return (
    <div className="relative flex mt-8 flex-col items-center justify-center h-auto bg-[#0C0413] overflow-hidden">
      {/* Background Icons */}
      {backgroundIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: index * 0.5 }}
          className="absolute text-fuchsia-300 text-7xl"
          style={{ top: item.top, left: item.left }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Timeline Title */}
      <p className="text-fuchsia-600 text-2xl font-poppins font-bold mb-8 uppercase tracking-wide">
        Timeline
      </p>

      {/* Timeline Container */}
      <div className="relative w-full max-w-xl">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-10  transform -translate-x-1/2 w-1 h-full bg-purple-500"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className={`relative flex flex-col sm:flex-row items-center w-full py-6 ${
              index % 2 === 0
                ? "sm:justify-start sm:pr-10"
                : "sm:justify-end sm:pl-10"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute sm:left-1/2 left-10 transform -translate-x-1/2 w-6 h-6  bg-purple-500 rounded-full border-4 border-[#0C0413] shadow-lg"></div>

            {/* Event Card */}
            <div className=" p-1 sm:left-1/2 left-9 sm:bg-transparent bg-transparent shadow-purple-800 shadow-lg rounded-lg">
              <h3 className="text-md font-semibold text-fuchsia-800">
                {item.year}
              </h3>
              <p className="text-white">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
