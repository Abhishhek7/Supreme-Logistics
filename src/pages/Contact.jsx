import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import ContactImg from "../assets/Contact.jpg";
import ContactImg1 from "../assets/Contact1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // Regex for name validation (only letters and spaces)
  const nameRegex = /^[A-Za-z\s]+$/;
  // Regex for phone number validation (format: (XXX) XXX-XXXX)
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., (123) 456-7890).";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can now submit the form
      console.log("Form submitted", formData);
      // Here you would call your form handler (e.g., GetForm, Axios, etc.)
    }
  };

  return (
    <>
      {/* Contact Us Banner with Animation */}
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
            <h1 className="mb-2">Get in Touch with Us</h1>
            <h2 className="text-lg sm:text-xl">We'd love to hear from you!</h2>
            <h2 className="text-lg sm:text-xl">Feel free to reach out for inquiries, feedback, or support.</h2>
            <h2 className="text-lg sm:text-xl">Our team is here to assist you every step of the way.</h2>
          </motion.div>
        </div>
      </motion.div>

      <div id="contact" className="w-full bg-gray-200 text-black py-16">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-center mb-12 text-gray-900">
            Reach Us
          </h2>

          {/* Contact Details Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-white text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-300">
              <div className="flex items-center mb-4">
                <FaPhone size={30} className="mr-4 text-blue-500" />
                <h4 className="text-2xl font-bold">Contact Number</h4>
              </div>
              <p className="text-lg">+1 (123) 456-7890</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-300">
              <div className="flex items-center mb-4">
                <FaEnvelope size={30} className="mr-4 text-blue-500" />
                <h4 className="text-2xl font-bold">Email</h4>
              </div>
              <p className="text-lg">contact@domain.com</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-300">
              <div className="flex items-center mb-4">
                <FaWhatsapp size={30} className="mr-4 text-green-500" />
                <h4 className="text-2xl font-bold">WhatsApp</h4>
              </div>
              <p className="text-lg">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 rounded-xl bg-white border p-6 shadow-lg">
              <img
                src={ContactImg}
                alt="Contact Us"
                className="rounded-xl mb-4 w-full h-auto"
              />
              <p className="text-lg md:text-xl mb-6 text-gray-800">
                For any queries, contact us here:
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {[{
                  href: "https://www.linkedin.com/",
                  icon: <FaLinkedin size={30} />,
                  bgColor: "bg-blue-600",
                },
                {
                  href: "https://twitter.com/",
                  icon: <FaTwitter size={30} />,
                  bgColor: "bg-blue-400",
                },
                {
                  href: "https://facebook.com/",
                  icon: <FaFacebook size={30} />,
                  bgColor: "bg-blue-800", // Facebook's blue color
                }].map((link, index) => (
                  <Link key={index} to={link.href}>
                    <div
                      className={`flex items-center justify-center ${link.bgColor} rounded-full shadow-md p-3 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer`}
                    >
                      {link.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-white border rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Form Fields */}
                  {[{ label: "Name", type: "text", name: "name", error: errors.name },
                  { label: "Phone", type: "text", name: "phone", error: errors.phone },
                  { label: "Email", type: "email", name: "email", error: errors.email },
                  { label: "Message", type: "textarea", name: "message", rows: 6, error: errors.message }
                  ].map((field, index) => (
                    <div key={index}>
                      <label className="block text-md font-normal text-slate-600 mb-2">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          rows={field.rows || 4}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                        />
                      )}
                      {field.error && <p className="text-red-500 text-sm">{field.error}</p>}
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="group bg-blue-200 text-green-900 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
