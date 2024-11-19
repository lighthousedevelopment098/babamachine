import { use } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Sample data for categories, makers, and footer links
const categories = [
  {
    name: "wheel_loader",
    link: "https://www.machinelines.com/stock-cat/wheel-loader",
  },
  {
    name: "excavator",
    link: "https://www.machinelines.com/stock-cat/excavator",
  },
  {
    name: "bulldozer",
    link: "https://www.machinelines.com/stock-cat/bulldozer",
  },
  { name: "grader", link: "https://www.machinelines.com/stock-cat/grader" },
  {
    name: "dump_truck",
    link: "https://www.machinelines.com/stock-cat/dump-truck",
  },
  { name: "roller", link: "https://www.machinelines.com/stock-cat/roller" },
  { name: "crane", link: "https://www.machinelines.com/stock-cat/crane" },
  {
    name: "wheeled_excavator",
    link: "https://www.machinelines.com/stock-cat/wheeled-excavator",
  },
  {
    name: "rotary_snowplow",
    link: "https://www.machinelines.com/stock-cat/rotary-snowplow",
  },
  { name: "forklift", link: "https://www.machinelines.com/stock-cat/forklift" },
  { name: "tire", link: "https://www.machinelines.com/stock-cat/tire" },
  { name: "parts", link: "https://www.machinelines.com/stock-cat/parts" },
  {
    name: "attachment",
    link: "https://www.machinelines.com/stock-cat/attachment",
  },
  { name: "others", link: "https://www.machinelines.com/stock-cat/others" },
];

const makers = [
  { name: "ud", link: "https://www.machinelines.com/stock-tag/ud" },
  { name: "toyota", link: "https://www.machinelines.com/stock-tag/toyota" },
  { name: "hitachi", link: "https://www.machinelines.com/stock-tag/hitachi" },
  { name: "kawasaki", link: "https://www.machinelines.com/stock-tag/kawasaki" },
  { name: "kobelco", link: "https://www.machinelines.com/stock-tag/kobelco" },
  { name: "isuzu", link: "https://www.machinelines.com/stock-tag/isuzu" },
  { name: "kubota", link: "https://www.machinelines.com/stock-tag/kubota" },
  { name: "suzuki", link: "https://www.machinelines.com/stock-tag/suzuki" },
  { name: "tadano", link: "https://www.machinelines.com/stock-tag/tadano" },
  { name: "nichijo", link: "https://www.machinelines.com/stock-tag/nichijo" },
  { name: "hino", link: "https://www.machinelines.com/stock-tag/hino" },
  {
    name: "mitsubishi",
    link: "https://www.machinelines.com/stock-tag/mitsubishi",
  },
  { name: "others", link: "https://www.machinelines.com/stock-tag/others" },
  {
    name: "nissan_diesel",
    link: "https://www.machinelines.com/stock-tag/nissan-diesel",
  },
  { name: "komatsu", link: "https://www.machinelines.com/stock-tag/komatsu" },
  { name: "cat", link: "https://www.machinelines.com/stock-tag/cat" },
  { name: "tcm", link: "https://www.machinelines.com/stock-tag/tcm" },
  { name: "ihi", link: "https://www.machinelines.com/stock-tag/ihi" },
  { name: "kato", link: "https://www.machinelines.com/stock-tag/kato" },
  { name: "sakai", link: "https://www.machinelines.com/stock-tag/sakai" },
  { name: "sumitomo", link: "https://www.machinelines.com/stock-tag/sumitomo" },
  { name: "niigata", link: "https://www.machinelines.com/stock-tag/niigata" },
  { name: "nissan", link: "https://www.machinelines.com/stock-tag/nissan" },
  { name: "furukawa", link: "https://www.machinelines.com/stock-tag/furukawa" },
  { name: "yanmar", link: "https://www.machinelines.com/stock-tag/yanmar" },
];

const news = [
  { name: "company", link: "https://www.machinelines.com/buying" },
  { name: "contact", link: "https://www.machinelines.com/rental" },
  { name: "privacy_policy", link: "https://www.machinelines.com/rental" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center my-4">
          <img
            src="https://www.machinelines.com/wp-content/themes/lines/img/logo_anime_02_ol.gif"
            alt={t("Machine Lines Co., Ltd.")}
            className="mx-auto max-w-xs"
          />
          <span className="font-bold text-sm mt-2">
            {t("logo_dis")}
          </span>
        </h2>
        <div className="border-t border-gray-400 my-5"></div>
        <div className="flex justify-between items-center text-white mb-4">
          <Link to="/" className="text-white">
            {t("english_home")}
          </Link>
          <Link to="/">{t("+81-11-875-1175")}</Link>
        </div>
        <div className="border-t border-gray-400 my-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column: Search by Category */}
          <div>
            <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
              {t("Search_by_category")}
            </h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={category.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {t(category.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column: Search by Maker */}
          <div>
            <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
              {t("Search_by_Maker")}
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {makers.map((maker, index) => (
                <li key={index}>
                  <a
                    href={maker.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {t(maker.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Contact & Company Info */}
          <div>
            <h3 className="text-xl border-y py-2 border-dashed border-gray-400 font-bold mb-4">
              {t("news")}
            </h3>
            <ul>
              {news.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-green-500 hover:text-green-600"
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}
            </ul>
            <button className="p-4 mt-3 font-semibold rounded-md shadow-md shadow-white bg-primary text-white hover:bg-hoverprimary">
              {t("member_login")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
