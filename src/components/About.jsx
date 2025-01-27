import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/specs.jpg"; // Replace with the path to your image

const About = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: "15deg" },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: "0deg",
      transition: { duration: 1.2, ease: "easeOut" },
    },
    hover: { scale: 1.05, rotateY: "-5deg", transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-28 bg-gray-50 dark:bg-[#0b1727] text-gray-900 dark:text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* About Us Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
            Learn more about how we redefine logistics with efficiency and care.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-3xl md:text-[42px] font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
              Delivering Excellence in Logistics
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              At <span className="font-semibold">Supreme Logistics</span>, we specialize in reliable and efficient delivery solutions. From same-day deliveries to managing supply chains, we ensure smooth, fast, and secure logistics across the country.
            </p>
            <div>
              <a
                href="#!"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={aboutImage}
              alt="Logistics in Action"
              className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
            {/* Overlay Shapes */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 rounded-full blur-lg opacity-40 transform -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-lg opacity-40 transform translate-x-10 translate-y-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
