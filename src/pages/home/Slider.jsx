// import React from "react";
// import Slider from "react-slick";
// import { useTranslation } from "react-i18next"; // Importing the translation hook
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const sliderItems = [
//   {
//     imgSrc:
//       "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
//     catchKey: "Slider_Title",
//     leadKey: "Slider_Discription",
//     btnLink: "/",
//     btnTextKey: "Slider_btn",
//   },
//   {
//     imgSrc:
//       "https://www.machinelines.com/wp-content/themes/lines/img/img_key01.jpg",
//     catchKey: "Slider_Title",
//     leadKey: "Slider_Discription",
//     btnLink: "/",
//     btnTextKey: "Slider_btn",
//   },
//   {
//     imgSrc:
//       "https://www.machinelines.com/wp-content/themes/lines/img/img_key04.jpg",
//     catchKey: "Slider_Exclucive_Title",
//     leadKey: "Slider_Exclucive_Discription",
//     btnLink: "/",
//     btnTextKey: "Slider_Exclucive_btn",
//   },
//   {
//     imgSrc:
//       "https://www.machinelines.com/wp-content/themes/lines/img/img_key03.jpg",
//     catchKey: "Slider_Title",
//     leadKey: "Slider_Discription",
//     btnLink: "/",
//     btnTextKey: "Slider_btn",
//   },
//   {
//     imgSrc:
//       "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
//     catchKey: "Slider_Title",
//     leadKey: "Slider_Discription",
//     btnLink: "/",
//     btnTextKey: "Slider_btn",
//   },
// ];

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-primary text-white  p-2 md:p-4  rounded-md  transition duration-300 z-10"
//     onClick={onClick}
//   >
//     <FaArrowRight size={20} />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-primary text-white p-2 md:p-4 rounded-md  transition duration-300 z-10"
//     onClick={onClick}
//   >
//     <FaArrowLeft size={20} />
//   </div>
// );

// const SliderComponent = () => {
//   const { t } = useTranslation();

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="slider-container w-full overflow-hidden">
//       <Slider {...settings}>
//         {sliderItems.map((item, index) => (
//           <div key={index} className="slide-item relative w-full h-screen">
//             <div
//               className="bg-cover bg-center h-full w-full"
//               style={{ backgroundImage: `url(${item.imgSrc})` }}
//             >
//               <div className="flex flex-col justify-center  items-start  h-full  text-white">
//                 <p
//                   className=" font-bold flex text-2xl md:text-[50px] mx-4 md:mx-custom w-32 md:w-[60%]"
//                   style={{ fontSize: "", lineHeight: "1.5" }}
//                 >
//                   {t(item.catchKey)}
//                 </p>
//                 <p
//                   className="lead text-base  md:text-2xl  mt-2 mx-4 md:mx-custom w-[80%]"
//                   style={{ fontSize: "" }}
//                 >
//                   {t(item.leadKey)}
//                 </p>
//                 <p className="btn01 mt-4">
//                   <a
//                     href={item.btnLink}
//                     className="inline-block px-3 py-2 md:px-6 md:py-4  mx-4  md:mx-custom text-white bg-primary hover:bg-hoverprimary rounded-lg transition duration-300"
//                   >
//                     {t(item.btnTextKey)}
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons
import './slice.css'; // Ensure this file contains styles for the custom arrows

const slidesData = [
  {
    id: 'style-DYqPr',
    imgSrc: 'https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg',
    catchText: 'Introducing High Quality Machinery to the World from Hokkaido, Japan',
    leadText: 'Selling, purchasing and renting second-hand construction and other types of heavy-duty machinery',
    btnText: 'The list of second-hand machinery',
    btnLink: 'https://www.machinelines.com/stocks',
  },
  {
    id: 'style-WUU8p',
    imgSrc: 'https://www.machinelines.com/wp-content/themes/lines/img/img_key01.jpg',
    catchText: 'Introducing High Quality Machinery to the World from Hokkaido, Japan',
    leadText: 'Selling, purchasing and renting second-hand construction and other types of heavy-duty machinery',
    btnText: 'The list of second-hand machinery',
    btnLink: 'https://www.machinelines.com/stocks',
  },
  {
    id: 'style-wUom8',
    imgSrc: 'https://www.machinelines.com/wp-content/themes/lines/img/img_key04.jpg',
    catchText: 'We send valuable information exclusively to our members',
    leadText: 'Members have access to our great prices of second-hand heavy-duty machinery. Members receive emails about notifications and invitations to our special sale events.',
    btnText: 'Get your membership now',
    btnLink: 'https://www.machinelines.com/en/login',
  },
  {
    id: 'style-WzKdy',
    imgSrc: 'https://www.machinelines.com/wp-content/themes/lines/img/img_key03.jpg',
    catchText: 'Introducing High Quality Machinery to the World from Hokkaido, Japan',
    leadText: 'Selling, purchasing and renting second-hand construction and other types of heavy-duty machinery',
    btnText: 'The list of second-hand machinery',
    btnLink: 'https://www.machinelines.com/stocks',
  },
];

const SlideShow = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true, // Infinite scrolling
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto slide
    autoplaySpeed: 3000, // 3 seconds interval
    pauseOnHover: true, // Pause on hover
    prevArrow: <div className="custom-prev-arrow"><FaChevronLeft  className='arrow'/></div>, // Left arrow with React Icon
    nextArrow: <div className="custom-next-arrow"><FaChevronRight /></div>, // Right arrow with React Icon
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide-item slick-slide">
            <figure>
              <img src={slide.imgSrc} alt="Slide Image" />
            </figure>
            <div className="box inner md">
              <p className="catch">{slide.catchText}</p>
              <p className="lead">{slide.leadText}</p>
              <p className="btn01">
                <a href={slide.btnLink} target="_blank" rel="noopener noreferrer">
                  {slide.btnText}
                </a>
              </p>
            </div>
          </div>
        ))}
      </Slider>
      {/* Custom Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2">
        <div className="custom-prev-arrow">
          <FaChevronLeft />
        </div>
        <div className="custom-next-arrow">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
