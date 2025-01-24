import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Team from "../components/Team";
import Faq from "../components/Faq";
import Stats from "../components/Stats";
import AboutImg from "../assets/AboutBanner1.jpg";
import AboutBeImg from "../assets/AboutBelow.jpg";
import AboutBBImg from "../assets/aboutbelow2.jpg";

const Aboutus = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX / window.innerWidth - 0.5,
        y: clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* About Us Banner with Animation */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        <div
          className="container mx-auto px-6 lg:px-20 flex items-center justify-start text-left relative z-10"
          style={{ paddingTop: "5%" }}
        >
          <motion.div
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{
              textShadow:
                "4px 4px 12px rgba(0, 0, 0, 0.7), -4px -4px 12px rgba(0, 0, 0, 0.5)",
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-2">Innovative Logistics Solutions</h1>
            <h2 className="mb-2 text-lg sm:text-xl">Driving efficiency and reliability in every delivery.</h2>
            <h2 className="mb-2 text-lg sm:text-xl">Optimizing your supply chain, one step at a time.</h2>
            <h2 className="text-lg sm:text-xl">Pioneering sustainable and secure solutions for all industries.</h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Section 1 with Hover Effects */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            {/* Text Content */}
            <motion.div
              className="md:order-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Reliable Logistics Services for Your Business
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Our logistics services provide efficient and secure transportation solutions for businesses of all sizes...
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 transform hover:scale-105"
              >
                Learn More About Our Services
              </Link>
            </motion.div>

            {/* Image Section with 3D Hover Effect */}
            <motion.div
              className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2"
              style={{
                transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${
                  mousePosition.x * 10
                }deg)`,
                transition: "transform 0.1s ease-out",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative max-w-md ml-auto">
                <div className="overflow-hidden aspect-w-4 aspect-h-4">
                  <img
                    className="object-cover rounded-lg w-full h-full transition-transform duration-300 transform hover:scale-105"
                    src={AboutBeImg}
                    alt="Logistics Image"
                    width={450}
                    height={450}
                  />
                </div>
              </div>

              {/* Statistics Box */}
              <motion.div
                className="absolute bottom-0 -left-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="relative bg-violet-400 rounded-lg p-1 sm:p-2 shadow-lg">
                  <div className="py-1 px-2 sm:py-2 sm:px-4">
                    <FiMessageCircle className="w-5 h-5 bg-transparent text-white fill-white" />
                    <span className="block mt-1 text-md font-bold text-black sm:mt-2 sm:text-xl lg:text-2xl">
                      500,000+
                    </span>
                    <span className="block mt-1 text-xs font-medium leading-snug text-amber-900 sm:text-xs">
                      Shipments Delivered
                      <br />
                      in 2024
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 with Fade-in Animation */}
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <motion.div
              className="md:order-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Global Coverage, Local Expertise
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                With a vast network of logistics partners and experts worldwide, we offer global shipping and supply chain solutions...
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 transform hover:scale-105"
              >
                Learn More About Our Global Solutions
              </Link>
            </motion.div>

            {/* Image Section with 3D Hover Effect */}
            <motion.div
              className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2"
              style={{
                transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${
                  mousePosition.x * 10
                }deg)`,
                transition: "transform 0.1s ease-out",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative max-w-md ml-auto">
                <div className="overflow-hidden aspect-w-4 aspect-h-4">
                  <img
                    className="object-cover rounded-lg w-full h-full transition-transform duration-300 transform hover:scale-105"
                    src={AboutBBImg}
                    alt="Global Logistics"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Stats/>
<Faq/>

      <Team />
    </>
  );
};

export default Aboutus;
