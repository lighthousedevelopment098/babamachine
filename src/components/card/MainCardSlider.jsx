// src/components/card/MainCardSlider.js
import React from "react";
import Slider from "react-slick";
import MainCard from "./MainCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Custom Next and Previous Arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-1 md:-right-10 top-1/2 transform -translate-y-1/2 z-10 text-primary text-4xl md:text-4xl"
    >
      <AiOutlineRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-1 md:-left-10 top-1/2 transform -translate-y-1/2 z-10 text-primary text-4xl md:text-4xl"
    >
      <AiOutlineLeft />
    </button>
  );
};
const MainCardSlider = ({ cardsData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cardsData.map((data, index) => (
        <div key={index} className="px-2">
          <MainCard data={data} />
        </div>
      ))}
    </Slider>
  );
};

export default MainCardSlider;
