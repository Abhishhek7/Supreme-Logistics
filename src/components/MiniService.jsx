import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import miniImg from "../assets/mini1.jpg";
import {
  faTruck,
  faWarehouse,
  faMapMarkedAlt,
  faShippingFast,
  faBoxes,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

// Features data
const features = [
  {
    icon: faTruck,
    title: "Fast Delivery",
    desc: "Ensure on-time delivery with our fleet of modern vehicles and experienced drivers.",
  },
  {
    icon: faWarehouse,
    title: "Storage Solutions",
    desc: "Secure and scalable warehousing solutions to fit your business needs.",
  },
  {
    icon: faMapMarkedAlt,
    title: "Real-Time Tracking",
    desc: "Monitor your shipments in real time with advanced GPS technology.",
  },
  {
    icon: faShippingFast,
    title: "Global Shipping",
    desc: "Expand your reach with our reliable international shipping services.",
  },
  {
    icon: faBoxes,
    title: "Efficient Packaging",
    desc: "Custom packaging solutions to keep your goods safe during transit.",
  },
  {
    icon: faClock,
    title: "24/7 Support",
    desc: "Our team is available around the clock to address your logistics concerns.",
  },
];

// FeatureItem component to display each feature
const FeatureItem = ({ feature }) => {
  return (
    <div
      className="flex bg-gray-100 shadow-lg dark:bg-gray-700 relative p-4 md:p-6 xl:p-8 mb-1 lg:mb-1 transform transition-transform hover:scale-105 hover:shadow-2xl hover:rotate-1 duration-300 rounded-lg group motion-safe:animate__fadeIn"
    >
      <div className="text-blue-600 rounded-full text-[42px] mb-6 mr-6">
        <FontAwesomeIcon icon={feature.icon} />
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {feature.title}
        </h4>
        <p className="opacity-70 text-gray-700 dark:text-gray-300">
          {feature.desc}
        </p>
      </div>
      {/* Overlay effect on card */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

// Main MiniService component
const MiniService = () => {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-3xl justify-center text-center mb-12 mx-auto">
          <div>
          <h2 className="text-2xl leading-none font-bold md:text-[45px] mb-6 motion-safe:animate__fadeIn text-blue-600 tracking-wide uppercase">
  Logistics Services
</h2>
            <p className="text-lg mb-6 motion-safe:animate__fadeIn delay-100">
              Streamline your supply chain with our comprehensive logistics
              solutions tailored to your business needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 md:pt-12 lg:gap-6">
          {/* Image Section with overlay */}
          <div className="col-span-3 lg:col-span-1 relative motion-safe:animate__zoomIn">
            <div className="absolute inset-0 bg-black opacity-30 rounded-[20px]" />
            <div
              className="bg-center bg-no-repeat bg-cover rounded-[20px] min-h-[350px] w-full float-right shadow-xl h-full transform transition-transform hover:scale-110 hover:shadow-2xl duration-300"
              style={{
                backgroundImage: `url(${miniImg})`,
              }}
            />
          </div>

          {/* Features Section */}
          <div className="col-span-3 lg:col-span-2">
            <div className="xl:ml-6">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div
                    className="col-span-2 lg:col-span-1"
                    key={i}
                    style={{
                      perspective: "1000px",
                    }}
                  >
                    <FeatureItem feature={feature} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniService;
