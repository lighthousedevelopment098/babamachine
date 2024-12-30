import React from "react";

const Greeting = () => {
  return (
    <>
     <div className="text-start ml-[10%] pt-4">
        <h2 className="text-2xl font-bold">Company</h2>
      </div>
      <div className="w-[80%] bg-white p-6 flex justify-center items-center mx-auto my-8">
        <div className="greeting grid grid-cols-1 md:grid-cols-5 items-start gap-4">

          <div className="md:col-span-4">
            <h3 className=" text-xl font-bold mb-4">Greeting</h3>
            <div className="txt text-gray-700 space-y-4">
              <p>
                The core operation of Machinelines Inc. is to sell and purchase
                construction machinery domestically and internationally, and also to
                rent construction machinery and other types of trucks.
              </p>
              <p>
                We offer high-quality products in order to provide our clients with
                reassurance. This is because we have high standards when examining
                and selecting our products. We also have a wide selection of
                machinery products which we have developed through our broad
                business network of the industry. We have established trustworthy
                relationships with our clients of various backgrounds by serving
                them promptly and amply.
              </p>
              <p>
                Hokkaido offers a large volume of second-hand construction machinery
                of great quality due to the special climate. During winter, most
                construction is halted due to heavy snowfalls; therefore, we have a
                sustainable inventory of trucks and machinery with fewer hours of
                operation than other parts of Japan.
              </p>
              <p>
                Moreover, we opened Ebetsu Kakuyama machinery park. Recently, the
                construction industry is facing a lack of workers and an aging
                workforce. It has become a less popular career among the young
                generation. We opened the park with the hope of providing an
                opportunity for children to enjoy experiencing operating the
                machinery and learning about the mechanisms. In this way, the
                construction industry may regain its popularity.
              </p>
              <p>
                We would like to contribute to the Hokkaido region in this way, and
                try our best to develop the construction industry. We have
                determined to work harder to improve our service, so please choose
                us as your business partner.
              </p>
            </div>
          </div>

          <figure className="md:col-span-1 flex flex-col items-center">
            <img
              src="https://www.machinelines.com/wp-content/themes/lines/img/img_greeting01.jpg"
              alt="President Yukio Oguro"
              className="w-full rounded-md shadow-md"
            />
            <figcaption className="text-center mt-4 ">
                <div className="flex gap-4">
              <span className=" text-gray-500">President</span>
              <p className="text-lg font-medium">Yukio Oguro</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Greeting;
