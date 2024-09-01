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
            About
          </p>
        </div>

        <p className="text-base sm:text-xl mt-10 sm:mt-20 leading-relaxed font-light text-gray-300">
          I'm currently a second-year student at the University of Western Ontario, pursuing a dual degree in Electrical Engineering and Artificial Intelligence Systems Engineering. My academic journey has equipped me with a strong foundation in both hardware and AI technologies, with a particular interest in power systems.
        </p>

        <br />

        <p className="text-base sm:text-xl leading-relaxed font-light text-gray-300">
          Outside of academics, I have a passion for basketball, music production, and video editing. I'm also an avid reader and have recently developed an interest in learning Muay Thai. My goal is to secure a summer internship where I can apply my skills and gain hands-on experience in the engineering field. I'm eager to contribute to innovative projects and continue growing both personally and professionally.
        </p>
      </div>
    </div>
  );
};

export default About;
