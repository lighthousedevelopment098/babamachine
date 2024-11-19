import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo_anime_ol.gif";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-white text-[#2EC933] shadow-md p-2 md:p-4 lg:px-12">
      <div className="flex flex-row justify-center items-center w-full gap-4  lg:justify-between"
      >
        <div className="flex flex-nowrap  justify-between items-start md:items-center w-full md:w-[65%]">
          <div>
      <img
        src={logo}
        alt="Logo"
        className="h-8 md:h-10 w-auto  object-contain mb-2 md:mb-0"
      />
      </div>

      {/* Navbar will collapse or stack items on smaller screens */}
      <div className="">
       <Navbar />
       </div>
       </div>

      {/* LanguageSwitcher positioned on the right side on larger screens */}
      <div className="mt-0">
        <LanguageSwitcher />
      </div>
      </div>
    </header>
  );
};

export default Header;
