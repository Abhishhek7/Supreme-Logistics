import React from 'react';
import { motion } from 'framer-motion';
import ChooseImg from "../assets/Choose2.jpg";  // Ensure you have a relevant image
import { FaTruck, FaTools, FaBusinessTime, FaNetworkWired, FaClipboardCheck, FaShippingFast, FaWarehouse } from 'react-icons/fa';

const ChooseUs = () => {
  return (
    <>
      {/* Banner Section without Gradient Overlay */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${ChooseImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh", // Increased height for more impact
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
          style={{ zIndex: 1 }}
        ></div>

        <div
          className="container mx-auto px-6 lg:px-20 flex items-center justify-start text-left relative z-10"
          style={{ paddingTop: "10%" }}
        >
          <motion.div
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            style={{
              textShadow:
                "4px 4px 12px rgba(0, 0, 0, 0.7), -4px -4px 12px rgba(0, 0, 0, 0.5)",
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-4">Why Choose Us?</h1>
            <h2 className="text-lg sm:text-xl mb-2">Seamless Logistics, Nationwide Delivery.</h2>
            <h2 className="text-lg sm:text-xl mb-2">End-to-End Solutions Tailored for Your Needs.</h2>
            <h2 className="text-lg sm:text-xl">Commitment to Excellence and Unmatched Security.</h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section with Gradient Overlay */}
      <div className="bg-gradient-to-r from-white to-gray-200 py-20 px-6 sm:px-8 lg:px-12 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-extrabold text-blue-600 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Us?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At <strong>Supreme Logistics</strong>, we offer holistic logistics solutions across India, specializing in a wide range of services designed to meet all your operational needs.
          </motion.p>

          <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  {/* Transportation */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaTruck size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">Transportation</div>
    <p className="text-gray-600">
    Seamless nationwide delivery solutions.
    </p>
  </motion.div>

  {/* ATM Shifting */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaTools size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">ATM Shifting</div>
    <p className="text-gray-600">
    Secure and efficient ATM relocations.
    </p>
  </motion.div>

  {/* Grouting/De-Grouting */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaBusinessTime size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">Grouting/De-Grouting</div>
    <p className="text-gray-600">
    Specialized solutions for structural integrity.

    </p>
  </motion.div>

  {/* Repair and Maintenance */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaTools size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">Repair and Maintenance</div>
    <p className="text-gray-600">
    Extending the lifespan of assets.
    </p>
  </motion.div>

  {/* Dismantling */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaNetworkWired size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">Dismantling</div>
    <p className="text-gray-600">
    Safe and systematic machinery breakdown.
    </p>
  </motion.div>

  {/* Network Management */}
  <motion.div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
    <div className="text-center text-blue-600 mb-4">
      <FaClipboardCheck size={40} />
    </div>
    <div className="text-2xl font-semibold text-gray-800 mb-4">Network Management</div>
    <p className="text-gray-600">
    Reliable communication solutions.
    </p>
  </motion.div>
</motion.div>


          {/* Highlighted Benefits Section */}
          <motion.div
            className="mt-16 border-4 border-blue-600 py-8 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
              Why Partner with Us?
            </h3>

            <div className="flex flex-wrap justify-center space-x-6">
              {[
                "AMC and FLM Management",
                "Best-in-Class Tracking Systems",
                "Easy Transportation Solutions",
                "Unparalleled Safety and Security",
                "Precision Packing for Absolute Safety",
                "End-to-End Shifting and Relocation Services",
                "One-Stop Logistics Solutions",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-lg text-white bg-purple-600 px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Section */}
          <div className="mt-12 text-center">
            <motion.p
              className="text-lg text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              As a leading logistics service provider in the banking rollout division, we offer end-to-end supply chain solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
