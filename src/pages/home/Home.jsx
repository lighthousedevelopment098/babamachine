import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from './Slidebar'; // Updated import to reflect correct filename

const Home = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <div className="">
      <Slider />
    </div>
  );
};

export default Home;
