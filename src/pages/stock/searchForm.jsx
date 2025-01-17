import React, { useState } from "react";  
import { FaSearch } from "react-icons/fa";
import data from '../../static-util/data.json';
import './searchform.css';

const SearchForm = ({ onSearch }) => {
  const [isMakerVisible, setIsMakerVisible] = useState(false);
  const [filter, setFilter] = useState({
    keyword: '',
    category: '',
    manufacturer: ''
  });

  const handleSearchClick = () => {
    setIsMakerVisible(!isMakerVisible);
  };

  const handleChange = (e) => {
    const newFilter = {
      ...filter,
      [e.target.name]: e.target.value
    };
    setFilter(newFilter);
    onSearch(newFilter); // Trigger filtering on each change
  };

  return (
    <div className="flew">
      <div className="inner">
        <p className="btn01 accordion on" onClick={handleSearchClick}>
          <span>Refined Search</span>
        </p>

        <div className={`accordion-content ${isMakerVisible ? "show" : ""}`}>
          <form className="search">
            <input type="hidden" name="post_type" value="product" />
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <dt>Keyword</dt>
                <dd>
                  <div className="input-search sm">
                    <input
                      type="search"
                      name="keyword"
                      value={filter.keyword}
                      onChange={handleChange}
                      placeholder="Free word"
                      className="outline-none"
                    />
                    <button type="submit" className="h-auto text-white"
                    style={{color:"white", height:"auto"}}
                    >
                      <FaSearch />
                    </button>
                  </div>
                </dd>
              </div>

              <div>
                <dt>Category</dt>
                <dd>
                  <div className="select-wrap sm">
                    <select name="category" value={filter.category} onChange={handleChange} className="outline-none">
                      <option value="">Category Select</option>
                      {data.categories.map((category, index) => (
                        <option key={index} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </dd>
              </div>

              {isMakerVisible && (
                <div>
                  <dt>Manufacturer</dt>
                  <dd>
                    <div className="select-wrap sm">
                      <select name="manufacturer" value={filter.manufacturer} onChange={handleChange}>
                        <option value="">Manufacturer Select</option>
                        {data.manufacturers.map((maker, index) => (
                          <option key={index} value={maker.name}>
                            {maker.name}
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
