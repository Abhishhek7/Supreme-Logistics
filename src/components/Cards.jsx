import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaSearch, FaBox, FaGlobe } from "react-icons/fa"; // Using react-icons for easy icon management
import { Link } from "react-router-dom"; // Import Link for navigation

const Cards = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: "15deg", rotateY: "15deg" },
    visible: { opacity: 1, scale: 1, rotateX: "0deg", rotateY: "0deg", transition: { duration: 1, ease: "easeOut" } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05, rotateX: "2deg", rotateY: "2deg", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const cardContent = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "We ensure your packages reach their destination quickly with our nationwide network.",
      icon: <FaTruck className="text-4xl text-white" />,
    },
    {
      id: 2,
      title: "Reliable Tracking",
      description: "Monitor your shipments at any time with our real-time tracking system.",
      icon: <FaSearch className="text-4xl text-white" />,
    },
    {
      id: 3,
      title: "Secure Packaging",
      description: "We take the utmost care in packaging your items to ensure their safety.",
      icon: <FaBox className="text-4xl text-white" />,
    },
    {
      id: 4,
      title: "PAN India Coverage",
      description: "We provide nationwide coverage, making sure your shipments reach even remote areas.",
      icon: <FaGlobe className="text-4xl text-white" />,
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        {/* Our Services Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
            Discover how we make logistics simple, secure, and efficient for you.
          </p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          className="grid grid-cols-12 gap-6"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          style={{
            perspective: "1500px", // Perspective for 3D effect
          }}
        >
          {/* Left Column: Text Section */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 text-center lg:text-start">
            <div className="bg-gray-50 dark:bg-gray-800 p-12 rounded-lg shadow-xl relative overflow-hidden">
              <motion.h2
                className="text-2xl leading-snug md:text-[40px] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Architecture is a very important thing in building.
              </motion.h2>
              <motion.p
                className="text-lg leading-normal opacity-80 mb-6 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Dominion dry make shall is is greater fish moving set seas open
                man which. Green make appear moveth fruit likeness.
              </motion.p>
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/readmore"
                    className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 rounded transition py-3 px-7 font-normal mb-6 sm:mb-0"
                  >
                    Read more
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: 4 Cards with Content and Icons */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Looping over cards */}
            {cardContent.map((item) => (
              <motion.div
                key={item.id}
                className="w-full bg-gradient-to-r from-indigo-500 to-orange-400 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:rotate-3d hover:scale-105"
                variants={cardHoverVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(10deg)",
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center text-center py-8 px-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-75">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
