import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles (optional)

// Import Swiper modules directly
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Include Autoplay module

import heroImage from "../assets/banner.jpg"; // Replace with your actual image paths
import heroImage2 from "../assets/aero.jpg";
import heroImage3 from "../assets/ocean.jpg";
import About from "./About"
import Services from "./Services";
import Choose from "./Choose";
import Clients from "./Client";
import MiniService from "../components/MiniService";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: heroImage,
      title: "Enjoy Hassle-Free Delivery",
      description:
        "Supreme Logistics offers PAN India services for fast and reliable transportation solutions.",
      buttonText: "Track Order",
      buttonLink: "#track",
    },
    {
      id: 2,
      image: heroImage2,
      title: "Fast & Reliable Logistics",
      description:
        "Your trusted partner for efficient delivery solutions, ensuring customer satisfaction.",
      buttonText: "Explore Services",
      buttonLink: "#services",
    },
    {
      id: 3,
      image: heroImage3,
      title: "We Deliver Excellence",
      description:
        "Experience seamless logistics with cutting-edge technology and a dedicated team.",
      buttonText: "Get a Quote",
      buttonLink: "#quote",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Add Autoplay here
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, // Time in milliseconds between slides
          disableOnInteraction: false, // Keep autoplay active after manual navigation
        }}
        loop={true}
        className="h-[75vh]" // Adjust height here
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[75vh] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat" // Adjust height here
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
              <div className="relative z-10 max-w-4xl text-center px-6">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight shadow-lg">
                  {slide.title}
                </h1>
                {/* Description */}
                <p className="text-base md:text-xl mb-6 font-light leading-relaxed">
                  {slide.description}
                </p>
                {/* Button */}
                <a
                  href={slide.buttonLink}
                  className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:border-blue-700 transition duration-300"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <About />
    <MiniService/>
    <Choose/>
      <Clients /> 
     <Services />
    </section>
  );
};

export default Home;
