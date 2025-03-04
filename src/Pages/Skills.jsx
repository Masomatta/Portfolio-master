import { useEffect, useState } from "react";
import Footer from "../component/Footer";

function ProgressBar({ percentage }) {
  const [progress, setProgress] = useState(0);

  // Animate the progress
  useEffect(() => {
    if (progress < percentage) {
      setTimeout(() => setProgress(progress + 1), 10); // animation effect
    }
  }, [progress, percentage]);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold"></span>
        <span className="text-sm font-semibold">{progress}%</span>
      </div>
      <div className="w-full bg-transparent rounded-full backdrop-blur-md border shadow-purple-700 shadow-md border-fuchsia-600 h-2.5">
        <div
          className={`bg-gradient-to-r from-fuchsia-700 to-purple-900 h-2 rounded-full`}
          style={{ width: `${progress}%`, transition: "width 0.5s ease" }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <div className="p-8 min-h-screen  bg-[#0C0413] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8">
        {/* Digital Skills Progress Bar */}
        <div className=" backdrop-blur-3xl bg-[#190729] mt-20 m-20 sm:ml-30 ml-0 sm:-mr-20 -mr-0 sm:mt-14  shadow-lg grid grid-cols-1 p-6 rounded-xl">
          <h3 className="font-semibold text-white"> Digital Skills</h3>
          <div className="text-white">
            <div className="flex flex-col">
              <span className=" text-white">HTML</span>
              <ProgressBar percentage={100} />
            </div>
            <div className="flex flex-col">
              <span className=" text-white">CSS</span>
              <ProgressBar percentage={85} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">JavaScript</span>
              <ProgressBar percentage={75} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">React</span>
              <ProgressBar percentage={70} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">TailwindCSS</span>
              <ProgressBar percentage={90} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">Python</span>
              <ProgressBar percentage={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">Photoshop</span>
              <ProgressBar percentage={90} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">illustrator</span>
              <ProgressBar percentage={80} />
            </div>
          </div>
        </div>

        {/* Combined Language and Personal Skills */}
        <div
          className="bg-[#190729]  
       mt-0 sm:m-18 m-0 sm:ml-70 ml-0 sm:-mr-70 -mr-0 sm:mt-14 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1
       p-6 rounded-xl"
        >
          <div className=" text-white">
            {/* Language Skills */}
            <h3 className="font-semibold text-white"> Language Skills</h3>
            <ul>
              <li className="font-semibold">
                Persian
                <ProgressBar percentage={90} />
              </li>
              <li className="font-semibold">
                English
                <ProgressBar percentage={90} />
              </li>
              <li className="font-semibold">
                Turkish
                <ProgressBar percentage={40} />
              </li>
            </ul>

            {/* Personal Skills */}
            <h4 className="mt-6 font-semibold text-white"> Personal Skills</h4>
            <ul>
              <li className="font-semibold">
                Management
                <ProgressBar percentage={90} />
              </li>
              <li className="font-semibold">
                Leadership
                <ProgressBar percentage={89} />
              </li>
              <li className="font-semibold">
                Teamwork
                <ProgressBar percentage={70} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
