import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ image, title, year }) => {
  return (
    <>
        <div className="gap-5 p-4 border border-slate-400 shadow rounded-md flex flex-col justify-between ">
          <div className="border-b border-black">
            <div className="w-full h-100 overflow-hidden">
              <img
                src={image}
                alt=""
                className="rounded-md hover:rounded-md w-full h-60 transition-transform transform hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-extrabold py-3">{title}</h2>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg my-2">
              Read More
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-yellow-500 text-md mt-1"
              />
              <p className="text-md text-slate-400">1st Jan, {year}</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faUser}
                className="text-yellow-500 text-md mt-1"
              />
              <p className="text-md text-slate-400">by admin</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Blog;
