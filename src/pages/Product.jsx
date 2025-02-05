import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import pan from "../assets/pan.jpg";
import pan2 from "../assets/pan2.jpg";
import AC from "../assets/AC.jpg";
import Camera1 from "../assets/Camera1.jpg";
import AtmImg from "../assets/Atm1.jpg";
import ProductImg from "../assets/Product.jpg";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faCamera,
  faCannabis,
  faRandom,
  faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import Features from "../components/Features";


// Your services and features array
const services = [
  {
    img: pan,
    title: "Pan-India Logistics Solutions",
    desc: "Providing comprehensive and efficient logistics services across every corner of India. From urban hubs to remote areas, we ensure timely and reliable deliveries, no matter where you are."
  },
  
  {
    img: pan2,
    title: "Pan-India Courier Services",
    desc: "Delivering fast, secure, and reliable courier services across every state in India. Whether it's a major city or a rural area, our network ensures swift delivery to your doorstep."
  },
  

  {
    img: AC,
    title:"AC Installation",
    desc:"Professional AC installation services ensuring efficient cooling, optimal performance, and long-term reliability.",
  },
  {
    img: Camera1,
    title: "Camera DVR Installation",
    desc: "Professional installation of Camera DVR systems for enhanced security and surveillance. Ensuring seamless setup, reliable performance, and complete monitoring solutions."
}

];

const features = [
  {
    icon: faCannabis,
    title: "Logistics Solutions",
    desc: "End-to-end logistics services ensuring timely delivery and secure transportation of goods across India.",
  },
  {
    icon: faCamera,
    title: "ATM Deployment",
    desc: "Expert services for the installation of ATMs, providing nationwide coverage and ensuring accessibility.",
  },
  {
    icon: faRandom,
    title: "ATM Maintenance",
    desc: "Reliable maintenance services for ATMs to ensure consistent uptime and operational efficiency.",
  },
  {
    icon: faYinYang,
    title: "Delivery Tracking",
    desc: "Real-time tracking of shipments, giving businesses complete visibility and control over their deliveries.",
  },
];

const FeatureItem = ({ feature }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-2xl relative rounded-xl p-6 lg:p-12">
      <img
        src={feature.img}
        alt={feature.title}
        className="max-w-full h-auto mx-auto rounded-xl max-h-[200px] object-cover mb-6"
      />
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.desc}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const FeaturedItem = ({ feature }) => {
  return (
    <div className="p-4 mt-4 lg:mt-0">
      <div className="text-center p-6">
        <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
          <FontAwesomeIcon icon={feature.icon} />
        </div>
        <h4 className="text-2xl font-medium mb-4">{feature.title}</h4>
        <p className="opacity-80">{feature.desc}</p>
      </div>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const ContentItem = ({ item }) => (
  <div className="flex flex-col text-center h-full p-6 md:p-12">
    <div className="grow">
      <img src={item.image} alt={item.title} className="w-24 h-24 mx-auto" />
      <h4 className="my-4 font-bold text-2xl">{item.title}</h4>
      <p className="opacity-75 mb-2">{item.text}</p>
    </div>
    
  </div>
);

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const HowItWorks9 = () => {
  const contents = [
    {
      image: one,
      title: "Order Received",
      text: "Once your order is placed, it enters our system and is assigned to the nearest available logistics partner for prompt processing.",
    },
    {
      image: two,
      title: "In Transit",
      text: "Your shipment is picked up and transported to the nearest distribution hub, where it will be sorted and dispatched for final delivery.",
    },
    {
      image: three,
      title: "Delivered to Your Doorstep",
      text: "Our logistics team ensures timely delivery to your location, handling all aspects from loading to unloading, ensuring safe transit.",
    },
  ];

  return (
    <section className="ezy__howitworks9 mb-8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-center">
              <h2 className="text-3xl text-blue-700 leading-snug font-bold capitalize md:text-5xl mb-2">
                How Our Logistics Work
              </h2>
              <p className="text-[17px] leading-normal opacity-80">
                Discover the process behind our efficient logistics solutions.
              </p>
            </div>
          </div>
          {contents.map((item, i) => (
            <div className="col-span-12 md:col-span-4 mt-8 md:mt-16" key={i}>
              <ContentItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Product = () => {
  return (
    <>
      {/* Product Page Banner with Animation */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${ProductImg})`, 
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
            <h1 className="mb-2">Innovative Product Solutions</h1>
            <h2 className="text-lg sm:text-xl">Empowering businesses with cutting-edge technology.</h2>
            <h2 className="text-lg sm:text-xl">Delivering high-quality products tailored to your needs.</h2>
            <h2 className="text-lg sm:text-xl">Innovating for a smarter, sustainable future.</h2>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 mb-12 relative">
            <div className="absolute -right-full -bottom-48 bg-blue-950 dark:bg-black min-w-[250vw] h-[1000px] md:right-1/4" />
            <div className="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4 text-start text-white relative">
              <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6">
                Our Products
              </h2>
              <p className="text-lg opacity-80 leading-6 mb-6">
                Empowering businesses with end-to-end logistics solutions, PAN-India coverage, and advanced ATM deployment services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div className="relative bg-white dark:bg-slate-800 shadow-xl p-4 md:p-16">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {services.map((feature, i) => (
                    <div className="col-span-2 md:col-span-1" key={i}>
                      <FeatureItem feature={feature} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Atm Section */}
        <div className="container px-4 mx-auto">
          <div className="flex max-w-5xl justify-center text-center mx-auto md:mb-12 fade-in">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-[45px] mt-4 mb-4 text-blue-600 dark:text-blue-400">
                ATM Shifting & Transportation.
              </h2>
              <p className="text-lg opacity-80 leading-7 mb-8 fade-in">
                We provide end-to-end logistics solutions, ATM deployment services, and maintenance for businesses across India. Our focus is on reliability, security, and timely delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-12 fade-in">
            <div className="col-span-12 lg:col-span-4 lg:order-2">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
                style={{
                  backgroundImage: `url(${AtmImg})`,
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 fade-in">
              {features.slice(0, 2).map((feature, i) => (
                <FeaturedItem feature={feature} key={i} />
              ))}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-3 fade-in">
              {features.slice(2).map((feature, i) => (
                <FeaturedItem feature={feature} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
<Features/>
      <HowItWorks9 />  {/* Adding the HowItWorks9 Section */}
    </>
  );
};

export default Product;
