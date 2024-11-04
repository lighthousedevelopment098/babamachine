// src/components/card/NewsCard.js
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  return (
    <div className="relative h-96 w-full pb-5 bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  group md:max-w-sm lg:max-w-md">
      <div className="absolute inset-0  bg-black  bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
      {/* Image Section */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-48 md:h-56  object-cover"
        />
        {/* Label Badge */}
        {data.date && (
          <span
            className={
              "absolute top-0 left-0 px-2 py-1 text-sm font-semibold text-white  bg-primary"
              //      ${
              //   data.label === "New"
              //     ? "bg-primary"
              //     : data.label === "Pickup"
              //     ? "bg-red-500"
              //     : "bg-gray-500"
              // }`}
            }
          >
            {data.date}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10 ">
        <h2 className="text-lg font-bold text-black">{data.title}</h2>
        <Link
          to={data.path}
          className="text-black  border-b-2  hover:text-graycustum"
        >
          {data.link}
        </Link>
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </div>
  );
};

export default NewsCard;
