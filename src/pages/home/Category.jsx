// src/components/Category.js
import React from "react";
import CategoryCard from "../../components/card/CategoryCard";
import { Link } from "react-router-dom";

const Category = () => {
  // Card data to be mapped over
  const cardsData = [
    {
      img: "/category1.png",
      link: "/",
      title: " Wheel loader",
    },
    {
      img: "/category2.png",
      link: "/",
      title: " Excavator",
    },
    {
      img: "/category3.png",
      link: "/",
      title: " Bulldozer",
    },
    {
      img: "/category4.png",
      link: "/",
      title: "Grader",
    },
    {
      img: "/category5.png",
      link: "/",
      title: "Dump truck",
    },
    {
      img: "/category6.png",
      link: "/",
      title: "  Roller",
    },
    {
      img: "/category7.png",
      link: "/",
      title: "Crane",
    },
    {
      img: "/category8.png",
      link: "/",
      title: "Wheele excavator",
    },
    {
      img: "/category9.png",
      link: "/",
      title: "Forklift",
    },
    {
      img: "/category10.png",
      link: "/",
      title: "",
    },
    {
      img: "/category11.png",
      link: "/",
      title: " Tire",
    },
    {
      img: "/category12.png",
      link: "/",
      title: "Parts",
    },
    {
      img: "/category13.png",
      link: "/",
      title: "Attachment",
    },
    {
      img: "/category14.png",
      link: "/",
      title: "Others",
    },
  ];

  return (
    <div className="bg-lightgray py-5 md:py-10">
      <div className="  max-w-6xl mx-auto flex p-5 justify-between items-center ">
        <h1 className="text-white text-sm md:text-xl font-semibold">
          Search by category
        </h1>
        <Link
          to={"/"}
          className="text-primary font-semibold text-sm md:text-xl hover:text-hoverprimary flex flex-col items-center"
        >
          VIEW MORE
          <img src="/arrow.png" alt="arrow" className="w-24 md:36 ml-2 h-2" />
        </Link>
      </div>
      <div className="inner max-w-6xl mx-auto md:px-5 px-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 my-5">
        {cardsData.map((card, index) => (
          <CategoryCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Category;
