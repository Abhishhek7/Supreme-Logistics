import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import Testi from "../assets/Teams.jpg"
import Client from "../components/Client";

const testimonialList = [
  {
    title: "Very Good Services",
    author: {
      fullName: "Gurdas Singh",
      picture: Testi,
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "The logistics team provided reliable and fast delivery for our products. We appreciate the attention to detail in packaging and tracking.",
  },
  {
    title: "High Quality Service",
    author: {
      fullName: "Rajesh Kumar",
      picture: Testi,
      designation: "Founder / CEO",
    },
    rating: 4,
    description:
      "Our shipments were handled with utmost care, and we received real-time updates that kept us informed throughout the entire process.",
  },
  {
    title: "Impressive Skills",
    author: {
      fullName: "Pushkar Thakur",
      picture: Testi,
      designation: "Founder / CEO",
    },
    rating: 5,
    description:
      "Excellent service! From pick-up to delivery, everything was seamless. The tracking system made it easy to monitor the progress of each shipment.",
  },
  // New testimonials
  {
    title: "Exceptional Customer Care",
    author: {
      fullName: "Simran Kaur",
      picture: Testi, // Add a picture path or import a new image
      designation: "Marketing Head",
    },
    rating: 4.5,
    description:
      "Their customer support team is always ready to assist. The delivery was fast, and I was updated at every stage. Excellent communication and service.",
  },
  {
    title: "On-Time Delivery",
    author: {
      fullName: "Anil Sharma",
      picture: Testi, // Add a picture path or import a new image
      designation: "Operations Manager",
    },
    rating: 5,
    description:
      "I am extremely satisfied with the timely delivery of our bulk shipments. The logistics team delivered on their promises and made the entire process seamless.",
  },
  {
    title: "Reliable Partner",
    author: {
      fullName: "Aarti Verma",
      picture: Testi, // Add a picture path or import a new image
      designation: "Supply Chain Manager",
    },
    rating: 4,
    description:
      "We have been working with them for several months now, and they consistently deliver our goods securely and on time. We trust them completely for our logistics needs.",
  },
];


const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-200 dark:text-opacity-20"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <div className="mt-6">
    <div>
      <h4 className="text-2xl font-medium mb-1">{testimonial.title}</h4>
      <p className="opacity-50 text-gray-700 mb-6">{testimonial.description}</p>
      <h4 className="mb-1 text-xl font-medium">{testimonial.author.fullName}</h4>
      <Rating rating={testimonial.rating} showLabel={false} />
    </div>
    <img
      src={testimonial.author.picture}
      alt={testimonial.author.fullName}
      className="max-w-full h-auto rounded-full mx-auto border-4 border-gray-300"
      width="110"
    />
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(0);

  const { title, description, author, rating } = testimonialList[index];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setActive(selectedIndex);
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
      setActive((prevIndex) => (prevIndex + 1) % testimonialList.length);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ezy__testimonial6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:mb-6">
          <div className="sm:max-w-lg text-center">
            <h2 className="text-3xl text-blue-700 leading-none md:text-[45px] font-bold mb-4">
              Community Reviews
            </h2>
            <p>
  It’s easier to streamline your logistics operations when you have the right
  logistics partner. 
</p>

          </div>
        </div>

        <div className="flex justify-center text-center">
          <div className="md:max-w-xl">
            <div className="mt-6">
              <div>
                <h4 className="text-2xl font-medium mb-1">{title}</h4>
                <p className="opacity-50 mb-6">{description}</p>
                <h4 className="mb-1 text-xl font-medium">{author.fullName}</h4>
                <Rating rating={rating} showLabel={false} />
              </div>
              <img
                src={author.picture}
                alt={author.fullName}
                className="max-w-full h-auto rounded-full mx-auto border-4 border-gray-300"
                width="110"
              />
            </div>

            <div className="flex justify-center mt-6">
              <span
                className={`${
                  active === 0
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(0)}
              />
              <span
                className={`${
                  active === 1
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(1)}
              ></span>
              <span
                className={`${
                  active === 2
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(2)}
              />
            </div>
          </div>
        </div>
      </div>
      <Client/>
    </section>
  );
};

export default Testimonials;
