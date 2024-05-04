import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
    const Branchs = [
        { details: "123-456-7890", logo: FaPhone },
        { details: "+111-222-3333", logo: FaPhone },
        { details: "abc@gmail.com", logo: null },
        { details: "Abc - 400104", logo: MdLocationPin }
    ];

    return (
        <>
            <h2 className="text-3xl font-extrabold text-black mb-3 text-start">Contact Info</h2>
            <ul className="list-none">
                {Branchs.map((branch, index) => (
                    <li key={index} className="flex gap-2 my-2 ">
                        <span className="pt-1">
                            {branch.logo && <branch.logo className="text-yellow-500 fill-current io5-yellow text-lg" />}
                        </span>
                        <p className="text-md text-gray-500 transition-transform duration-200 ease-in-out transform hover:translate-x-3">{branch.details}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactInfo;
