import { useTranslation } from "react-i18next";
import Slider from "./Slider"; // Ensure the import path is correct
import Footer from "../../components/footer/footer";

const Home = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <>
      <div className="w-full">
        <Slider />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
