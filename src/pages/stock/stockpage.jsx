// Stock.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockHeader from './header';
import SearchForm from './searchForm';
import StockList from './stockList';

const Stock = () => {
  const { categoryName } = useParams();
  const [searchFilter, setSearchFilter] = useState({
    keyword: '',
    category: categoryName || '', 
    manufacturer: ''
  });
  
  // Log category name from URL
  console.log("Category name from params:", categoryName);

  useEffect(() => {
    setSearchFilter((prevFilter) => ({
      ...prevFilter,
      category: categoryName || ''
    }));
  }, [categoryName]);

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
