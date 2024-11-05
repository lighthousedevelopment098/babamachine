import React, { useState } from 'react';
import StockHeader from './header';
import SearchForm from './searchForm';
import StockList from './stockList';
const Stock = () => {
  const [searchFilter, setSearchFilter] = useState({});

  const handleSearch = (filter) => setSearchFilter(filter);
  const pageTitle = "販売機械一覧 / Stock"; // You can change this dynamically based on your application logic

  return (
    <div className='bg-[#2F2F2F]'>
      <StockHeader title={pageTitle} />
      <SearchForm onSearch={handleSearch} />
      <StockList filter={searchFilter} />
    </div>
  );
};

export default Stock;
