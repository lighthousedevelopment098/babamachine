import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const sliderItems = [
  {
    imgSrc: "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc: "https://www.machinelines.com/wp-content/themes/lines/img/img_key01.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc: "https://www.machinelines.com/wp-content/themes/lines/img/img_key04.jpg",
    catchKey: "exclusive_information",
    leadKey: "membership_access",
    btnLink: "/",
    btnTextKey: "get_membership",
  },
  {
    imgSrc: "https://www.machinelines.com/wp-content/themes/lines/img/img_key03.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc: "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#2EC933] text-white p-4 rounded-md  transition duration-300 z-10"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#2EC933] text-white p-4 rounded-md  transition duration-300 z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const SliderComponent = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    
    <div className="slider-container  w-full  object-cover overflow-hidden">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slide-item relative w-full h-screen">
            <div
              className="bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            >
              <div className="flex flex-col justify-center items-start h-full p-8 text-white bg-opacity-50 bg-black">
                <p className="text-3xl md:text-5xl font-bold mb-2">
                  {t(item.catchKey)}
                </p>
                <p className="text-xl md:text-2xl mb-4">
                  {t(item.leadKey)}
                </p>
                <a
                  href={item.btnLink}
                  className="inline-block px-6 py-2 text-white bg-green-600 hover:bg-green-500 rounded-lg transition duration-300"
                >
                  {t(item.btnTextKey)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
