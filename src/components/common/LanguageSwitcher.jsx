import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value); // Change the language based on selection
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => changeLanguage('en')} className="hover:underline">
        English
      </button>
      <button onClick={() => changeLanguage('jp')} className="hover:underline">
        日本語
      </button>
    </div>
  );
};

export default LanguageSwitcher;
