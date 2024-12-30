// Stock.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockHeader from './header';
import SearchForm from './searchForm';
import StockList from './stockList';


const Stock = () => {
  const { categoryName, manufacturerName } = useParams();
  const [searchFilter, setSearchFilter] = useState({
    keyword: '',
    category: categoryName || '',
    manufacturer: manufacturerName || ''
  });

  useEffect(() => {
    setSearchFilter((prevFilter) => ({
      ...prevFilter,
      category: categoryName || '',
      manufacturer: manufacturerName || ''
    }));
  }, [categoryName, manufacturerName]);

  const handleSearch = (filter) => setSearchFilter(filter);

  console.log("Search filter in Stock component:", searchFilter);

  const pageTitle = "販売機械一覧 / Stock";

  return (
    <div className='bg-[#2F2F2F]'>
      <StockHeader title={pageTitle} />
      <SearchForm onSearch={handleSearch} />
      <StockList filter={searchFilter} />
    </div>
  );
};

export default Stock;
