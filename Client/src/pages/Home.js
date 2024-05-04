import React from "react";
import BolgItems from "../Components/BolgItems.js";
import ContactUs from "../Components/ContactUs.js";
import Carousela from "../Components/Carousela.js";
import Pricinga from "../Components/Pricinga.js";
import Hero from "../Components/Hero.js";
import Order from "../Components/Order.js";

const Home = () => {
  return (
    <>
      <div className="gap-5">
        <Hero />
        <Order />
        <Pricinga />
        <Carousela />
        <ContactUs />
        <BolgItems />
      </div>
    </>
  );
};

export default Home;
