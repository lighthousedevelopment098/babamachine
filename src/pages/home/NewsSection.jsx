// src/components/NewsSection.js
import React from "react";
import NewsCard from "../../components/card/NewsCard";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const cardsData = [
    {
      date: "12/12/2023",
      des: "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide.",

      title: "HITACHI ZW40-5B #H81-15290",
      link: "Information Event",
      path: "/youstube.com",
      imageUrl: "/news1.jpg",
    },
    {
      date: "12/12/2023",

      title: "HITACHI ZW40-5B #H81-15290",
      link: "YouTube",
      path: "/youstube.com",
      imageUrl: "/news2.jpg",
    },
    {
      date: "2307-311E",

      title: "KOMATSU WA380-8 #K88-12345",
      link: "Information",
      imageUrl: "/news3.jpg",
    },
    {
      date: "23/3/2012",

      title: "CAT 980M #C90-67890",
      link: "YouTube",
      imageUrl: "/news4.jpg",
    },
  ];

  return (
    <div className="bg-[#5B5B5B] h-full w-full py-5 md:py-10">
      <div className="  max-w-6xl mx-auto flex p-5 justify-between items-center ">
        <h1 className="text-white text-sm md:text-xl font-semibold">NEWS</h1>
        <Link
          to={"/"}
          className="text-primary font-semibold text-sm md:text-xl hover:text-hoverprimary flex flex-col items-center"
        >
          VIEW MORE
          <img src="/arrow.png" alt="arrow" className="w-24 md:36 ml-2 h-2" />
        </Link>
      </div>

      <div className="inner max-w-6xl mx-auto  p-5 grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {cardsData.map((card, index) => (
          <NewsCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
