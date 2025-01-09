import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Navbar = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <nav className="flex items-center justify-between">
      {routes
        .filter((route) => route.showInNav)
        .map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="relative px-4 py-2 rounded-lg text-lg font-semibold text-[#2EC933] transition duration-300 transform hover:scale-105 hover:text-[#2EC933] hover:border-b-2 hover:border-[#2EC933] hover:shadow-lg"
          >
            {t(route.name)} {/* Translated route name */}
            <span className="absolute inset-0 bg-transparent rounded-lg transition duration-300 group-hover:bg-[#2EC933]"></span>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
