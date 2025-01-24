import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "@react-spring/web";

// Team data with additional cards
const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
    fullName: "John Doe",
    designation: "Logistics Manager",
    bio: "Oversees the logistics department, ensuring smooth delivery operations.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
    fullName: "Jane Smith",
    designation: "Warehouse Supervisor",
    bio: "Manages inventory, oversees storage, and ensures efficient shipment preparation.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
    fullName: "Michael Johnson",
    designation: "Operations Lead",
    bio: "Ensures the coordination of all operations between teams for maximum efficiency.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
    fullName: "Sara Lee",
    designation: "Supply Chain Analyst",
    bio: "Analyzes supply chain data to optimize routes and reduce costs.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
    fullName: "David Kim",
    designation: "Freight Coordinator",
    bio: "Coordinates freight shipments and ensures timely deliveries across regions.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user6.jpg",
    fullName: "Emily Davis",
    designation: "Customer Support",
    bio: "Assists customers with inquiries and ensures all logistics are communicated effectively.",
    socialLinks: [
      { icon: faFacebookF, href: "#" },
      { icon: faLinkedinIn, href: "#" },
      { icon: faTwitter, href: "#" },
      { icon: faBehance, href: "#" },
    ],
  },
];

// Card component
const TeamMemberCard = ({ member }) => (
  <div
    className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 lg:p-6 transform hover:scale-105 hover:translate-y-2 transition-all duration-300 ease-in-out"
    style={{
      width: "220px", // Fixed card width
      height: "350px", // Fixed card height
      background: "linear-gradient(to right, #e0e0e0, #f4f4f4)", // Light gradient background
      marginRight: "20px", // Gap between cards
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full border-4 p-1 border-blue-500 mx-auto"
      width="100"
      style={{ marginBottom: "16px" }} // Consistent spacing for image
    />
    <div style={{ flex: 1 }}>
      <h4 className="text-xl font-medium mb-1 text-gray-800 dark:text-white" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
        {member.fullName}
      </h4>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-400" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
        {member.designation}
      </p>
      <p className="opacity-75 text-gray-700 dark:text-gray-300" style={{ overflow: "hidden", textOverflow: "ellipsis", height: "100px", lineHeight: "1.5" }}>
        {member.bio}
      </p>
    </div>
    <div className="mt-4" style={{ display: "flex", justifyContent: "space-around" }}>
      {member.socialLinks.map((item, i) => (
        <a
          href={item.href}
          className={`inline-block opacity-60 transition duration-300 hover:opacity-100 ${i + 1 !== member.socialLinks.length && "mr-4"}`}
          key={i}
        >
          <FontAwesomeIcon icon={item.icon} className="text-blue-600 dark:text-blue-400 hover:text-blue-800" />
        </a>
      ))}
    </div>
  </div>
);

const Team = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1 for mobile
  const cardWidth = 220; // Width of each card
  const cardHeight = 350; // Height of each card
  const gap = 20; // Gap between cards

  // Adjust number of visible cards based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) { // Laptop and larger
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) { // Tablet
        setCardsPerView(2);
      } else { // Phone
        setCardsPerView(1);
      }
    };

    updateCardsPerView(); // Initial check

    window.addEventListener("resize", updateCardsPerView); // Update on window resize
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Animation for horizontal sliding
  const scrollStyle = useSpring({
    transform: `translateX(-${(currentCardIndex * (cardWidth + gap))}px)`, // Adjust for gap
    config: { tension: 220, friction: 30 },
  });

  useEffect(() => {
    // Automatically move to the next card
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % (teamMembers.length - cardsPerView + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [cardsPerView]);

  return (
    <section className="ezy__team9 light py-14 md:py-24 bg-gray-50 dark:bg-[#1a202c] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Our Logistics Team
            </h2>
            <p>
              Meet the experts who make our logistics operations run smoothly. With their dedication and expertise, we ensure every shipment is on time.
            </p>
          </div>
        </div>

        {/* Animated Horizontal Scroll Container */}
        <div style={{ width: `${(cardWidth + gap) * cardsPerView - gap}px`, overflow: "hidden", margin: "0 auto" }}>
          {/* Animated wrapper to control the horizontal sliding */}
          <animated.div style={{ display: "flex", ...scrollStyle }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{ flex: "none" }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
