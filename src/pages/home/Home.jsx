import { useTranslation } from "react-i18next";
import Slider from "./Slider"; // Ensure the import path is correct
import Kg from "./kg";

const Home = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <>
      <div className="w-full">
        <Slider />
        <Kg />
      </div>
    </>
  );
};

export default Home;
