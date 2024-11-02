import React from "react";

const CategoryCard = ({ title }) => {
  return (
    <div className="relative bg-white flex flex-col items-center justify-center w-44 h-40 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Icon */}
      <img
        src="https://www.machinelines.com/wp-content/uploads/2022/08/icon_category02.png"
        alt="Category Icon"
        className="h-16 w-16 object-contain mb-2"
      />

      {/* Title */}
      <h1 className="text-center text-black text-[1rem] font-semibold">
        {title}
      </h1>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {/* <span className="text-white font-semibold">View Details</span> */}
      </div>

      {/* Bottom Right Corner Accent */}
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary transform rotate-45 translate-x-4 translate-y-4"></div>
    </div>
  );
};

export default CategoryCard;
