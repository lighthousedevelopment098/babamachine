
import React from "react";
import SettingCard from "../../components/card/SettingCard";
import { Link } from "react-router-dom";
const MembershipRegistration = () => {
  return (
    <div className=" bg-[#686868] h-full w-full p-5 md:py-10">
      <div className="inner max-w-6xl mx-auto">
        <div className="members-box flex flex-wrap bg-white shadow-md rounded-sm mt-5 overflow-hidden">
          <figure className="w-full md:w-2/4">
            <img
              src="https://www.machinelines.com/wp-content/themes/lines/img/img_members01.jpg"
              alt="Membership"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="box p-6 md:p-10 bg-primary w-full md:w-2/4">
            <h2 className="heading text-xl font-bold mb-4">
              <img
                src="https://www.machinelines.com/wp-content/themes/lines/img/txt_members01_en.png"
                alt="How to sign up"
                className="h-12"
              />
            </h2>
            <dl className="merit space-y-4">
              {["01", "02", "03"].map((num, index) => (
                <div key={index}>
                  <dt className="font-semibold text-white border-b-4 border-white pb-1" style={{color:"white"}}>
                    Membership benefits {num}
                  </dt>
                  <dd className="text-lg font-bold text-black  mt-2 border-b-4 border-black pb-1">
                    {index === 0
                      ? "Granted access to the price list of our second-hand machinery"
                      : index === 1
                      ? "Receive notification emails of new inventory"
                      : "Invited to our special sale events"}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="btn02 mt-6">
              <Link
                to="/register"
                className="inline-flex justify-center items-center min-w-[200px] h-12 px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-green-100 transition duration-200"
              >
                Membership registration
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 ">
          <Link to={"/greeting"}>
          <SettingCard
         
            title={"Company"}
            img={"/setting.png"}
            des={
              "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide."
            }
          />
          </Link>
          <Link to={"/contact"}>
          <SettingCard
            title={"Contact"}
            img={"/contact.png"}
            des={
              "Please feel free to contact us for information including our products and recruitment."
            }
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipRegistration;
