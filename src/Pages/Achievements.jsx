import { useState, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Class from "../assets/images/class.jpg"
import speak from "../assets/images/motivational speak.jpg"
import mentee from "../assets/images/mentee feadback.jpg"
import toefl from "../assets/images/TOEFL.jpg"
import danishmand from "../assets/images/danishmand-e-Jawan.jpg"
import certi1 from "../assets/images/learnquest.jpg"
import certi2 from "../assets/images/html,css,javascript.jpg"
import certi3 from "../assets/images/FemsTech.jpg"
import certi5 from "../assets/images/python.png"
import certi6 from "../assets/images/AI Fundemantals.jpg"



// Lazy Loading for Footer
const Footer = lazy(() => import("../component/Footer"));

const certificates = [
  { id: 1, image: certi1, title: "Online Course Basics of Computer Science" },
  { id: 2, image: certi2, title: "Coursera Online class, HTML,CSS and JavaScript" },
  { id: 3, image: certi3, title: "TOEFL Prepration class" },
  { id: 4, image: certi5, title: "Python Basics Online Class" },
  { id: 5, image: certi6, title: "AI Fundemantals" },
]

const activities = [
  { id: 1, image: danishmand, description: "Holding the second position among all private schools in Kabul" },
  { id: 2, image: toefl, description: "Holding the First position among 25 students, being sponsored by FemsTech Worldwide" },
  { id: 3, image: speak, description: "Winning the Speech Contest and motivating students by telling the story of Fredrick Douglass" },
  { id: 4, image: Class, description: "Mentoring Afghan Girls, teaching Computer basics" },
  { id: 5, image: mentee, description: "One of my mentee's Feedback" },
];

const CertificateItem = memo(({ cert }) => (
  <motion.div layout className="bg-purple-950 p-2 rounded-md shadow-lg">
    <img src={cert.image} alt={cert.title} className="w-full h-60 object-cover rounded-md" loading="lazy" />
    <h3 className="mt-1 font-semibold text-center">{cert.title}</h3>
  </motion.div>
));

const ActivityItem = memo(({ activity }) => (
  <motion.div layout className="bg-purple-950 p-3 rounded-md shadow-lg text-center">
    <img src={activity.image} className="w-full h-60 object-cover" loading="lazy" />
    <p className="mt-2 text-gray-300">{activity.description}</p>
  </motion.div>
));

const Achievements = () => {
  const [category, setCategory] = useState("certificates");

  return (
    <>
      <div className="min-h-screen bg-[#0C0413] text-white py-12 px-6">
        <div className="flex justify-center mb-8 mt-10 space-x-8">
          {["certificates", "activities"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`relative px-4 pb-2 text-lg font-semibold transition-all ${
                category === item ? "text-purple-400" : "text-white"
              } hover:text-fuchsia-500`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {category === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-1/2 bottom-0 w-3/4 h-1.5 bg-purple-600 rounded-full transform -translate-x-1/2 transition-all duration-300 ease-in-out"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {category === "certificates" && (
            <motion.div
              key="certificates"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              {certificates.map((cert) => (
                <CertificateItem key={cert.id} cert={cert} />
              ))}
            </motion.div>
          )}

          {category === "activities" && (
            <motion.div
              key="activities"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              {activities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lazy Loading for Footer */}
      <Suspense fallback={<div className="text-white text-center py-4">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Achievements;
