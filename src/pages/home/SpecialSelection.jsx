import React from "react";
import { Link } from "react-router-dom";

import MainCardSlider from "../../components/card/MainCardSlider";

const SpecialSelection = () => {
  const cardsData = [
    {
      label: "New",
      des: "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide.",
      date: "2307-311E",
      title: "HITACHI ZW40-5B #H81-15290",
      link: "YouTube",
      path: "/youtube.com",
      image:
       "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
    {
      label: "PickUp",
      date: "2307-311E",
      title: "HITACHI ZW40-5B #H81-15290",
      link: "YouTube",
      path: "/youtube.com",
      image:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
    {
      label: "New",
      date: "2401-212A",
      title: "KOMATSU WA380-8 #K88-12345",
      link: "YouTube",
      image:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
    {
      label: "New",
      date: "2505-312B",
      title: "CAT 980M #C90-67890",
      link: "YouTube",
      image:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
  ];

  return (
    <div className="bg-secondary h-full w-full py-5 md:py-10">
      <div className="  max-w-6xl mx-auto flex p-5 justify-between items-center ">
        <h1 className="text-white text-sm md:text-xl font-semibold">
          Special Selection
        </h1>
        <Link
          to={"/stock"}
          className="text-primary font-semibold text-sm   md:text-xl hover:text-hoverprimary flex flex-col items-center"
        >
          VIEW MORE
          <img src="/arrow.png" alt="arrow" className="w-24 md:36 ml-2 h-2" />
        </Link>
      </div>
      <div className="inner max-w-6xl mx-auto my-5">
        <MainCardSlider cardsData={cardsData} />
      </div>
    </div>
  );
};

export default SpecialSelection;
