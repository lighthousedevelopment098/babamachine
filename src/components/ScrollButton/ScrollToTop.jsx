import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-hoverprimary rounded-full shadow-xl hover:shadow-2xl  z-50 mr-0 md:mr-8 lg:mr-0 transition-transform duration-300 ease-in-out "
    aria-label="Scroll to top"
  >
    <img
      src="https://www.machinelines.com/wp-content/themes/lines/img/arrow01.png"
      alt="totop"
      className="w-6 h-6 -rotate-45 flex items-center pr-1"
    />
  </button>
  );
};

export default ScrollToTopButton;
