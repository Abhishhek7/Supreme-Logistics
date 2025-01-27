import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FaXTwitter } from "react-icons/fa6";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
  {
    author: {
      fullName: "Akshay Kumar",
      picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "Beginning upon signs. Own i lights in itself all fifth. Winged great male they're made bring open void creeping living cattle day over. Image won't may to unto you all dry divide hath together be may divided moveth you'll firmament i rule forth man creepeth male waters were us were.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
      designation: "Founder / CEO",
    },
    rating: 4,
    description:
      "Sea signs seas you're beginning. Bearing over fowl cattle first spirit sea creeping thing. Great Forth moving isn't so lights thing sea upon in beast behold creature wherein us our doesn't his deep, lesser light in. Good said midst face greater the evening can't blessed deep first saw Wherein own.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
      designation: "Founder / CEO",
    },
    rating: 5,
    description:
      "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
  },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        else if (rating > i && rating < index + 1)
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-200 dark:text-opacity-20" />;

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

const TestimonialItem = ({ testimonial, index }) => (
  <div className="grid grid-cols-12">
    <div
      className={`col-span-12 lg:col-span-5 order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:col-start-8"} text-center`}
    >
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className={`w-full rounded-full border-[30px]  border-blue-600`}
      />
    </div>

    <div
      className={`col-span-12 lg:col-span-7 xl:col-span-6 ${index % 2 === 0 ? "order-1 lg:order-2" : "xl:col-start-2"}   mt-4 lg:mt-0 p-6 lg:px-12`}
    >
      <div className="flex flex-col h-full justify-center text-center lg:text-start lg:pr-12 lg:py-12">
        <h4 className="text-2xl font-medium mb-1">{testimonial.author.fullName}</h4>
        <p className="mb-1">{testimonial.author.designation}</p>
        <Rating rating={testimonial.rating} showLabel={false} />

        <p className="opacity-50">{testimonial.description}</p>
      </div>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Testimonial22 = () => {
  const testimonials = [
    {
      name: "Rahul",
      username: "@rahul_s",
      avatar: "/memeimage/boy1.jpeg",
      quote: "AuraUI made it so simple. My new site is so much faster with AuraUI.",
    },
    {
      name: "Priya",
      username: "@priya_singh",
      avatar: "/memeimage/woman1.jpg",
      quote: "The best. I'd recommend AuraUI to beginners & advanced users.",
    },
    {
      name: "Ananya",
      username: "@ananya_patel",
      avatar: "/memeimage/girl2.jpeg",
      quote: "Aura UI is fantastic! It's both fast and efficient, perfect for my needs.",
    },
    {
      name: "Vikram",
      username: "@vikram_rao",
      avatar: "/memeimage/man4.jpg",
      quote: "Couldn't have asked for a better service. AuraUI is simply amazing.",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our customers love Aura UI for its simplicity and ease of use.
            Here&apos;s what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {testimonial.username}
                    </p>
                  </div>
                  {/* Replace the anchor tag with Twitter icon */}
                  <FaXTwitter className="w-6 h-6 ml-2 text-black cursor-pointer" />
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">{testimonial.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="ezy__testimonial11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Community Reviews
            </h2>
            <p className="">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 mt-12">
          {testimonialList.map((testimonial, i) => (
            <div
              className="bg-blue-600 bg-opacity-10 mt-12 mb-5 rounded-t-[100px] rounded-b-full lg:rounded-full"
              key={i}
            >
              <TestimonialItem testimonial={testimonial} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Add the Testimonial22 section */}
      <Testimonial22 />
    </section>
  );
};

export default Testimonials;
