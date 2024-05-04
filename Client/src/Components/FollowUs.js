import React from "react";
import { CgFacebook } from "react-icons/cg";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const FollowUs = () => {
  const Followus = [
    {
      details: "Facebook",
      logo: CgFacebook,
      link: "https://www.facebook.com/",
    },
    { details: "Twitter", logo: FaTwitter, link: "https://twitter.com/" },
    {
      details: "Instagram",
      logo: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      details: "LinkedIn",
      logo: FaLinkedin,
      link: "https://www.linkedin.com/",
    },
    {
      details: "Pinterest",
      logo: FaPinterest,
      link: "https://www.pinterest.com/",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-extrabold text-black mb-3 text-start">Follow Us</h2>
      <ul className="list-none">
        {Followus.map((branch, index) => (
          <a key={index} href={branch.link}  rel="noopener noreferrer" >
            <li className="flex gap-3 my-3">
            <span className="pt-1">
              {branch.logo && (
                <branch.logo className="text-yellow-500 fill-current text-lg" />
              )}
            </span>
            <p className="text-md text-gray-500 transition-transform duration-200 ease-in-out transform hover:translate-x-3">
              {branch.details}
            </p>
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default FollowUs;
