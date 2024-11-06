import React from 'react';
import { FaPhoneAlt, FaHome, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css'
// Sample data for categories, makers, and footer links
const categories = [
  { name: 'Wheel loader', link: 'https://www.machinelines.com/stock-cat/wheel-loader' },
  { name: 'Excavator', link: 'https://www.machinelines.com/stock-cat/excavator' },
];

const makers = [
  { name: 'UD', link: 'https://www.machinelines.com/stock-tag/ud' },
  { name: 'Toyota', link: 'https://www.machinelines.com/stock-tag/toyota' },
];

const footerLinks = [
  { name: 'Used Machinery Purchase', link: 'https://www.machinelines.com/buying' },
  { name: 'Machine Rental', link: 'https://www.machinelines.com/rental' },
];

const Footer = () => {
  return (
    <footer id="fullnav" className="bg-gray-800 text-white py-8">
      <div className="wrap">
      <h2 className="title">
          <img
            src="https://www.machinelines.com/wp-content/themes/lines/img/logo_anime_02_ol.gif"
            alt="Machine Lines Co., Ltd."
          />
          <span>Machine Lines Co., Ltd.</span>
        </h2>
        <div className="flex  w-full flex-nowrap justify-around  gap-8" style={{flexWrap:"nowrap"}}>
          
          {/* First Column: Search by Category */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Search by Category</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <a href={category.link} className="text-green-500 hover:text-green-600">{category.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Second Column: Search by Maker */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Search by Maker</h3>
            <ul>
              {makers.map((maker, index) => (
                <li key={index} className="mb-2">
                  <a href={maker.link} className="text-green-500 hover:text-green-600">{maker.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Contact & Company Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact & Company Info</h3>
            <div className="mb-4">
              <p>Phone: <a href="tel:+81118751175" className="text-green-500 hover:text-green-600">+81-11-875-1175</a></p>
              <p>Fax: 011-850-9117</p>
            </div>
            <div className="mb-4">
              <Link to="https://www.machinelines.com/en" className="text-green-500 hover:text-green-600">English Home</Link>
            </div>
            <div>
              <ul>
                {footerLinks.map((item, index) => (
                  <li key={index} className="mb-2">
                    <a href={item.link} className="text-green-500 hover:text-green-600">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
