// import React from "react";
// import SettingCard from "../../components/card/SettingCard";

// const MembershipRegistration = () => {
//   return (
//     <div className="bg-[#686868]">
//       <div className=" container py-16 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//         <img src="/img_members01.jpg" alt="img" />

//         <div className="bg-green-500 text-black p-12 rounded-lg h-full">
//           <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg tracking-wide">
//             How to sign up
//           </h2>

//           <div className="space-y-10">
//             <div>
//               <p className="text-sm font-semibold uppercase text-green-200 tracking-wide mb-1">
//                 Membership benefits 01
//               </p>
//               <p className="font-medium text-lg leading-relaxed underline underline-offset-4 decoration-2">
//                 Granted access to the price list of our second-hand machinery
//               </p>
//             </div>

//             <div>
//               <p className="text-sm font-semibold uppercase text-green-200 tracking-wide mb-1">
//                 Membership benefits 02
//               </p>
//               <p className="font-medium text-lg leading-relaxed underline underline-offset-4 decoration-2">
//                 Receive notification emails of new inventory
//               </p>
//             </div>

//             <div>
//               <p className="text-sm font-semibold uppercase text-green-200 tracking-wide mb-1">
//                 Membership benefits 03
//               </p>
//               <p className="font-medium text-lg leading-relaxed underline underline-offset-4 decoration-2">
//                 Invited to our special sale events
//               </p>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition">
//               Membership registration
//             </button>
//           </div>
//         </div>
//         <div>
//           <SettingCard
//             img={"/setting.png"}
//             title={"Company"}
//             des={
//               "We are a dealer of heavy-duty machinery for construction uses.We deal with businesses in Japan and worldwide."
//             }
//           />
//         </div>
//         <div>
//           <SettingCard
//             img={"/contact.png"}
//             title={"Conatct"}
//             des={
//               "Please feel free to contact us for information including our products and recruitment."
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembershipRegistration;
import React from "react";
import SettingCard from "../../components/card/SettingCard";

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
                  <dt className="font-semibold text-white border-b-4 border-white pb-1">
                    Membership benefits {num}
                  </dt>
                  <dd className="text-lg font-bold mt-2 border-b-4 border-black pb-1">
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
              <a
                href="https://www.machinelines.com/en/register"
                className="inline-flex justify-center items-center min-w-[200px] h-12 px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-green-100 transition duration-200"
              >
                Membership registration
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 ">
          <SettingCard
            title={"Company"}
            img={"/setting.png"}
            des={
              "We are a dealer of heavy-duty machinery for construction uses. We deal with businesses in Japan and worldwide."
            }
          />
          <SettingCard
            title={"Contact"}
            img={"/contact.png"}
            des={
              "Please feel free to contact us for information including our products and recruitment."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipRegistration;
