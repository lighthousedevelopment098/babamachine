// import React from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../../config/routes';
// import { useTranslation } from 'react-i18next'; // Import useTranslation

// const Navbar = () => {
//   const { t } = useTranslation(); // Hook to access the translation function

//   return (
//     <nav className="flex space-x-4">
//       {routes.filter(route => route.showInNav).map((route) => (
//         <Link 
//           key={route.path} 
//           to={route.path} 
//           className="relative px-4 py-2 rounded-lg text-lg font-semibold text-[#2EC933] transition duration-300 transform hover:scale-105 hover:text-[#2EC933] hover:border-b-2 hover:border-[#2EC933] hover:shadow-lg"
//         >
//           {t(route.name)} {/* Translated route name */}
//           <span className="absolute inset-0 bg-transparent rounded-lg transition duration-300 group-hover:bg-[#2EC933]"></span>
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation(); // Hook to access the translation function
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <>
    <nav className="relative flex justify-between items-center p-4">
    
      <div className="flex sm:hidden items-center">
        <button 
          onClick={toggleMenu} 
          className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded focus:outline-none"
        >
          {isOpen ? '✖' : '☰'} {/* Show close icon when open */}
        </button>
      </div>

      {/* Regular Navbar for larger screens */}
      <div className="hidden sm:flex space-x-4">
        {routes.filter(route => route.showInNav).map((route) => (
          <Link 
            key={route.path} 
            to={route.path} 
            className="relative py-2 rounded-lg text-lg font-semibold text-primary transition duration-300 transform hover:scale-105 hover:text-[#2EC933] hover:border-b-2 hover:border-[#2EC933] hover:shadow-lg"
          >
            {t(route.name)} {/* Translated route name */}
          </Link>
        ))}
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-hoverprimary shadow-md z-10 w-40 sm:w-auto"> {/* Adjusted width */}
          {routes.filter(route => route.showInNav).map((route) => (
            <Link 
              key={route.path} 
              to={route.path} 
              onClick={() => setIsOpen(false)} // Close the menu on link click
              className="block px-4 py-2 text-lg font-semibold text-[#2EC933] transition duration-300 hover:scale-105 hover:text-[#2EC933] hover:shadow-lg"
            >
              {t(route.name)} {/* Translated route name */}
            </Link>
          ))}
        </div>
      )}
    </nav>
      
      </>
  );
};

export default Navbar;




