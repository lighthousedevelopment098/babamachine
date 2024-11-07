// src/components/card/SettingCard.js
import React from "react";

const SettingCard = ({ title, img, des }) => {
  return (
    <div className="relative w-full  h-full text-justify md:h-80 p-5 bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image Section */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-40 object-contain" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>

      {/* Card Content */}
      <div className="p-4 relative z-10">
        <h2 className="text-xl text-center font-bold text-black">{title}</h2>
        <p className="text-xl font-semibold text-black">{des}</p>
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </div>
  );
};

export default SettingCard;
