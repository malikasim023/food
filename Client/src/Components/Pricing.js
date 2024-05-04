import React from "react";

const Pricing = ({ heading, pricing, categories }) => {
  return (
    <div className="bg-white shadow-lg z-10 rounded-lg overflow-hidden w-50 ">
      <div className="px-6 py-5 m-2 mt-5 bg-gray-500 rounded-lg border-t border-t-gray-400">
        <h3 className="text-xl font-medium text-gray-800 text-center">
          {heading}
        </h3>
      </div>

      <div className="px-6 py-5">
        <div className="text-center">
          <div className="mt-4 flex items-center justify-center">
            <span className="text-4xl font-bold">{pricing}</span>
            <span className="text-gray-600 text-lg mt-3.5">/MO</span>
          </div>
        </div>
        <ul className="mt-6 text-center space-y-4">
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110">
            <span className="transition-transform duration-300 transform hover:scale-110 tracking-wide">
              Choose Plan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
