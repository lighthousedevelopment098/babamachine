import React from "react";
import { FaSearch } from "react-icons/fa";

const Stock = () => {
  return (
    <div className="bg-lightgray h-[100vh] ">
      <img src="/deco_stock01.png" alt="arrow" />

      <h1 className="text-4xl font-semibold text-white text-center py-5">
        Stock
      </h1>
      <div className="border border-white w-full container my-5"></div>
      <div className="container py-10">
        <div>
          <label
            htmlFor="keyword"
            className="text-2xl text-white font-semibold"
          >
            Keyword
          </label>
          <div>
            <input
              type="text"
              className="border border-primary rounded-sm px-2 py-1"
              placeholder="Please Enter a Keyword"
            />
            <button className="bg-primary text-white px-2 py-1">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
