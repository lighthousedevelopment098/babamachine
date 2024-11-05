
import { useTranslation } from "react-i18next";
import logo from "/logo_anime_ol.gif";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-primary px-10 py-8">
      <div className="flex justify-center items-center mb-6">
        <img src={logo} alt="logo" className="h-14 w-auto " />
      </div>
      <div className="flex gap-8 justify-center items-center mt-8">
        <div className="border border-gray w-60"></div>
        <div className="border border-gray w-72"></div>
      </div>
      <div className="flex justify-center mt-10 flex-col md:flex-row">
        <div className="text-center text-nowrap">
          <a
            href="https://www.machinelines.com/en"
            className="text-primary hover:text-hoverprimary text-2xl font-bold"
          >
            {t("english_home")}
          </a>
        </div>
        <div className="ml-6 text-center text-nowrap">
          <p className="font-en">
            <a
              href="tel:+81118751175"
              className="text-primary hover:text-hoverprimary text-2xl font-bold"
            >
              {t("contact_no")}
            </a>
          </p>
        </div>
      </div>
      <div className="border-b-2 border-gray mt-6 mb-6 flex justify-center w-full "></div>

      <div className="flex flex-wrap justify-around">
        <div className="w-full lg:w-1/3 mb-8">
          <h3 className="text-xl font-bold mb-4 hover:text-hoverprimary cursor-pointer">
            {t("stock")}
          </h3>
          <div className="border-b border-gray mb-3"></div>
          <div className="flex flex-row gap-8">
            {/* Category Column */}
            <div>
              <h4 className="text-xl font-normal mb-4 text-white">
                {t("category")}
              </h4>
              <div className="border-b border-dashed border-gray mb-4"></div>
              <ul className="space-y-2 ">
                <li className="hover:text-hoverprimary">
                  <a href="/wheel-loader">{t("wheel_loader")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/excavator">{t("excavator")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/bulldozer">{t("bulldozer")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/grader">{t("grader")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/dump-truck">{t("dump_truck")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/roller">{t("roller")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/crane">{t("crane")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/wheeled-excavator">{t("wheeled_excavator")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/rotary-snowplow">{t("rotary_snowplow")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/forklift">{t("forklift")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/tire">{t("tire")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/parts">{t("parts")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/attachment">{t("attachment")}</a>
                </li>
                <li className="hover:text-hoverprimary">
                  <a href="/others">{t("others")}</a>
                </li>
              </ul>
            </div>

            {/* Maker Column */}
            <div>
              <h4 className="text-xl font-normal mb-4 text-white">
                {t("maker")}
              </h4>
              <div className="border-b border-dashed border-gray mb-4"></div>
              <ul className="space-y-2">
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <li className="hover:text-hoverprimary">
                      <a href="/ud">{t("ud")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/toyota">{t("toyota")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/hitachi">{t("hitachi")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/kawasaki">{t("kawasaki")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/kobelco">{t("kobelco")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/isuzu">{t("isuzu")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/kubota">{t("kubota")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/suzuki">{t("suzuki")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/tadano">{t("tadano")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/nichijo">{t("nichijo")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/hino">{t("hino")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/mitsubishi">{t("mitsubishi")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/others">{t("others")}</a>
                    </li>
                  </div>
                  <div className="space-y-2">
                    <li className="hover:text-hoverprimary">
                      <a href="/nissan-diesel">{t("nissan_diesel")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/komatsu">{t("komatsu")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/cat">{t("cat")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/tcm">{t("tcm")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/ihi">{t("ihi")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/kato">{t("kato")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/sakai">{t("sakai")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/sumitomo">{t("sumitomo")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/niigata">{t("niigata")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/nissan">{t("nissan")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/furukawa">{t("furukawa")}</a>
                    </li>
                    <li className="hover:text-hoverprimary">
                      <a href="/yanmar">{t("yanmar")}</a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mb-8">
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.machinelines.com/en/news"
                className="text-primary hover:text-hoverprimary text-lg font-bold"
              >
                {t("news")}
              </a>
              <div className="border-b border-gray mt-2"></div>
            </li>
            <li>
              <a
                href="https://www.machinelines.com/en/company"
                className="text-primary hover:text-hoverprimary"
              >
                {t("company")}
              </a>
              <div className="border-b border-gray mt-2"></div>
            </li>
            <li>
              <a
                href="https://www.machinelines.com/en/contact"
                className="text-primary hover:text-hoverprimary"
              >
                {t("contact")}
              </a>
              <div className="border-b border-gray mt-2"></div>
            </li>
          </ul>
          <div className="mt-4">
            <p>
              <a
                href="https://www.machinelines.com/en/privacy-policy"
                className="text-primary hover:text-hoverprimary"
              >
                {t("privacy_policy")}
              </a>
            </p>
            <p className="mt-8">
              <a
                href="https://www.machinelines.com/en/login"
                className="text-white bg-primary px-6 py-4 hover:bg-hoverprimary"
              >
                {t("member_login")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
