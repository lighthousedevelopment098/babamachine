import React from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Importing relevant icons
import './memberpage.css'; 
import MemberHeader from "./header";
import { Link } from "react-router-dom";

const Members = () => {
  const pageTitle = "Become a Member"; // You can change this dynamically based on your application logic

  return (
    <div className="bg-[#2F2F2F]">
          <MemberHeader title={pageTitle} />

      <div id="secMypage" className="content intro snipcss-WAZWz">
        <div className="inner">
          <div className="wrap">
            <div className="block">
              <h3 className="heading">For member</h3>
              <div id="wpmem_login">
                <form action="" method="POST" id="wpmem_login_form" className="form">
                  <input type="hidden" id="_wpmem_login_nonce"  />
                  <input type="hidden" name="_wp_http_referer" value="/en/member" />
                  <fieldset>
                    <legend>Existing Users Log In</legend>
                    <label htmlFor="log">
                      {/* <FaUser /> */}
                     Username or Email</label>
                    <div className="div_text">
                      <input name="log" type="text" id="log" className="username" required />
                    </div>
                    <label htmlFor="pwd">
                      {/* <FaLock />  */}
                    Password</label>
                    <div className="div_text">
                      <input name="pwd" type="password" id="pwd" className="password" required />
                    </div>
                  
                    <input name="a" type="hidden" value="login" />
                    <input name="redirect_to" type="hidden" value="" />
                    <div className="button_div">
                      <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                      <label htmlFor="rememberme">Remember Me</label>
                      <input type="submit" name="Submit" value="Log In" className="buttons" />
                    </div>
                    <div className="link-text">
                      <span className="link-text-forgot">Forgot password?&nbsp;
                        <a href="#">Click here to reset</a>
                      </span>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="block">
              <h3 className="heading">Those who have not registered as a member.</h3>
              <dl className="merit">
                <dt><span>Member benefits 01</span></dt>
                <dd><span>You can browse the sales price of used machines!</span></dd>
                <dt><span>Member benefits 02</span></dt>
                <dd><span>Immediately receive notification of new arrivals of construction equipment by e-mail!</span></dd>
                <dt><span>Member benefits 03</span></dt>
                <dd><span>Information on used exhibition sales</span></dd>
              </dl>
              <p className="btn01">
                 
              <Link to="/register">New member registration</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
