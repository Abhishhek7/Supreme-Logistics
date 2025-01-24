import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import chooseImg from '../assets/choose.jpg'

const Choose = () => {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-25 z-0"></div>
      
      <div className="rounded-tl-[40px] rounded-bl-[40px] absolute left-[55%] bottom-0 top-0 w-[50vw] bg-pink-50 hidden lg:block transform -rotate-6"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/2 xl:pr-12 text-center lg:text-start my-12 relative z-10">
            <motion.h2
              className="text-2xl leading-none md:text-[45px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-lg md:text-[22px] leading-normal opacity-80 mb-6">
              It{"’"}s easier to reach your savings goals when you have the
              right savings account. Take a look and find the right one for you!
            </p>
            <div className="mt-12">
              <a
                href="#!"
                className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 rounded-lg shadow-lg transition py-4 px-8 font-normal mb-6 sm:mb-0"
              >
                Explore more{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 transition-transform transform hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Section with Image */}
          <div className="w-full md:w-1/2 relative">
            <motion.img
              src={chooseImg}
              alt="Choose Us"
              className="mx-auto rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
              whileHover={{ scale: 1.05, rotate: "2deg" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
