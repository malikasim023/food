import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Branches = () => {
  const Branchs = ["India", "Russia", "Japan", "France", "Canada"];
  return (
    <>
      <h2 className="text-3xl font-extrabold text-black mb-3 text-start">Our Branches</h2>
      <ul className="list-none">
        {Branchs.map((branch) => (
          <li className="flex gap-2 my-2 ">
            <span className="pt-1">
              <IoLocationOutline className="text-yellow-500 fill-current io5-yellow text-xl" />
            </span>
            <p className="text-md text-gray-500 transition-transform duration-200 ease-in-out transform hover:translate-x-3">{branch}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Branches;
