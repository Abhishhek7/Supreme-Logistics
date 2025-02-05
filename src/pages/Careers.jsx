import React from "react";
import { motion } from "framer-motion";
import careerImg from "../assets/career.jpg";
import cultureImg from "../assets/culture.jpg";
import benefitsImg from "../assets/benefit.jpg";

const positions = [
  { title: "Field Manager", description: "Manage field operations to ensure efficient logistics delivery." },
  { title: "Sales/Marketing", description: "Promote logistics solutions and drive business growth." },
  { title: "Customer Support", description: "Assist clients with inquiries and resolve issues promptly." },
  { title: "Office Executive", description: "Oversee office operations and improve logistics efficiency." },
];

const benefits = [
  "Comprehensive health coverage",
  "Flexible work hours and remote options",
  "Professional development opportunities",
  "Generous vacation policy",
  "Collaborative and inclusive environment",
];

const CareerCard = ({ content, index, className }) => (
  <motion.div
    className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {content.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{content.description}</p>
  </motion.div>
);

const Careers = () => {
  return (
    <div className="careers-page">
      {/* Career Page Banner with Animation */}
      <motion.div
  className="relative overflow-hidden h-[60vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${careerImg})` }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  {/* Adjusted overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/0"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-center md:justify-start text-center md:text-left h-full relative z-10">
    {/* Text container with improved visibility */}
    <motion.div
      className="text-white text-2xl sm:text-4xl md:text-5xl font-bold  p-4 rounded-lg"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Your Career in Logistics Starts Here</h1>
      <h2 className="text-lg sm:text-xl mt-2">
        Join a team that’s driving the future of logistics.
      </h2>
    </motion.div>
  </div>
</motion.div>


      {/* Let's Work Together Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-[#0b1727] dark:to-[#10203a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid gap-8 md:grid-cols-12 items-center">
          {/* Left Content */}
          <motion.div
            className="md:col-span-5 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Let's Work Together
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Join our team to shape the future of logistics and create impactful solutions globally.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Explore opportunities tailored for mid-level developers, industry experts, and passionate innovators.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="md:col-span-7"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Current Opportunities
              </h2>
              <div className="grid gap-4">
                {positions.map((content, i) => (
                  <CareerCard
                    content={content}
                    key={i}
                    index={i + 1}
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid gap-8 md:grid-cols-12 items-center">
          <motion.div
            className="md:col-span-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={cultureImg} alt="Our Culture" className="rounded-lg shadow-lg w-full" />
          </motion.div>
          <motion.div
            className="md:col-span-6 text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Culture
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Collaboration, innovation, and diversity define who we are. We cultivate an environment where ideas flourish and teamwork drives success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Benefits of Joining Us
          </h2>
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <motion.div
              className="md:col-span-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={benefitsImg} alt="Benefits" className="rounded-lg shadow-lg w-full" />
            </motion.div>
            <motion.div
              className="md:col-span-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
