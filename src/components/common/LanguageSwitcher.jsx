import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => changeLanguage("en")}
        className="border border-primary px-3 hover:shadow-graycustum hover:shadow-lg shadow-md shadow-primary py-2 font-semibold rounded-md hover:bg-primary hover:text-white"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("jp")}
        className="border border-primary px-3 hover:shadow-graycustum hover:shadow-lg  shadow-md shadow-primary py-2 font-semibold rounded-md hover:bg-primary hover:text-white"
      >
        日本語
      </button>
    </div>
  );
};

export default LanguageSwitcher;
