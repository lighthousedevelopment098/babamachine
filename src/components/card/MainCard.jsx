// src/components/card/MainCard.js
import React from "react";
import { Link } from "react-router-dom";

const MainCard = ({ data }) => {
  return (
    <Link to='/stockdetail'>

    <div className="relative g  h-full md:h-[70vh] w-full bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group md:max-w-sm lg:max-w-md">
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {/* <span className="text-white font-semibold">View Details</span> */}
      </div>
      {/* Image Section */}
      <div className="relative">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-48 md:h-56  object-cover"
        />
        {/* Label Badge */}
        {data.label && (
          <span
            className={`absolute top-0 left-0 px-3 py-1 text-lg text-white ${
              data.label === "New"
                ? "bg-primary"
                : data.label === "Pickup"
                ? "bg-gray-500"
                : "bg-red-500"
            }`}
          >
            {data.label}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10">
        <p className="text-secondary text-sm">{data.code}</p>
        <h2 className="text-lg font-bold text-black">{data.title}</h2>
        <div className="border-gray-400 border my-2 w-full"></div>
        <div className="mt-2 text-sm text-gray-700">
          <p>
            <span className="font-bold text-sm text-black">Serial No : </span>{" "}
            {data.serialNumber}
          </p>
          <p>
            <span className="font-bold text-sm text-black">Year : </span>{" "}
            {data.year}
          </p>
          <p>
            <span className="font-bold text-sm text-black">Hour : </span>{" "}
            {data.hours}
          </p>
          <p>
            <span className="font-bold text-sm text-black">Price : </span>{" "}
            {data.price}
          </p>
        </div>
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </div>
    </Link>

  );
};

export default MainCard;
