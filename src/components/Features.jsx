import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import FeatureImg from "../assets/feature.jpg";
import FeatureImg1 from "../assets/feature1.png";
import {
  faTruck,
  faHeadset,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faTruck,
    title: "Fast and Reliable Delivery",
    desc: "Experience lightning-fast delivery services ensuring your packages reach their destination safely and on time, every single time.",
  },
  {
    icon: faHeadset,
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available round the clock to assist you with queries, concerns, or emergencies at any time.",
  },
  {
    icon: faClock,
    title: "Flexible Scheduling",
    desc: "Enjoy the convenience of flexible pickup and delivery scheduling that works according to your timeline and preferences.",
  },
];

const FeatureItem = ({ feature }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex relative p-4 md:p-6 mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="text-blue-600 rounded-full text-3xl mb-6 mr-6 bg-blue-100 p-4">
      <FontAwesomeIcon icon={feature.icon} />
    </div>
    <div>
      <h4 className="text-2xl font-medium mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.desc}</p>
    </div>
  </motion.div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-14 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-[#0b1727] dark:to-gray-900 text-zinc-900 dark:text-white overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-w-3xl justify-center text-center mb-12 mx-auto"
        >
          <div>
            <h2 className="text-3xl md:text-[45px] font-extrabold text-blue-600 dark:text-blue-400 mb-6">
              Our Delivery & Support Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Elevate your experience with our seamless delivery services and unparalleled 24/7 customer support for peace of mind.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-12 gap-6 justify-end relative">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 lg:col-span-4 lg:col-start-3"
          >
            <div className="h-full">
              <div
                className="bg-center bg-no-repeat bg-cover min-h-[350px] w-full lg:float-right lg:h-full rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${FeatureImg})`,
                }}
              />
              <div className="relative mx-12 -mt-12 rounded-xl overflow-hidden shadow-xl z-20 lg:absolute lg:top-12 lg:bottom-12 right-[75%] left-12 lg:m-0 lg:mt-10">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-xl p-0 pb-28"
                  style={{
                    backgroundImage: `url(${FeatureImg1})`,
                  }}
                >
                  <div className="text-white rounded-xl bg-blue-950 dark:bg-slate-800 leading-relaxed px-4 py-6 lg:px-6 lg:py-12">
                    <h4 className="text-2xl font-medium mb-4">24/7 Help</h4>
                    <p className="opacity-80">
                      Whether it's an inquiry or an urgent matter, our support team is here to assist you any time, any day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
          >
            <div>
              {features.map((feature, i) => (
                <FeatureItem feature={feature} key={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
