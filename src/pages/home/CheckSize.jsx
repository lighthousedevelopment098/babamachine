// src/components/CheckSize.js
import React from "react";

import SettingCard from "../../components/card/SettingCard";
import MainCard from "../../components/card/MainCard";

const CheckSize = () => {
  // Card data to be mapped over
  const cardsData = [
    {
      date: "12/12/2023",
      des: "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide.",
      code: "2307-311E",
      title: "HITACHI ZW40-5B #H81-15290",
      link: "YouTube",
      path: "/youstube.com",
      imageUrl:
        "https://www.machinelines.com/wp-content/themes/lines/img/icon_link03.png",
    },
    {
      date: "12/12/2023",
      code: "2307-311E",
      title: "HITACHI ZW40-5B #H81-15290",
      link: "YouTube",
      path: "/youstube.com",
      imageUrl:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
    {
      date: "2307-311E",
      code: "2401-212A",
      title: "KOMATSU WA380-8 #K88-12345",
      link: "YouTube",
      imageUrl:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
    {
      date: "New",
      code: "2505-312B",
      title: "CAT 980M #C90-67890",
      link: "YouTube",
      imageUrl:
        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
    },
  ];

  return (
    <div className="bg-secondary m-custom px-5 grid grid-cols-1 gap-2 md:grid-cols-4 ">
      {cardsData.map((card, index) => (
        <MainCard key={index} data={card} />
      ))}
    </div>
  );
};

export default CheckSize;
