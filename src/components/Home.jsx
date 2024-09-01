import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
   return (
      <div 
         name="home" 
         className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
      >
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-10">
            <div className="flex flex-col justify-center h-full">
               <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white">
                  Hi! I'm Vivek Aruja
               </h2>
               <p className="text-white py-2 sm:py-4 max-w-md">
                  I’m a second-year electrical engineering student specializing in AI Technology at the University of Western Ontario. 
                  Currently, I am looking to broaden my horizons and learn about my interests and hobbies.
               </p>

               <div>
                  <Link 
                     to="portfolio" 
                     smooth 
                     duration={500} 
                     className="group text-white w-fit px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                  >
                     Portfolio
                     <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
                     </span>
                  </Link>
               </div>
            </div>
            <div>
               <img 
                  src={HeroImage} 
                  alt="my profile" 
                  className="rounded-2xl mx-auto w-2/3 sm:w-full md:ml-10" 
                  loading="lazy"
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
