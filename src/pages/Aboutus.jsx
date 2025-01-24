import React from "react";
import AboutImg from "../assets/AboutBanner1.jpg";
import AboutBeImg from "../assets/AboutBelow.jpg";
import AboutBBImg from "../assets/AboutBelow2.jpg";
import AkbarImg from "../assets/akbar.jpg";
import khanImg from "../assets/khan.jpg";
import monaImg from "../assets/mona.jpg";
import { Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";
import { FaTruck, FaBox, FaWarehouse } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faVimeo,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import {
  faCamera,
  faCannabis,
  faDesktop,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

// Team data
const teamMembers = [
  {
    img: khanImg,
    name: "KHAN SAHEB",
    designation: "HR, LATO",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
  {
    img: AkbarImg,
    name: "AKBAR YADAV",
    designation: "HR, PIT",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
  {
    img: monaImg,
    name: "Mona Azar",
    designation: "HR, INCA",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="group relative">
    <img src={member.img} alt={member.name} className="h-auto w-full mx-auto" />
    <div className="absolute -bottom-12 left-[10%] p-5 w-[80%] bg-white shadow-xl dark:bg-slate-800 text-center overflow-hidden z-[1] group-hover:bg-blue-600 group-hover:pt-7 group-hover:px-5 group-hover:pb-20 duration-300 group-hover:text-white">
      <h3 className="text-xl font-semibold leading-normal opacity-80 mb-1">
        {member.name}
      </h3>
      <p className="text-[17px] leading-normal opacity-80 mb-2">
        {member.designation}
      </p>

      <div className="absolute w-full left-0 top-auto opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 mt-1">
        <ul className="flex justify-center items-center">
          {member.socialLinks.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="w-10 h-10 text-[26px] text-center hover:text-blue-600 mt-2 mr-2 opacity-90 p-0 relative z-[1] inline-flex justify-center items-center before:absolute before:w-full before:h-full before:opacity-0 before:translate-y-full before:bg-slate-800 before:-z-[1] hover:before:opacity-100 hover:before:translate-y-0 transition duration-300"
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

const features = [
  {
    icon: faCannabis,
    title: "Product Design",
    description:
      "Nec dui nunc mattis enim ut tellus. Nibh praesent tristique magna sit amet purus. Nu la phare tra diam sit sed viverra.",
  },
  {
    icon: faRandom,
    title: "Branding",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
  {
    icon: faCamera,
    title: "Photography",
    description:
      "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
  },
  {
    icon: faDesktop,
    title: "Development",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped eaching out to digital agencies.",
  },
];

const FeatureItem = ({ feature }) => {
  return (
    <div className="bg-blue-50 dark:bg-[#1E2735] rounded-xl relative p-6 pt-12 lg:p-12 h-full">
      <div className="text-blue-600 text-[32px] inline-flex items-center justify-center mb-6">
        <FontAwesomeIcon icon={feature.icon} />
      </div>
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Aboutus = () => {
  const commonStyles =
    "inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90";

  return (
    <>
      {/* About Us Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        {/* Darker overlay for better text visibility */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        <div
          className="container mx-auto px-6 lg:px-20 flex items-center justify-start text-left relative z-10"
          style={{ paddingTop: "5%" }}
        >
          <div
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{
              textShadow:
                "4px 4px 12px rgba(0, 0, 0, 0.7), -4px -4px 12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="mb-2">Innovative Logistics Solutions</h1>
            <h2 className="mb-2 text-lg sm:text-xl">
              Driving efficiency and reliability in every delivery.
            </h2>
            <h2 className="mb-2 text-lg sm:text-xl">
              Optimizing your supply chain, one step at a time.
            </h2>
            <h2 className="text-lg sm:text-xl">
              Pioneering sustainable and secure solutions for all industries.
            </h2>
          </div>
        </div>
      </div>

      {/* Feature Section 1 */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="md:order-1">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Reliable Logistics Services for Your Business
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Our logistics services provide efficient and secure
                transportation solutions for businesses of all sizes. From
                freight management to supply chain optimization, we ensure that
                your goods arrive on time and in perfect condition.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We specialize in both domestic and international shipping,
                offering comprehensive tracking, real-time updates, and
                customized solutions to meet your unique business needs.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Learn More About Our Services
              </Link>
            </div>

            <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
              <div className="relative max-w-lg ml-auto">
                <div className="overflow-hidden aspect-w-4 aspect-h-4">
                  <img
                    className="object-cover rounded-lg w-full h-full scale-400"
                    src={AboutBeImg}
                    alt="Logistics Image"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="absolute bottom-0 -left-16">
                  <div className="bg-violet-400 rounded-lg p-1 sm:p-2">
                    <div className="py-1 px-2 sm:py-2 sm:px-4">
                      <FiMessageCircle className="w-6 h-6 bg-transparent text-white fill-white" />
                      <span className="block mt-1 text-md font-bold text-black sm:mt-2 sm:text-2xl lg:text-3xl">
                        500,000+
                      </span>
                      <span className="block mt-1 text-xs font-medium leading-snug text-amber-900 sm:text-xs">
                        Shipments Delivered
                        <br />
                        in 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="py-2 bg-gray-50 sm:py-8 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Logistics Process: Efficient and Secure
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div className="flex items-start">
                <FaTruck className="flex-shrink-0 text-green-500 w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Nationwide Shipping
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    We ensure your products are shipped swiftly across the
                    country with real-time updates and safe transportation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaBox className="flex-shrink-0 text-blue-600 w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Secure Packaging
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Our team ensures that your products are securely packaged to
                    prevent any damages during transport.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaWarehouse className="flex-shrink-0 text-red-500 w-9 h-9" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Efficient Warehousing
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    We have secure warehouses strategically located to ensure
                    fast and efficient handling of your shipments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg shadow-xl"
                src={AboutBBImg} // Ensure image is correctly imported
                alt="Logistics Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 8 (Moved Below Feature Section 2) */}
      <section className="ezy__featured8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 mb-6 sm:mb-12">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
                Our Features
              </h2>
              <p className="text-lg leading-6 mb-6">
                Assumenda non repellendus distinctio nihil dicta sapiente,
                quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-y-6 md:gap-x-6">
            <div className="col-span-12 lg:col-span-4">
              <img
                src="https://cdn.easyfrontend.com/pictures/featured/feature_8.png"
                alt=""
                className="h-auto max-w-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12 gap-6">
                {features.map((feature, i) => (
                  <div className="col-span-12 md:col-span-6" key={i}>
                    <FeatureItem feature={feature} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="ezy__team12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center text-center">
            <div className="sm:max-w-md">
              <h3 className="text-3xl leading-none md:text-[45px] font-bold">
                Our Team
              </h3>
              <p className="text-[17px] leading-normal opacity-80 mt-4 mb-12">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <TeamMemberItem member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
