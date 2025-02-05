import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "@react-spring/web";
import Teams from "../assets/Teams.jpg";

// Team data (all members)
const teamMembers = [
  {
    picture: Teams,
    fullName: "Riyaz Shah",
    designation: "Director",
    bio: "Brings over a decade of invaluable experience in the logistics services industry. His leadership has navigated the company through complex logistical challenges, ensuring excellence in every service provided.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: Teams,
    fullName: "Saba Shaikh",
    designation: "Manager",
    bio: "Oversees operational efficiency with a focus on client satisfaction and service excellence. She plays a key role in streamlining logistics operations, ensuring timely deliveries, and maintaining strong client relationships.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: Teams,
    fullName: "Ayesha Shah",
    designation: "Founder",
    bio: "Her vision and entrepreneurial spirit laid the foundation for a commitment to excellence in logistics solutions nationwide. She has been instrumental in driving innovation and expanding the company’s reach across industries.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: Teams,
    fullName: "Harshada",
    designation: "Operations Manager",
    bio: "Leads field operations with a keen eye for detail and a commitment to operational excellence. She ensures seamless coordination, optimizes workflow efficiency, and implements best practices to enhance overall logistics performance.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
];

// Single Card Component
const TeamMemberCard = ({ member }) => {
  return (
    <div className="max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center mx-auto border border-gray-300">
      {/* Profile Image */}
      <img
        src={member.picture}
        alt={member.fullName}
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 p-1"
      />

      {/* Name & Designation */}
      <h4 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">{member.fullName}</h4>
      <p className="text-lg text-gray-600 dark:text-gray-300">{member.designation}</p>

      {/* Bio */}
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{member.bio}</p>

      {/* Social Icons */}
      <div className="mt-4 flex justify-center space-x-4">
        {member.socialLinks.map((item, i) => (
          <a href={item.href} key={i} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition">
            <FontAwesomeIcon icon={item.icon} size="lg" />
          </a>
        ))}
      </div>
    </div>
  );
};

// Team Section with Sliding Cards
const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Animation for sliding effect
  const slideAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <section className="py-14 md:py-24 bg-gray-50 dark:bg-[#1a202c] text-blue-700 dark:text-white">
      <div className="container px-4 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold md:text-5xl mb-6">Meet Our Logistics Experts</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Get to know the team that ensures seamless logistics operations with expertise and dedication.
        </p>

        {/* Animated Card Display */}
        <animated.div style={slideAnimation}>
          <TeamMemberCard member={teamMembers[currentIndex]} />
        </animated.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1))}
          >
            Prev
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
