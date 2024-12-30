// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const Login = () => {
//   const { t } = useTranslation(); // Hook to access the translation function
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Logging in with:', { username, password });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">{t('login')}</h1> {/* Translated title */}
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="mb-4">
//           <label className="block text-sm">{t('username')}</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm">{t('password')}</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           {t('login')} {/* Translated button */}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React from "react";
import MemberBenefits from "./MemberBenifits";

const Login = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20">
      
      {/* Login Form Section */}
      <div className="flex flex-col">
        <h1 className="text-black text-2xl font-bold ">Login</h1>
        <div className="block">
          <h3 className="heading text-xl font-bold mb-4">For member</h3>
          <div id="wpmem_login">
            <a id="login"></a>
            <form
              action="https://www.machinelines.com/en/login"
              method="POST"
              id="wpmem_login_form"
              className="form"
            >
              <input
                type="hidden"
                id="_wpmem_login_nonce"
                name="_wpmem_login_nonce"
                value="14734c24e5"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                value="/en/login"
              />
              <fieldset className="border border-gray-300 p-4">
                <legend className="text-lg font-semibold mb-2">
                  Existing Users Log In
                </legend>

                <label htmlFor="log" className="font-medium text-start">
                  Username or Email
                </label>
                <div>
                  <input
                    name="log"
                    type="text"
                    id="log"
                    className="username w-full border-2 border-green-500 outline-none rounded"
                    required
                  />
                </div>

                <label htmlFor="pwd" className="font-medium mt-4">
                  Password
                </label>
                <div className="div_text mb-4">
                  <input
                    name="pwd"
                    type="password"
                    id="pwd"
                    className="password w-full border border-primary p-2 rounded"
                    required
                  />
                </div>

                <div className="inv-recaptcha-holder mb-4">
                  <div
                    className="grecaptcha-badge fixed bottom-3 left-[-186px] w-64 h-15 box-shadow-md rounded overflow-hidden"
                    style={{ boxShadow: "gray 0px 0px 5px" }}
                  >
                    <div className="grecaptcha-logo">
                      <iframe
                        title="reCAPTCHA"
                        width="256"
                        height="60"
                        role="presentation"
                        name="a-vmb0z61qvohw"
                        frameBorder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfAfeYhAAAAADiDASZqimuv5OG-o7atx39nJzqE&co=aHR0cHM6Ly93d3cubWFjaGluZWxpbmVzLmNvbTo0NDM.&hl=en&v=zIriijn3uj5Vpknvt_LnfNbF&size=invisible&badge=bottomleft&cb=1yd6to3l37q4"
                      ></iframe>
                    </div>
                    <div className="grecaptcha-error"></div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response hidden"
                    ></textarea>
                  </div>
                  <iframe style={{ display: "none" }}></iframe>
                </div>

                <input name="a" type="hidden" value="login" />
                <input
                  name="redirect_to"
                  type="hidden"
                  value="https://www.machinelines.com/en/login"
                />

                <div className="button_div flex items-center mb-4">
                  <input
                    name="rememberme"
                    type="checkbox"
                    id="rememberme"
                    value="forever"
                    className="mr-2"
                  />
                  <label htmlFor="rememberme" className="mr-4">
                    Remember Me
                  </label>
                  <input
                    type="submit"
                    name="Submit"
                    value="Log In"
                    className="buttons bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
                  />
                </div>

                <div className="link-text text-sm">
                  <span className="link-text-forgot">
                    Forgot password?&nbsp;
                    <a
                      href="https://www.machinelines.com/en/member/?a=pwdreset"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Click here to reset
                    </a>
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {/* Member Benefits Section */}
      <div className="flex items-center justify-center mt-8">
        <MemberBenefits />
      </div>
    </div>
    </>
  );
};

export default Login;


