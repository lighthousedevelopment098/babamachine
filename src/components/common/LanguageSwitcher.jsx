
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng); // Change the language
//   };

//   return (
//     <div className="flex items-center space-x-4">
//       <button onClick={() => changeLanguage('en')} className="hover:underline">
//         English
//       </button>
//       <button onClick={() => changeLanguage('jp')} className="hover:underline">
//         日本語
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;



import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language based on selection
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => changeLanguage("en")}
        className={`border border-primary px-3 py-1 md:px-3 md:py-2 font-semibold rounded-md transition duration-300
          ${i18n.language === 'en' ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary hover:text-white hover:shadow-lg'}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("jp")}
        className={`border border-primary px-3 py-1 md:px-3 md:py-2 font-semibold rounded-md transition duration-300
          ${i18n.language === 'jp' ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary hover:text-white hover:shadow-lg'}`}
      >
        日本語
      </button>
    </div>
  );
};

export default LanguageSwitcher;

