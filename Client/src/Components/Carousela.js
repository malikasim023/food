import React from "react";
import { Carousel } from "flowbite-react";
import CarouselDetail from "./CarouselDetail";

const Carousela = () => {
  const carousel = [
    {
      Logo: "/images/p-1.jpg",
      Title: "John doe",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi iusto eius atque veritatis recusandae, ut distinctio eum voluptatum, maxime molestias minus saepe assumenda repellat ipsum? Iusto fuga repellat tenetur?",
    },
    {
      Logo: "/images/p-2.jpg",
      Title: "John doe",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi iusto eius atque veritatis recusandae, ut distinctio eum voluptatum, maxime molestias minus saepe assumenda repellat ipsum? Iusto fuga repellat tenetur?",
    },
    {
      Logo: "/images/p-3.jpg",
      Title: "John doe",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi iusto eius atque veritatis recusandae, ut distinctio eum voluptatum, maxime molestias minus saepe assumenda repellat ipsum? Iusto fuga repellat tenetur?",
    },
    {
      Logo: "/images/p-4.jpg",
      Title: "John doe",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi iusto eius atque veritatis recusandae, ut distinctio eum voluptatum, maxime molestias minus saepe assumenda repellat ipsum? Iusto fuga repellat tenetur?",
    },
  ];

  return (
    <Carousel
      className="h-56 sm:h-64 xl:h-80 2xl:h-110 mb-6"
      arrows={true}
      dots={true}
      autoplay={true}
      autoplaySpeed={1000}
      pauseOnHover={true}
      wrapAround={true}
    >
      {carousel.map((item, index) => (
        <div key={index} className="hs-carousel-slide">
          <div className=" h-full bg-gray-100 p-6 my-20 dark:bg-neutral-900">
            <CarouselDetail
              Logo={item.Logo}
              Title={item.Title}
              Description={item.Description}
              className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Carousela;
