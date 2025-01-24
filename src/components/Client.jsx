import { useState } from 'react';
import NcrImg from "../assets/Ncr.jpeg";
import HitachiImg from "../assets/Hitachi.jpeg";
import DHLImg from  "../assets/dhl logo.png";

function Client() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section className="bg-white py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Trusted Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* HITACHI */}
          <div
            className={`transition-transform duration-500 transform ${hovered === 0 ? 'scale-110 rotate-3' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-gray-200 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={HitachiImg}
                alt="HITACHI"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-indigo-500"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">HITACHI</h3>
              <p className="text-lg text-gray-800">Global leader in industrial and IT solutions. Partnering for innovative logistics and technology integration.</p>
            </div>
          </div>

          {/* DHL */}
          <div
            className={`transition-transform duration-500 transform ${hovered === 1 ? 'scale-110 rotate-3' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-gray-200 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={DHLImg}
                alt="DHL"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-indigo-500"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">DHL</h3>
              <p className="text-lg text-gray-800">A worldwide leader in logistics and express shipping. Connecting businesses globally with speed and reliability.</p>
            </div>
          </div>

          {/* NCR */}
          <div
            className={`transition-transform duration-500 transform ${hovered === 2 ? 'scale-110 rotate-3' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-gray-200 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={NcrImg}
                alt="NCR"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-indigo-500"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">NCR</h3>
              <p className="text-lg text-gray-800">NCR provides advanced point-of-sale and self-service solutions, transforming industries with innovation and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
