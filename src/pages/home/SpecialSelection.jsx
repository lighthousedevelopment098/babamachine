// import React from "react";
// import { Link } from "react-router-dom";

// import MainCardSlider from "../../components/card/MainCardSlider";

// const SpecialSelection = () => {
//   const cardsData = [
//     {
//       label: "New",
//       des: "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide.",
//       date: "2307-311E",
//       title: "HITACHI ZW40-5B #H81-15290",
//       link: "YouTube",
//       path: "/youtube.com",
//       image:
//        "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
//     },
//     {
//       label: "PickUp",
//       date: "2307-311E",
//       title: "HITACHI ZW40-5B #H81-15290",
//       link: "YouTube",
//       path: "/youtube.com",
//       image:
//         "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
//     },
//     {
//       label: "New",
//       date: "2401-212A",
//       title: "KOMATSU WA380-8 #K88-12345",
//       link: "YouTube",
//       image:
//         "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
//     },
//     {
//       label: "New",
//       date: "2505-312B",
//       title: "CAT 980M #C90-67890",
//       link: "YouTube",
//       image:
//         "https://www.machinelines.com/wp-content/uploads/2024/10/100_0141-1-600x450.jpg",
//     },
//   ];

//   return (
//     <div className="bg-secondary h-full w-full py-5 md:py-10">
//       <div className="  max-w-6xl mx-auto flex p-5 justify-between items-center ">
//         <h1 className="text-white text-sm md:text-xl font-semibold">
//           Special Selection
//         </h1>
//         <Link
//           to={"/stock"}
//           className="text-primary font-semibold text-sm   md:text-xl hover:text-hoverprimary flex flex-col items-center"
//         >
//           VIEW MORE
//           <img src="/arrow.png" alt="arrow" className="w-24 md:36 ml-2 h-2" />
//         </Link>
//       </div>
//       <div className="inner max-w-6xl mx-auto my-5">
//         <MainCardSlider cardsData={cardsData} />
//       </div>
//     </div>
//   );
// };

// export default SpecialSelection;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainCardSlider from "../../components/card/MainCardSlider";
import axios from "axios";

const SpecialSelection = () => {
  const [cardsData, setCardsData] = useState([]);
  const language = 'en';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/");
        if (response.data.success) {
          const products = response.data.data.products;
          // Map the API response data to match the structure expected by `MainCardSlider`
          const formattedData = products.map((product) => ({
            label: product.type[language],
            des: product.description[language],
            serialNo: product.serialNo[language],
            title: product.title[language],
            id: product._id,
            year: product.year[language],
            hour: product.hour[language],
            mileage: product.mileage[language],
            weightCapacity: product.weightCapacity[language],
            price: product.price, // Use the price from the API response
            link: "YouTube", // Example link; you can replace it if needed
            path: "/youtube.com", // Example path; you can update based on your requirement
            image: product.images[0], // Use the first image from the array
          }));
          setCardsData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-secondary h-full w-full py-5 md:py-10">
      <div className="max-w-6xl mx-auto flex p-5 justify-between items-center">
        <h1 className="text-white text-sm md:text-xl font-semibold">
          Special Selection
        </h1>
        <Link
          to={"/stock"}
          className="text-primary font-semibold text-sm md:text-xl hover:text-hoverprimary flex flex-col items-center"
        >
          VIEW MORE
          <img src="/arrow.png" alt="arrow" className="w-24 md:36 ml-2 h-2" />
        </Link>
      </div>
      <div className="inner max-w-6xl mx-auto my-5">
        {/* Pass dynamically fetched data to the card slider */}
        <MainCardSlider cardsData={cardsData} />
      </div>
    </div>
  );
};

export default SpecialSelection;
