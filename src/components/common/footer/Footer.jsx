import { Link } from "react-router-dom";

// Sample data for categories, makers, and footer links
const categories = [
  {
    name: "Wheel loader",
    link: "https://www.machinelines.com/stock-cat/wheel-loader",
  },
  {
    name: "Excavator",
    link: "https://www.machinelines.com/stock-cat/excavator",
  },
  {
    name: "Bulldozer",
    link: "https://www.machinelines.com/stock-cat/bulldozer",
  },
  { name: "Grader", link: "https://www.machinelines.com/stock-cat/grader" },
  {
    name: "Dump truck",
    link: "https://www.machinelines.com/stock-cat/dump-truck",
  },
  { name: "Roller", link: "https://www.machinelines.com/stock-cat/roller" },
  { name: "Crane", link: "https://www.machinelines.com/stock-cat/crane" },
  {
    name: "Wheeled excavator",
    link: "https://www.machinelines.com/stock-cat/wheeled-excavator",
  },
  {
    name: "Rotary snowplow",
    link: "https://www.machinelines.com/stock-cat/rotary-snowplow",
  },
  { name: "Forklift", link: "https://www.machinelines.com/stock-cat/forklift" },
  { name: "Tire", link: "https://www.machinelines.com/stock-cat/tire" },
  { name: "Parts", link: "https://www.machinelines.com/stock-cat/parts" },
  {
    name: "Attachment",
    link: "https://www.machinelines.com/stock-cat/attachment",
  },
  { name: "Others", link: "https://www.machinelines.com/stock-cat/others" },
];

const makers = [
  { name: "UD", link: "https://www.machinelines.com/stock-tag/ud" },
  { name: "Toyota", link: "https://www.machinelines.com/stock-tag/toyota" },
  { name: "Hitachi", link: "https://www.machinelines.com/stock-tag/hitachi" },
  { name: "Kawasaki", link: "https://www.machinelines.com/stock-tag/kawasaki" },
  { name: "Kobelco", link: "https://www.machinelines.com/stock-tag/kobelco" },
  { name: "Isuzu", link: "https://www.machinelines.com/stock-tag/isuzu" },
  { name: "Kubota", link: "https://www.machinelines.com/stock-tag/kubota" },
  { name: "Suzuki", link: "https://www.machinelines.com/stock-tag/suzuki" },
  { name: "Tadano", link: "https://www.machinelines.com/stock-tag/tadano" },
  { name: "Nichijo", link: "https://www.machinelines.com/stock-tag/nichijo" },
  { name: "Hino", link: "https://www.machinelines.com/stock-tag/hino" },
  {
    name: "Mitsubishi",
    link: "https://www.machinelines.com/stock-tag/mitsubishi",
  },
  { name: "Others", link: "https://www.machinelines.com/stock-tag/others" },
  {
    name: "Nissan Diesel",
    link: "https://www.machinelines.com/stock-tag/nissan-diesel",
  },
  { name: "Komatsu", link: "https://www.machinelines.com/stock-tag/komatsu" },
  { name: "Cat", link: "https://www.machinelines.com/stock-tag/cat" },
  { name: "Tcm", link: "https://www.machinelines.com/stock-tag/tcm" },
  { name: "Ihi", link: "https://www.machinelines.com/stock-tag/ihi" },
  { name: "Kato", link: "https://www.machinelines.com/stock-tag/kato" },
  { name: "Sakai", link: "https://www.machinelines.com/stock-tag/sakai" },
  { name: "Sumitomo", link: "https://www.machinelines.com/stock-tag/sumitomo" },
  { name: "Niigata", link: "https://www.machinelines.com/stock-tag/niigata" },
  { name: "Nissan", link: "https://www.machinelines.com/stock-tag/nissan" },
  { name: "Furukawa", link: "https://www.machinelines.com/stock-tag/furukawa" },
  { name: "Yanmar", link: "https://www.machinelines.com/stock-tag/yanmar" },
];

const news = [
  { name: "Company", link: "https://www.machinelines.com/buying" },
  { name: "Contact", link: "https://www.machinelines.com/rental" },
  { name: "Privacy Policy", link: "https://www.machinelines.com/rental" },
];

const Footer = () => {
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
                  <a
                    href={category.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {category.name}
                  </a>
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
              {makers.map((maker, index) => (
                <li key={index} className="">
                  <a
                    href={maker.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {maker.name}
                  </a>
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
                <li key={index} className="">
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
