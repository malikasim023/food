import React from 'react';
import Branches from "./Branches"
import QuickLinks from "./QuickLinks"
import ContactInfo from "./ContactInfo"
import FollowUs from "./FollowUs"

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-8 mt-10 ">
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <Branches />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <QuickLinks />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <ContactInfo />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <FollowUs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
