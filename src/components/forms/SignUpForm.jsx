import React from 'react';
import StockHeader from '../../pages/stock/header';

const Register = () => {
    const pageTitle = "New member registration";
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
                                <fieldset className="space-y-8">
                                    <legend className="text-2xl font-bold mb-4">New User Registration</legend>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>

                                    <label htmlFor="username" className="text-lg font-semibold">Choose a Username <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="username" type="text" id="username" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
                                    <div>
                                    <label htmlFor="billing_company" className="text-lg font-semibold">Company Name</label>
                                    <div className="div_text">
                                        <input name="billing_company" type="text" id="billing_company" className="w-full h-10 px-4 border border-green-500 rounded-md" />
                                    </div>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
<div>
                                    <label htmlFor="first_name" className="text-lg font-semibold">First Name <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="first_name" type="text" id="first_name" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="last_name" className="text-lg font-semibold">Last Name <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="last_name" type="text" id="last_name" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
</div>
<div>
                                    <label htmlFor="user_email" className="text-lg font-semibold">Email <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="user_email" type="email" id="user_email" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="billing_country" className="text-lg font-semibold">Country <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <select name="billing_country" id="billing_country" className="w-full h-10 px-4 border border-green-500 rounded-md" required>
                                            <option value="" disabled>Select a country / region…</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Åland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div>
                                    <label htmlFor="billing_postcode" className="text-lg font-semibold">Zip <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="billing_postcode" type="text" id="billing_postcode" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="state" className="text-lg font-semibold">State <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="state" type="text" id="state" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="address" className="text-lg font-semibold">Address <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="address" type="text" id="address" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="billing_phone" className="text-lg font-semibold">Phone No. <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="billing_phone" type="text" id="billing_phone" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
                                    <div>
                                    <label htmlFor="billing_fax" className="text-lg font-semibold">Fax No.</label>
                                    <div className="div_text">
                                        <input name="billing_fax" type="text" id="billing_fax" className="w-full h-10 px-4 border border-green-500 rounded-md" />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="billing_mobile_phone" className="text-lg font-semibold">Mobile Phone No.</label>
                                    <div className="div_text">
                                        <input name="billing_mobile_phone" type="text" id="billing_mobile_phone" className="w-full h-10 px-4 border border-green-500 rounded-md" />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="website" className="text-lg font-semibold">Website</label>
                                    <div className="div_text">
                                        <input name="website" type="text" id="website" className="w-full h-10 px-4 border border-green-500 rounded-md" />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="machines" className="text-lg font-semibold">Machine of Interest</label>
                                    <div className="div_text">
                                        <input name="machines" type="text" id="machines" className="w-full h-10 px-4 border border-green-500 rounded-md" placeholder="Excavator, Wheel loader, etc" />
                                    </div>
                                    </div>
<div>
                                    <label htmlFor="password" className="text-lg font-semibold">Password <span className="text-red-500">*</span></label>
                                    <div className="div_text">
                                        <input name="password" type="password" id="password" className="w-full h-10 px-4 border border-green-500 rounded-md" required />
                                    </div>
                                    </div>
<div>
                                    <div className=" flex items-center">
                                        <input name="tos" type="checkbox" id="tos" value="agree" required />
                        
                                        <a href="./privacy-policy" target="_blank" rel="noopener" className="text-primary text-xl font-medium ml-0 lg:ml-[-150px]">I agree to the terms of use</a>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4'>
                                    <div className=''>
    <label htmlFor="" className="text-lg font-semibold ">Valuable Information email</label>
    <div className="mt-2">
        <input name="" type="checkbox" id="" value="" defaultChecked />
    </div>
</div>

<div className=''>
    <label htmlFor="billing_dm" className="text-lg font-semibold ">Valuable Information DM</label>
    <div className="div_checkbox mt-2">
        <input name="billing_dm" type="checkbox" id="billing_dm" value="send" defaultChecked />
    </div>
</div>
</div>
<div>
                                   
                                    </div>
                                    </div>
                                    <input name="a" type="hidden" value="register" />
                                    <input name="wpmem_reg_page" type="hidden" value="" />
                                    <div className="button_div">
                                        <input name="submit" type="submit" value="Register" className="w-full h-12 bg-green-500 text-white rounded-md" />
                                    </div>
                       
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
