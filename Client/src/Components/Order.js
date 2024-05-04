import React from "react";

const Order = () => {
  return (
    <>
      <div className="flex my-8 flex-col lg:flex-row border border-gray-500 z-1 gap-5 py-5 lg:mx-20 rounded-lg px-5 justify-between">
        <div className="flex flex-col">
          <label htmlFor="where" className="text-sm">Where</label>
          <input
            id="where"
            type="text"
            placeholder="Search Places"
            className="border border-black rounded-lg text-lg p-1 mt-0.5"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="when" className="text-sm">When</label>
          <input
            id="when"
            type="date"
            placeholder="Select Date"
            className="border border-black rounded-lg text-md p-1.5"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="time" className="text-sm">Time</label>
          <input
            id="time"
            type="time"
            className="border border-black rounded-lg text-lg p-1 px-2"
          />
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg px-2 mt-4 lg:mt-0 py-2 lg:py-0">Book Now</button>
      </div>
    </>
  );
};

export default Order;
