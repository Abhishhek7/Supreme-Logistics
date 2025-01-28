import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faTruck, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import ServiceImg from "../assets/serviceBanner.jpg";
import { motion } from "framer-motion";
import delievery from "../assets/Delievery.jpg";
import delievery1 from "../assets/Delivery1.jpg";
import PropTypes from "prop-types";
import servicebelowImg from "../assets/servicebelow.jpg";
import ServiceSelection from "../pages/ServiceSelection";

const serviceList = [
  {
    color: "red",
    icon: faShippingFast,
    title: "Global Coverage",
    description:
      "Efficient worldwide shipping and guidance.",
  },
  {
    color: "blue",
    icon: faTruck,
    title: "Local Expertise",
    description:
      "Tailored solutions for regional markets.",
  },
  {
    color: "yellow",
    icon: faWarehouse,
    title: "Speed and Reliability",
    description:
      "Fast, reliable delivery solutions.",
  },
  {
    color: "red",
    icon: faTruck,
    title: "Flexible Logistics Solutions",
    description:
      "Adaptable services for unique needs.",
  },
  {
    color: "blue",
    icon: faShippingFast,
    title: "Efficient Supply Chain",
    description:
      "Optimized supply chain and inventory.",
  },
  {
    color: "yellow",
    icon: faWarehouse,
    title: "24/7 Customer Support",
    description:
      "Access expert help anytime, anywhere.",
  },
];

const ServiceItem = ({ service, isRightAlign }) => (
  <div className={`flex mt-12 ${isRightAlign && "lg:text-end"}`}>
    <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
      <span
        className={`bg-${service.color}-500 text-white w-16 h-16 rounded-full text-3xl inline-flex justify-center items-center mb-6`}
      >
        <FontAwesomeIcon icon={service.icon} />
      </span>
    </div>
    <div>
      <h4 className="text-2xl font-medium mb-4">{service.title}</h4>
      <p className="opacity-80">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
  isRightAlign: PropTypes.bool,
};

ServiceItem.defaultProps = {
  isRightAlign: false,
};

const stories = [
  {
    title: "Streamlining Success",
    description:
      "Reliable logistics services are the backbone of any successful business, ensuring that products are delivered on time and in perfect condition. By leveraging a strong network of transportation options, advanced tracking systems, and efficient inventory management, businesses can streamline their operations.",
    image: delievery,
  },
  {
    title: "Quick Delivery",
    description:
      "Quick delivery is crucial in today’s fast-paced world, and we are committed to ensuring your products reach their destination in the shortest time possible. We prioritize speed without compromising on quality.",
    image: delievery1,
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <>
      <div
        className={`col-span-12 md:col-span-5 ${
          index % 2 === 0
            ? "order-1 md:order-2 md:col-start-7"
            : "order-2 md:order-1 md:col-start-2"
        }`}
      >
        <div
          className={`flex flex-col justify-center ${
            index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
          }`}
        >
          <motion.h4
            className="text-2xl font-bold mb-4 text-blue-700"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h4>
          <motion.p
            className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0
            ? "order-1 md:col-start-2"
            : "order-1 md:order-2 md:col-start-7"
        } col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0`}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          <img
            src={image}
            alt={title}
            className="max-w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
    </>
  );
};

StoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Services = () => {
  return (
    <>
      {/* Service Banner with Animation */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${ServiceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        {/* Banner Content */}
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
            <h1 className="mb-2">Comprehensive Logistics Services</h1>
            <h2 className="text-lg sm:text-xl">
              Global Coverage, Local Expertise for Seamless Business Operations.
            </h2>
          </motion.div>
        </div>
      </motion.div>

      <section className="ezy__about6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 justify-center text-center mb-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="text-3xl font-bold leading-tight text-blue-700 sm:text-4xl lg:text-5xl">
                Reliable Logistics Services for Your Business
              </h2>
            </div>
          </div>

          {stories.map((item, i) => (
            <div
              className="grid grid-cols-12 justify-center items-center mt-12"
              key={i}
            >
              <StoryItem item={item} index={i + 1} />
            </div>
          ))}
        </div>

        {/* Service Section with Updated Content */}
        {/* Service Section with Updated Content */}
<div className="container px-4 mx-auto">
  <div className="flex items-center justify-center mb-6 sm:mb-12">
    <div className="w-full max-w-xl text-center">
    <h2 className="text-3xl font-bold leading-tight mt-4  text-blue-700 sm:text-4xl lg:text-5xl">
                Global Coverage, Local Expertise
              </h2>
    </div>
  </div>

  <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-12">
    {/* Image Section */}
    <div className="col-span-3 lg:col-span-1 lg:order-2">
      <motion.div
        className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px] shadow-lg"
        style={{
          backgroundImage:
            `url(${servicebelowImg})`,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      ></motion.div>
    </div>

    {/* Content Cards for the First Group */}
    <div className="col-span-3 lg:col-span-1 ezy__service13-list">
      <div className="lg:my-12 grid grid-cols-1 gap-4">
        {serviceList.slice(3, 6).map((service, i) => (
          <motion.div
            className="flex flex-col items-center p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <span
              className={`bg-${service.color}-500 text-white w-12 h-12 rounded-full flex justify-center items-center mb-4`}
            >
              <FontAwesomeIcon icon={service.icon} />
            </span>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Content Cards for the Second Group */}
    <div className="col-span-3 lg:col-span-1 ezy__service13-list lg:order-3">
      <div className="lg:my-12 grid grid-cols-1 gap-4">
        {serviceList.slice(0, 3).map((service, i) => (
          <motion.div
            className="flex flex-col items-center p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <span
              className={`bg-${service.color}-500 text-white w-12 h-12 rounded-full flex justify-center items-center mb-4`}
            >
              <FontAwesomeIcon icon={service.icon} />
            </span>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
<ServiceSelection/>
      </section>
    </>
  );
};

export default Services;
