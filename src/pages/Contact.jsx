import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactImg from "../assets/Contact.jpg";
import ContactImg1 from "../assets/Contact1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contacts = [
    {
      icon: <FaPhone size={40} className="text-white" />,
      title: "Call Us",
      details: ["+91 8287050860", "+91 9769432064", "+91 8976028991"],
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: <FaEnvelope size={40} className="text-white" />,
      title: "Email Us",
      details: ["supremelogisticssolutions25@gmail.com"],
      gradient: "from-teal-500 to-teal-700",
    },
    {
      icon: <FaWhatsapp size={40} className="text-white" />,
      title: "WhatsApp",
      details: ["+91 9922446634"],
      gradient: "from-orange-500 to-orange-700",
    },
  ];

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^(\+91[\s-]?)?[6789]\d{9}$/;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!nameRegex.test(formData.name))
      newErrors.name = "Name must contain only letters.";
    if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone Number.";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert(`Form Submitted Successfully! 🎉
  
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Message: ${formData.message}`);

    setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
  };

  // Automatically slide through cards every 3 seconds, stop if hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      {/* Contact Us Banner */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${ContactImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 lg:px-20 flex items-center text-left relative z-10 pt-20">
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get in Touch with Us
            <p className="text-lg sm:text-xl">
              Empowering businesses with cutting-edge technology.
            </p>
          </motion.h1>
        </div>
      </motion.div>

      {/* Contact Cards - Slider */}
      <div className="bg-purple-100 py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Reach Us</h2>
        <motion.div
          className="group bg-gradient-to-r from-sky-800 to-blue-500 p-12 rounded-2xl shadow-2xl text-center max-w-xl mx-auto"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center mb-6 text-5xl">
            {contacts[currentIndex].icon}
          </div>
          <h4 className="text-3xl font-semibold text-white mb-4">
            {contacts[currentIndex].title}
          </h4>
          <div className="space-y-3">
            {contacts[currentIndex].details.map((detail, i) => (
              <p key={i} className="text-sm md:text-xl text-white opacity-90 text-center">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + contacts.length) % contacts.length)
            }
            className="bg-gray-700 text-white px-6 py-3 text-lg rounded-full"
          >
            ◀
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % contacts.length)}
            className="bg-gray-700 text-white px-6 py-3 text-lg rounded-full"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-8 mt-12">
        {/* Left Side - Image & Social Links */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-xl text-center">
          <img src={ContactImg} alt="Contact Us" className="rounded-xl mb-4 w-full h-auto" />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            {["name", "phone", "email", "message"].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-md font-normal text-gray-600">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "message" ? "textarea" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full border-2 border-blue-200 rounded-lg p-3"
                />
              </div>
            ))}
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
