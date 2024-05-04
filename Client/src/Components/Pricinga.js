import React from "react";
import Pricing from "./Pricing";
const Pricinga = () => {
    const pricingData = [
        {
          heading: 'Basic Plan',
          pricing: '$30',
          categories: ["10 Days","Food And Drinks", "Safty Guide","Insurance","Luxury Hotel"],
        },
        {
          heading: 'Standard Plan',
          pricing: '$50',
          categories: ["20 Days","Food And Drinks", "Safty Guide","Insurance","Luxury Hotel"],
        },
        {
          heading: 'Premium Plan',
          pricing: '$90',
          categories: ["30 Days","Food And Drinks", "Safty Guide","Insurance","Luxury Hotel"],
        },
      ];
    
    return (  
    <>
        <div className="container mx-auto px-4 mb-10">
        <div className="text-center font-extrabold text-5xl my-5">
          <h1>Our Pricing</h1>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingData.map((data, index) => (
              <Pricing key={index} {...data} />
            ))}
          </div>
        </div>
    </>
  );
};

export default Pricinga;
