import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo_anime_ol.gif";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-white text-[#2EC933] shadow-md p-4 md:p-6 lg:px-12">
      <img
        src={logo}
        alt="Logo"
        className="h-8 md:h-10 w-auto object-contain mb-2 md:mb-0"
      />

      {/* Navbar will collapse or stack items on smaller screens */}
      <div className="">
        <Navbar />
      </div>

      {/* LanguageSwitcher positioned on the right side on larger screens */}
      <div className="mt-2 md:mt-0">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
