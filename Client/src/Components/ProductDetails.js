import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetails = ({ icon, item, image, price, priceo, description }) => {
  return (
    <>
      <div className="gap-4 relative p-2">
        <div className="absolute top-0 left-0 p-2 bg-opacity-25 flex gap-3 mt-6 ml-5 border border-collapse rounded-lg">
          <FontAwesomeIcon
            icon={icon}
            className="text-yellow-500 text-2xl mt-1"
          />
          <p className="text-2xl font-bold text-black ">{item}</p>
        </div>
        <img src={image} alt="" className="w-60 h-60" />
        <div className="flex gap-2 my-2">
          <p className="font-bold text-2xl gap-2">{price}$</p>
          <p className="text-gray-500 text-md line-through pt-2">{priceo}$</p>
        </div>
        <p>{description}</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg my-2">
          Order Now
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
