import React from 'react';
import { useSpring, animated } from 'react-spring';


const JobCard = ({ title, description, location, requirements, qualifications, benefits }) => {
  const hoverEffect = useSpring({
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div style={hoverEffect} className="bg-white p-8 rounded-lg shadow-lg hover:cursor-pointer">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-600 font-medium mb-4">Location: <span className="text-gray-900">{location}</span></p>
      
      <div className="text-gray-600">
        <h4 className="text-lg font-semibold mb-2">Job Requirements</h4>
        <ul className="list-disc ml-6 mb-4">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="text-gray-600">
        <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
        <ul className="list-disc ml-6 mb-4">
          {qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
      </div>

      <div className="text-gray-600">
        <h4 className="text-lg font-semibold mb-2">Benefits</h4>
        <ul className="list-disc ml-6">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </animated.div>
  );
};

const Careers = () => {
  const jobData = [
    {
      title: 'Logistics Coordinator',
      description: 'Manage logistics operations and ensure smooth delivery services.',
      location: 'New York',
      requirements: [
        'Experience in logistics management',
        'Strong communication skills',
        'Attention to detail'
      ],
      qualifications: [
        'Bachelor’s degree in logistics or related field',
        '2+ years of experience in logistics'
      ],
      benefits: [
        'Health insurance',
        'Paid time off',
        '401(k) plan'
      ]
    },
    {
      title: 'Warehouse Manager',
      description: 'Oversee warehouse operations and inventory management.',
      location: 'Los Angeles',
      requirements: [
        'Experience in warehouse management',
        'Ability to lead a team',
        'Problem-solving skills'
      ],
      qualifications: [
        'Bachelor’s degree or equivalent experience',
        '5+ years of warehouse experience'
      ],
      benefits: [
        'Health insurance',
        'Generous vacation time',
        'Bonus incentives'
      ]
    },
    {
      title: 'Truck Driver',
      description: 'Drive trucks and deliver goods across the country.',
      location: 'Chicago',
      requirements: [
        'Valid commercial driver’s license',
        'Ability to drive long distances',
        'Good physical health'
      ],
      qualifications: [
        'High school diploma or equivalent',
        '2+ years of truck driving experience'
      ],
      benefits: [
        'Competitive salary',
        'Flexible schedule',
        'Health benefits'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
        <h1 className="text-5xl font-extrabold">Join Our Team</h1>
        <p className="mt-4 text-xl">We're looking for passionate individuals to help us deliver logistics solutions worldwide!</p>
      </header>

      {/* Job Listings Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              location={job.location}
              requirements={job.requirements}
              qualifications={job.qualifications}
              benefits={job.benefits}
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 bg-gray-800">
        <p className="text-white">© 2025 Logistics Corp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Careers;