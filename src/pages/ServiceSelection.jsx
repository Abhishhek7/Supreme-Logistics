import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faHandHolding,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
  {
    color: "green",
    icon: faBox,
    title: "Premium Packaging",
    description:
      "We use high-quality materials to package your products securely, ensuring they arrive undamaged and intact.",
  },
  {
    color: "blue",
    icon: faHandHolding,
    title: "Careful Handling",
    description:
      "Our team is trained in the best practices for handling delicate or high-value items, minimizing the risk of damage during transit.",
  },
  {
    color: "pink",
    icon: faShieldAlt,
    title: "Safety Assurance",
    description:
      "We implement strict safety protocols at every stage of the logistics process, ensuring your products are protected from any threats.",
  },
];

const ServiceItem = ({ service }) => (
  <div
    className={`bg-white dark:bg-slate-800 h-full shadow-xl rounded-[15px] p-4 lg:px-6 lg:py-8 border-[15px] border-${service.color}-400 border-opacity-60 transform transition-all duration-300 hover:scale-105`}
  >
    <div className="w-20 h-20 rounded-full text-3xl inline-flex justify-center items-center mb-4 text-yellow-600 bg-white shadow-lg dark:bg-slate-900 dark:bg-opacity-80">
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <h4 className="font-medium text-xl mb-3">{service.title}</h4>
    <p className="opacity-80">{service.description}</p>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const ServiceSelection = () => {
  return (
    <section className="ezy__service11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl text-blue-700 leading-none md:text-[45px] font-bold mb-6">
              Safe and Secure Products
            </h2>
            <p className="text-lg opacity-80">
              Our logistics services prioritize the safety and security of your products, ensuring they reach their destination in perfect condition.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 text-center pt-12">
          {serviceList.map((service, i) => (
            <div className="col-span-12 md:col-span-4" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelection;
