import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './searchform.css';

const SearchForm = () => {
  const [isMakerVisible, setIsMakerVisible] = useState(false);

  const handleSearchClick = () => {
    setIsMakerVisible(!isMakerVisible);
  };

  const categories = [
    { label: "wheel-loader", value: "wheel-loader" },
    { label: "hydraulic-excavator", value: "hydraulic-excavator" },
    { label: "bulldozer", value: "bulldozer" },
    { label: "grader", value: "grader" },
    { label: "dump-truck", value: "dump-truck" },
    { label: "rotary-snowplow", value: "rotary-snowplow" },
    { label: "tire", value: "tire" },
   
  ];

  const makers = [
    { label: "komatsu", value: "komatsu" },
    { label: "hitachi", value: "hitachi" },
    { label: "CAT", value: "cat" },
    { label: "kawasaki", value: "kawasaki" },
    { label: "TCM", value: "tcm" },
    { label: "kubota", value: "kubota" },
    { label: "niigata", value: "niigata" },
  
  ];

  return (
    <div className="flew">
      <div className="inner">
        <p className="btn01 accordion on" onClick={handleSearchClick}>
          <span>Refined Search</span>
        </p>

        <div className={`accordion-content ${isMakerVisible ? "show" : ""}`}>
          <form method="get" className="search" action="https://www.machinelines.com/">
            <input type="hidden" name="post_type" value="product" />
            <dl className="flex tri">
              <div>
                <dt>Keyword</dt>
                <dd>
                  <div className="input-search sm">
                    <input
                      type="search"
                      name="s"
                      placeholder=" Free word"
                      className=""
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </div>
                </dd>
              </div>

              <div>
                <dt>Category</dt>
                <dd>
                  <div className="select-wrap sm">
                    <select name="category">
                      <option value="">Category Select</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </dd>
              </div>

              {isMakerVisible && (
                <div>
                  <dt>Maker</dt>
                  <dd>
                    <div className="select-wrap sm">
                      <select name="maker">
                        <option value="">kubota</option>
                        {makers.map((maker, index) => (
                          <option key={index} value={maker.value}>
                            {maker.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </dd>
                </div>
              )}
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
