// import { Link } from "react-router-dom";
// import data from '../../Utils/data.json';

// // Sample data for categories, makers, and footer links

// const news = [
//   { name: "Company", link: "https://www.machinelines.com/buying" },
//   { name: "Contact", link: "https://www.machinelines.com/rental" },
//   { name: "Privacy Policy", link: "https://www.machinelines.com/rental" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-center my-4">
//           <img
//             src="https://www.machinelines.com/wp-content/themes/lines/img/logo_anime_02_ol.gif"
//             alt="Machine Lines Co., Ltd."
//             className="mx-auto max-w-xs"
//           />
//           <span className="font-bold text-sm mt-2">
//             Machine Lines Co., Ltd.
//           </span>
//         </h2>
//         <div className="border-t border-gray-400 my-5"></div>
//         <div className="flex justify-between items-center text-white mb-4">
//           <Link to="/" className="text-white">
//             English Home
//           </Link>
//           <Link to="/">+81-11-875-1175</Link>
//         </div>
//         <div className="border-t border-gray-400 my-5"></div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* First Column: Search by Category */}
//           <div>
//             <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
//               Search by Category
//             </h3>
//             <ul>
//               {categories.map((category, index) => (
//                 <li key={index} className="mb-2">
//                   <a
//                     href={category.link}
//                     className="text-green-500 hover:text-green-600"
//                   >
//                     {category.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Second Column: Search by Maker */}
//           <div>
//             <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
//               Search by Maker
//             </h3>
//             <ul className="grid grid-cols-2 gap-2">
//               {makers.map((maker, index) => (
//                 <li key={index} className="">
//                   <a
//                     href={maker.link}
//                     className="text-green-500 hover:text-green-600"
//                   >
//                     {maker.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Third Column: Contact & Company Info */}
//           <div>
//             <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
//               News
//             </h3>

//             <ul>
//               {news.map((item, index) => (
//                 <li key={index} className="">
//                   <a
//                     href={item.link}
//                     className="text-green-500 hover:text-green-600"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <button className="p-4 mt-3 font-semibold rounded-md shadow-md shadow-white bg-primary text-white hover:bg-hoverprimary">
//               Member Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import data from "../../../Utils/data.json"; // Importing data from JSON file

const Footer = () => {
  const { categories, manufacturers } = data; // Destructuring data from JSON

  const news = [
    { name: "Company", link: "https://www.machinelines.com/buying" },
    { name: "Contact", link: "https://www.machinelines.com/rental" },
    { name: "Privacy Policy", link: "https://www.machinelines.com/rental" },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center my-4">
          <img
            src="https://www.machinelines.com/wp-content/themes/lines/img/logo_anime_02_ol.gif"
            alt="Machine Lines Co., Ltd."
            className="mx-auto max-w-xs"
          />
          <span className="font-bold text-sm mt-2">
            Machine Lines Co., Ltd.
          </span>
        </h2>
        <div className="border-t border-gray-400 my-5"></div>

        <div className="flex justify-between items-center text-white mb-4">
          <Link to="/" className="text-white">
            English Home
          </Link>
          <Link to="/">+81-11-875-1175</Link>
        </div>
        <div className="border-t border-gray-400 my-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column: Search by Category */}
          <div>
            <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
              Search by Category
            </h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={`/category/${category.name.toLowerCase()}`}
                    className="text-green-500 hover:text-green-600"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column: Search by Maker */}
          <div>
  <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
    Search by Maker
  </h3>
  <ul className="grid grid-cols-2 gap-2">
    {manufacturers.map((maker, index) => (
      <li key={index}>
        <Link
          to={`/manufacturer/${maker.name.toLowerCase()}`}
          className="text-green-500 hover:text-green-600"
        >
          {maker.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Third Column: Contact & Company Info */}
          <div>
            <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
              News
            </h3>
            <ul>
              {news.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="p-4 mt-3 font-semibold rounded-md shadow-md shadow-white bg-primary text-white hover:bg-hoverprimary">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
