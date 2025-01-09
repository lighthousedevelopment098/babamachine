import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import data from '../../Utils/data.json';

const Category = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  const handleSearchChange = (e) => setSearchKeyword(e.target.value);
  const handleManufacturerChange = (e) => setSelectedManufacturer(e.target.value);

  return (
    <section id="secStock" className="content bg-gray02">
      <div className="inner">
        <h2 className="sec-title">Stock</h2>
        <form className="search">
          <dl className="search-wrap w-full flex  flex-col md:flex-row">
            <div>
              <dt>Keyword</dt>
              <dd>
                <div className="input-search">
                  <input
                    type="search"
                    className='h-auto'
                    placeholder="Please enter a keyword"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </div>
              </dd>
            </div>
            <div>
              <dt className='mt-4 md:mt-0'>Search by manufacturer</dt>
              <dd>
                <div className="select-wrap">
                  <select value={selectedManufacturer} onChange={handleManufacturerChange}>
                    <option value="">Please select a manufacturer</option>
                    {data.manufacturers.map((manufacturer) => (
                      <option key={manufacturer.name} value={manufacturer.name}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                </div>
              </dd>
            </div>
          </dl>
        </form>

        <h3 className="more-title">
          <span className="title">Search by category</span>
          <span className="btn-arrow right mt-3 md:mt-0">
            <Link to={'/stock'}>VIEW MORE</Link>
          </span>
        </h3>

        <ul className="category-icon-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4 six">
          {data.categories.map((category) => (
            <li key={category.name}>
              <Link to={`/category/${category.name.toLowerCase()}`}>
                <figure className="icon">
                  <img src={category.img} alt={category.name} />
                </figure>
                <span className="name">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
