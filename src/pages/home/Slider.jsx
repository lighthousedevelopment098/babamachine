import Slider from "react-slick";
import { useTranslation } from "react-i18next"; // Importing the translation hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderItems = [
  {
    imgSrc:
      "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc:
      "https://www.machinelines.com/wp-content/themes/lines/img/img_key01.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc:
      "https://www.machinelines.com/wp-content/themes/lines/img/img_key04.jpg",
    catchKey: "exclusive_information",
    leadKey: "membership_access",
    btnLink: "/",
    btnTextKey: "get_membership",
  },
  {
    imgSrc:
      "https://www.machinelines.com/wp-content/themes/lines/img/img_key03.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
  {
    imgSrc:
      "https://www.machinelines.com/wp-content/themes/lines/img/img_key05.jpg",
    catchKey: "high_quality_machinery",
    leadKey: "selling_machinery",
    btnLink: "/",
    btnTextKey: "list_of_second_hand_machinery",
  },
];

const SliderComponent = () => {
  const { t } = useTranslation(); // Access the translation function

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container w-full  overflow-hidden">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="slide-item relative w-full h-screen">
              <div
                className="bg-cover bg-center h-full w-full"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
              >
                <div className="flex flex-col justify-center items-start h-full p-8 text-white">
                  <p
                    className="catch text-3xl font-bold"
                    style={{ fontSize: "4rem", lineHeight: "2" }}
                  >
                    {t(item.catchKey)}
                  </p>
                  <p className="lead text-xl mt-2" style={{ fontSize: "2rem" }}>
                    {t(item.leadKey)}
                  </p>
                  <p className="btn01 mt-4">
                    <a
                      href={item.btnLink}
                      className="inline-block px-6 py-2 text-white bg-green-600 hover:bg-green-500 rounded-lg transition duration-300"
                    >
                      {t(item.btnTextKey)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
