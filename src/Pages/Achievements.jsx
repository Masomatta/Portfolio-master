import { useState, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Class from "../assets/images/class.jpg";
import speak from "../assets/images/motivational speak.jpg";
import mentee from "../assets/images/mentee feadback.jpg";
import danishmand from "../assets/images/danishmand-e-Jawan.jpg";

const Footer = lazy(() => import("../component/Footer"));

const certificates = [
  { id: 1, title: "Online Learning Certifications", description: "››" },
  { id: 2, title: "Fundamentals of Computer Science", link: "https://coursera.org/verify/XEYFWQW1RCJP" },
  { id: 3, title: "HTML, CSS and JavaScript", link: "https://coursera.org/verify/3MBBEI6XWVNX" },
  { id: 4, title: "TOEFL Preparation Class" },
  { id: 5, title: "Python Basics", link: "https://coursera.org/verify/RGYCN7Y1PRYS" },
  { id: 6, title: "AI Fundamentals (IBM)", link: "https://www.credly.com/badges/bd819009-8c5d-4b6e-904a-2377a101270f" },
];

const activities = [
  { id: 1, image: danishmand, description: "2nd place in Danishmand-e-Jawan Competition" },
  { id: 2, image: speak, description: "Won Speech Contest" },
  { id: 3, image: Class, description: "Mricale wings Program, voluntarily teaching Afghan Girls Computer Basics" },
  { id: 4, image: mentee, description: "Mentee's Feedback, consulting to pass TOEFL test " },
];

const CertificateItem = memo(({ cert, isFirst }) => (
  <motion.div
    layout
    className={`p-4 rounded-md shadow-lg text-center transition-transform duration-300 ${
      isFirst ? "bg-gradient-to-r from-[#330f53] to-purple-950 scale-105 font-semibold" : "bg-[#220938]"
    } text-white`}
  >
    <h3 className={`mt-1 ${isFirst ? "text-md" : "text-sm"} font-semibold`}>{cert.title}</h3>
    {cert.description && <p className="mt-1 text-fuchsia-600 text-4xl">{cert.description}</p>}
    {cert.link && (
      <p className="mt-2">
        <a href={cert.link} className={`text-fuchsia-700 ${isFirst ? "font-bold underline" : ""}`}>
          View Certificate
        </a>
      </p>
    )}
  </motion.div>
));

const ActivityItem = memo(({ activity }) => (
  <motion.div layout className="bg-purple-950 p-2 rounded-md shadow-lg text-center">
    <img src={activity.image} className="w-full h-60 object-cover" loading="lazy" />
    <p className="mt-3 text-gray-300">{activity.description}</p>
  </motion.div>
));

const Achievements = () => {
  const [category, setCategory] = useState("certificates");

  const tabs = ["certificates", "activities"];
  const renderList =
    category === "certificates"
      ? certificates.map((cert, i) => <CertificateItem key={cert.id} cert={cert} isFirst={i === 0} />)
      : activities.map((activity) => <ActivityItem key={activity.id} activity={activity} />);

  return (
    <>
      <div className="min-h-screen bg-[#0C0413] text-white py-12 px-6">
        <div className="flex justify-center mb-8 mt-10 space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCategory(tab)}
              className={`relative px-4 pb-2 text-lg font-semibold transition-all ${
                category === tab ? "text-purple-400" : "text-white"
              } hover:text-fuchsia-500`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {category === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-1/2 bottom-0 w-3/4 h-1.5 bg-purple-600 rounded-full transform -translate-x-1/2"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {renderList}
          </motion.div>
        </AnimatePresence>
      </div>

      <Suspense fallback={<div className="text-white text-center py-4">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Achievements;
