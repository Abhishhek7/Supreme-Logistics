import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Data for the cards
const cards = [
  {
    count: 50000 ,
    title: "Trade Lane Covered",
  },
  {
    count: 43,
    title: "Countries",
  },
  {
    count: 641,
    title: "Completed Fund",
  },
  {
    count: 10000,
    title: "Employees",
  },
];

// Card item component
const CardItem = ({ item }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount((prev) => {
        if (prev < item.count) {
          return prev + 1;
        }
        clearInterval(interval); // Stop the interval when the target count is reached
        return prev;
      });
    }, 5); // Adjust the interval speed (in ms) to control the animation speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [item.count]);

  return (
    <div>
      <motion.h3
        className="text-[45px] text-blue-600 font-black mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {currentCount}
      </motion.h3>
      <h5 className="text-lg font-medium opacity-80">{item.title}</h5>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

// Services component
const Service = () => {
  return (
    <section className="ezy__numbers7 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-[45px] font-bold mb-6">
            Crud much unstint far camel inanimately.
          </h1>
          <p className="text-lg opacity-80 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
            perferendis nihil cupiditate aliquid qui exercitationem labore
            veritatis eaque nobis libero earum.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center mt-12">
          {cards.map((item, i) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Service;
