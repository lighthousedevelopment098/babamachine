
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
import { useTranslation } from 'react-i18next';
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-center  flex-row  ">
      {/* Logo or Brand Name */}
   

      {/* Menu Button for small and medium screens */}
      <div className='flex justify-center '>
      <button
        className="text-primary sm:block md:hidden lg:hidden px-3 py-2  rounded-lg focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <VscChromeClose /> : <IoMenu/>}
      </button>
      </div>

      {/* Navigation Links - Always visible on large screens, collapsible on smaller screens */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        }  flex items-start md:flex md:w-auto md:items-center md:justify-center -mb-10 md:mb-0`}
      >
        <div className="flex flex-col  md:flex-row lg:space-x-6">
          {routes
            .filter((route) => route.showInNav)
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="px-4 py-2  text-lg font-semibold text-[#2EC933] rounded-lg transition duration-300 transform hover:scale-105 hover:text-[#2EC933] hover:border-b-2 hover:border-[#2EC933] hover:shadow-lg"
              >
                {t(route.name)}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





