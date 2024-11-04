// src/components/card/SettingCard.js
import React from "react";

const SettingCard = ({ data }) => {
  return (
    <div className="relative w-full bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  group md:max-w-sm lg:max-w-md">
      <div className="absolute inset-0  bg-black  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
      {/* Image Section */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-52   object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10">
        <h2 className="text-lg  text-center font-bold text-black">
          {data.title}
        </h2>
        <p className="text-sm font-semibold text-secondary">{data.des}</p>
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </div>
  );
};

export default SettingCard;
