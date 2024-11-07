import React from 'react';
import './signup.css'
import StockHeader from '../../pages/stock/header';
const Register = () => {
    const pageTitle = "New member registration"
    return (
        <div id="secRegister" className="bg-[#2F2F2F]">
             <StockHeader title={pageTitle} />
            <div className="inner">
                <div className="form-block block">
                    <div className="register">
                        <div id="wpmem_reg">
                            <a id="register" href="#"></a>
                            <form name="form" method="post" action="https://www.machinelines.com/en/register" id="wpmem_register_form" className="form">
                                <input type="hidden" id="_wpmem_register_nonce" name="_wpmem_register_nonce" value="b3d80053f5" />
                                <input type="hidden" name="_wp_http_referer" value="/en/register" />
                                <fieldset>
                                    <legend>New User Registration</legend>
                                    <label htmlFor="username" className="text">Choose a Username<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="username" type="text" id="username" className="textbox" required />
                                    </div>
                                    <label htmlFor="billing_company" className="text">Company name</label>
                                    <div className="div_text">
                                        <input name="billing_company" type="text" id="billing_company" className="textbox" />
                                    </div>
                                    <label htmlFor="first_name" className="text">First Name<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="first_name" type="text" id="first_name" className="textbox" required />
                                    </div>
                                    <label htmlFor="last_name" className="text">Last Name<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="last_name" type="text" id="last_name" className="textbox" required />
                                    </div>
                                    <label htmlFor="user_email" className="text">Email<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="user_email" type="email" id="user_email" className="textbox" required />
                                    </div>
                                    <label htmlFor="billing_country" className="text">Country<span className="req">*</span></label>
                                    <div className="div_text">
                                    <div className="div_text">
                                        <select name="billing_country" id="billing_country" className="country_select" required>
                                            <option value="" disabled>Select a country / region…</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Åland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                    </div>
                                    </div>
                                    <label htmlFor="billing_postcode" className="text">Zip<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="billing_postcode" type="text" id="billing_postcode" className="textbox" required />
                                    </div>
                                    <label htmlFor="state" className="text">State<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="state" type="text" id="state" className="textbox" required />
                                    </div>
                                    <label htmlFor="address" className="text">Address<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="address" type="text" id="address" className="textbox" required />
                                    </div>
                                    <label htmlFor="billing_phone" className="text">Phone No.<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="billing_phone" type="text" id="billing_phone" className="textbox" required />
                                    </div>
                                    <label htmlFor="billing_fax" className="text">Fax No.</label>
                                    <div className="div_text">
                                        <input name="billing_fax" type="text" id="billing_fax" className="textbox" />
                                    </div>
                                    <label htmlFor="billing_mobile_phone" className="text">Mobile Phone No.</label>
                                    <div className="div_text">
                                        <input name="billing_mobile_phone" type="text" id="billing_mobile_phone" className="textbox" />
                                    </div>
                                    <label htmlFor="website" className="text">Website</label>
                                    <div className="div_text">
                                        <input name="website" type="text" id="website" className="textbox" />
                                    </div>
                                    <label htmlFor="machines" className="text">Machine of interest</label>
                                    <div className="div_text">
                                        <input name="machines" type="text" id="machines" className="textbox" placeholder="Excavator, Wheel loader, etc" />
                                    </div>
                                    <label htmlFor="password" className="text">Password<span className="req">*</span></label>
                                    <div className="div_text">
                                        <input name="password" type="password" id="password" className="textbox" required />
                                    </div>
                                    <div className="div_text">
                                        <input name="tos" type="checkbox" id="tos" value="agree" required />
                                        <a href="#" onClick={() => window.open('/en/register?tos=display', 'tos')}>Terms of Service</a>
                                        <a href="./privacy-policy" target="_blank" rel="noopener">I agree to the terms of use</a>
                                        <span className="req">*</span>
                                    </div>
                                    <label htmlFor="billing_dm_email" className="checkbox">Valuable Information email</label>
                                    <div className="div_checkbox">
                                        <input name="billing_dm_email" type="checkbox" id="billing_dm_email" value="send" defaultChecked />
                                    </div>
                                    <label htmlFor="billing_dm" className="checkbox">Valuable Information DM</label>
                                    <div className="div_checkbox">
                                        <input name="billing_dm" type="checkbox" id="billing_dm" value="send" defaultChecked />
                                    </div>
                                   
                                    <input name="a" type="hidden" value="register" />
                                    <input name="wpmem_reg_page" type="hidden" value="" />
                                    <div className="button_div">
                                        <input name="submit" type="submit" value="Register" className="buttons" />
                                    </div>
                                    <div className="req-text"><span className="req">*</span>Required field</div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
