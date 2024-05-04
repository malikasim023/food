import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://stealthwriter.ai")
        .then(() => {
            console.log('Link copied to clipboard:',"https://stealthwriter.ai" );
            alert("link is coppied")
            // Optionally, you can show a notification or perform other actions
        })
        .catch((error) => {
            console.error('Failed to copy link:', error);
            alert("link is not coppied")
            // Handle any errors that may occur
        });
};
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='flex justify-between p-5 border-b'>
        <Link to={"/"}className='flex text-gray-400 gap-2 pt-2'>
        <FontAwesomeIcon icon={faUtensils}  className="text-yellow-500 text-2xl mt-1" />
          <span className='text-xl font-extrabold'>Food Zone</span>
        </Link>
        <div className='flex border border-black p-2 h-10 rounded-lg w-200'>
          {/* Search box*/}
          <input type="text" placeholder="search here..." id="searchBox" style={{width: "300px"}} />
          <BsSearch className="text-yellow-500 fill-current text-xl"/>
        </div>

        <div className="flex gap-3">
          <Link to="/CartPage"><FaCartShopping className="hover:text-yellow-500 fill-current text-4xl"/></Link>
          <div className='cursor-pointer' onClick={copyToClipboard}>  <FaShare className="hover:text-yellow-500 fill-current text-4xl"/> </div>
          <Link to="/Login">  <IoMdContact className="hover:text-yellow-500 fill-current text-4xl"/> </Link>
          <TiThMenu className="hover:text-yellow-500 fill-current text-4xl cursor-pointer" onClick={toggleMenu}/>
          {showMenu && (
            <div ref={menuRef} className="absolute right-0 mt-12 bg-white border border-gray-300 shadow-lg rounded-lg py-2 pr-2 z-10 w-60 mr-5 pl-0 ">
              <ul className="list-none gap-7 text-lg">
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Home                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Packages                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Services                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Pricing                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Review                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Contact                    
                  </a>
                </li>
                <li className='hover:bg-slate-500'>
                  <a
                    href="/"
                    className='block text-md text-gray-500 w-full p-2 m-2 rounded pl-3 hover:text-white transition-transform duration-200 ease-in-out transform hover:translate-x-3'
                  >
                        Blogs                    
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
