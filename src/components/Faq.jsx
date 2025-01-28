import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Q. How do you ensure timely deliveries?",
      answer:
        "We use a combination of advanced route optimization, real-time tracking, and a network of reliable partners to ensure timely deliveries.",
    },
    {
      id: 2,
      question: "Q. What shipping methods do you offer?",
      answer:
        "We offer a range of shipping methods including air freight, sea freight, road transportation, and rail services to accommodate different needs and budgets.",
    },
    {
      id: 3,
      question: "Q. Do you provide international shipping?",
      answer:
        "Yes, we provide international shipping to over 150 countries, ensuring that your goods are delivered safely and on time, no matter where you are.",
    },
    {
      id: 4,
      question: "Q. How do you handle customs and duties?",
      answer:
        "Our team handles all customs documentation and compliance to ensure smooth passage through customs, including managing any applicable duties and taxes.",
    },
    {
      id: 5,
      question: "Q. What measures do you take for package security?",
      answer:
        "We implement strict security protocols, including GPS tracking, sealed containers, and insurance options to ensure that your shipments are secure throughout their journey.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Get answers to all your logistics-related queries and learn more about our services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: faq.id * 0.1 }}
              className="bg-white shadow-lg rounded-md mb-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{
                perspective: "1000px",
              }}
            >
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeId === faq.id ? "true" : "false"}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    initial={{ rotate: activeId === faq.id ? 180 : 0 }}
                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    {activeId === faq.id ? (
                      <FaMinus className="w-6 h-6 text-gray-900" />
                    ) : (
                      <FaPlus className="w-6 h-6 text-gray-900" />
                    )}
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
