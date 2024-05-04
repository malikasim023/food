import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8hZcUxUOBb4GV1JiDsz1USpT29w=/385x352:1561x1061/1200x800/filters:focal(831x620:1137x926)/cdn.vox-cdn.com/uploads/chorus_image/image/70609268/Burger_King_Plant_based_Double_Cheeezeburger.0.jpg"
          alt="Logo"
          className="h-45 w-full object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center gap-4">
        <h3 className="text-5xl text-gray-700 font-extrabold">Most Tasty Burger For You</h3>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          explicabo eius inventore reprehenderit alias eos facilis, ipsa est
          asperiores repellendus!
        </p>
        <a href="/">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            explore now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
