import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Express Delivery",
      description:
        "Fast and reliable delivery services tailored to meet your urgent needs.",
      image: "/assets/express-delivery.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Freight Shipping",
      description:
        "Comprehensive freight solutions for large-scale goods transportation.",
      image: "/assets/freight-shipping.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Warehousing Solutions",
      description:
        "Secure and spacious warehouses to store your goods safely and efficiently.",
      image: "/assets/warehousing.jpg", // Replace with actual image path
    },
    {
      id: 4,
      name: "Last-Mile Delivery",
      description:
        "Ensure timely and accurate delivery to your customers' doorsteps.",
      image: "/assets/last-mile-delivery.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our Premium Services
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-500"
            >
              {/* Product Image */}
              <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Floating 3D Effect */}
              <div className="absolute inset-0 pointer-events-none hover:opacity-50 transform hover:translate-y-1/2 transition-transform duration-700">
                <div
                  className="w-10 h-10 bg-blue-500 rounded-full shadow-lg animate-bounce"
                  style={{
                    position: "absolute",
                    top: "20%",
                    right: "10%",
                  }}
                ></div>
                <div
                  className="w-8 h-8 bg-green-500 rounded-full shadow-lg animate-spin"
                  style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "15%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
