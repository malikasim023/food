import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="mx-4 md:mx-20 px-4 md:px-20">
        <div className="text-center font-extrabold text-5xl my-5">
          <h1>Contact Us</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="border border-black z-1 shadow-sm rounded-md pl-2 flex-grow my-2 text-lg py-1"
            />
            <input
              type="Email"
              name=""
              id=""
              placeholder="Email"
              className="border border-black z-1 shadow-sm rounded-md pl-2 flex-grow my-2 text-lg py-1"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="tel"
              name=""
              id=""
              placeholder="Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="border border-black z-1 shadow-sm rounded-md pl-2 flex-grow my-2 text-lg py-1"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="border border-black z-1 shadow-sm rounded-md pl-2 flex-grow my-2 text-lg py-1"
            />
          </div>
          <textarea
            id="content"
            className="w-full p-4 bg-transparent outline-none resize-none min-h-[150px] border border-black z-1 shadow-sm rounded-md pl-2 flex-grow my-2 text-lg py-1"
            placeholder="Your Message"
          />
          <div className="text-center mt-3">
            <button className="bg-yellow-500 rounded-lg hover:bg-yellow-600 font-bold py-2 px-4 text-black transition-all duration-300 ease-in-out transform hover:scale-x-105">
              <span className="inline-block transform hover:scale-105">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
