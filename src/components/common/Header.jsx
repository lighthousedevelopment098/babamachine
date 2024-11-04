import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo_anime_ol.gif";

const Header = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <header
      className="flex items-center justify-between  bg-white text-[#2EC933] shadow-md"
      style={{ padding: "1rem 3rem" }}
    >
      <img src={logo} alt="Logo" className="h-10 " />
      <Navbar />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
