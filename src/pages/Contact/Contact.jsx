import React from "react";

const Contact = () => {
  return (
    <main id="contact" className="archives lower en">
      <header id="page-header" className="bg-gray-200 ">
        <div className="ml-[6%]">
          <h2 className="text-3xl font-bold text-start text-primary">Contact</h2>
        </div>
      </header>

      <section id="secLead" className="">
  <div className="container mx-auto px-4 ">
    <div className="grid grid-cols-1 lg:grid-cols-2 p-8 justify-center  items-center">
      <figure className="img">
        <img
          src="https://www.machinelines.com/wp-content/themes/lines/img/img_contact01.jpg"
          alt="Contact"
          className="rounded-none w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-center bg-primary p-6 rounded-none">
        <h3 className="heading text-xl font-semibold">
          <img
            src="https://www.machinelines.com/wp-content/themes/lines/img/txt_contact01_en.png"
            alt="Please feel free to contact us anytime."
            className="w-full"
          />
        </h3>
        <p className="txt text-gray-100 mt-4 p-11">
          Please feel free to contact us for information including our products and recruitment.
        </p>
      </div>
    </div>
  </div>
</section>


      <div id="secForm" className="content form-content py-8 bg-gray-100">
        <div className="inner container mx-auto">
          <ul className="lead list-disc pl-5 text-gray-700">
            <li>
              Before contacting us, please visit our{' '}
              <a href="https://www.machinelines.com/en/privacy-policy" className="text-blue-500 underline">
                privacy policy page
              </a>.
            </li>
            <li>
              However, if you are not a resident of Japan, please keep in mind that we may not be able to answer your
              question depending on what your issue is.
            </li>
            <li>
              <span className="text-red-500">＊</span> Indicates a required field.
            </li>
          </ul>

          <div className="form-block mt-6">
            <form
              action="/en/contact#wpcf7-f123-o1"
              method="post"
              className="space-y-6"
              aria-label="Contact Form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                <label className="font-semibold" htmlFor="subject">
                  Inquiry Subject <span className="text-red-500">＊</span>
                </label>
                <select
                  id="subject"
                  name="your-subject"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                >
                  <option value="">— Select an option —</option>
                  <option value="For inquiries about sales">For inquiries about sales</option>
                  <option value="For inquiries about services">For inquiries about services</option>
                  <option value="For inquiries about personal information">For inquiries about personal information</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className=" font-semibold" htmlFor="company">
                  Company Name
                </label>
                <input
                  id="company"
                  name="your-company"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                />
              </div>

              <div>
                <label className=" font-semibold" htmlFor="name">
                  Your Name <span className="text-red-500">＊</span>
                </label>
                <input
                  id="name"
                  name="your-name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                />
              </div>

              <div>
                <label className=" font-semibold" htmlFor="phone">
                  Phone Number <span className="text-red-500">＊</span>
                </label>
                <input
                  id="phone"
                  name="your-tel"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                />
              </div>

              <div>
                <label className=" font-semibold" htmlFor="address">
                  Address <span className="text-red-500">＊</span>
                </label>
                <input
                  id="address"
                  name="your-address"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                />
              </div>

              <div>
                <label className=" font-semibold" htmlFor="email">
                  E-mail Address <span className="text-red-500">＊</span>
                </label>
                <input
                  id="email"
                  name="your-email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                />
              </div>
              </div>

              <div>
                <label className=" font-semibold" htmlFor="content">
                  Contact Content <span className="text-red-500">＊</span>
                </label>
                <textarea
                  id="content"
                  name="your-body"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                  required
                ></textarea>
              </div>

              <div className="text-center flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold  py-4 px-6 rounded-none hover:bg-blue-600"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
