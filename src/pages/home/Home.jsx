import { useTranslation } from "react-i18next";
import Slider from "./Slider"; // Ensure the import path is correct
import CheckSize from "./CheckSize";
import SpecialSelection from "./SpecialSelection";
import Stock from "./Stock";
import Category from "./Category";
import NewsSection from "./NewsSection";
import MembershipRegistration from "./MembershipRegistration";
import Footer from "../../components/common/footer/Footer";

const Home = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <>
      <div className="w-full">
        <Slider />
        <SpecialSelection />

        {/* <Stock /> */}
        <Category />
        <NewsSection />
        <MembershipRegistration />
      </div>
    </>
  );
};

export default Home;
