import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <Link
      to={data.link}
      className="relative bg-white flex flex-col items-center justify-center w-36 h-32 px-2 sm:w-36 sm:h-40 md:w-44 md:h-48 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      {/* Icon */}
      <img
        src={data.img}
        alt={data.title}
        className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain mb-2"
      />

      {/* Title */}
      <h1 className="text-center text-black text-sm sm:text-base md:text-lg font-semibold">
        {data.title}
      </h1>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {/* Optional overlay text can go here */}
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </Link>
  );
};

export default CategoryCard;
