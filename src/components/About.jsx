import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="text-base sm:text-xl mt-10 sm:mt-20 leading-relaxed font-light text-gray-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Academic Background</h2>
          <p className="mt-4">
            I'm currently a <span className="font-bold text-gray-100">second-year student</span> at the University of Western Ontario, pursuing a dual degree in <span className="font-semibold text-white">Electrical Engineering</span> and <span className="font-semibold text-white">Artificial Intelligence Systems Engineering</span>. My academic journey has equipped me with a strong foundation in both hardware and AI technologies, with a particular interest in <span className="font-semibold text-white">power systems</span>.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 sm:mt-16">Interests and Hobbies</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Basketball</li>
            <li>Music production</li>
            <li>Video editing</li>
            <li>Reading</li>
            <li>Learning Muay Thai</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 sm:mt-16">Career Goals</h2>
          <p className="mt-4">
            My goal is to secure a <span className="font-semibold text-white">summer internship</span> where I can apply my skills and gain hands-on experience in the engineering field. I'm eager to contribute to innovative projects and continue growing both personally and professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
