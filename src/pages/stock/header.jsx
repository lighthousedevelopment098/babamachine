import React from 'react';
import './header.css';

const StockHeader = ({ title }) => {
  return (
    <header id="page-header">
      <div className="inner">
        <h2 className="page-title font-bold">{title}</h2>
      </div>
    </header>
  );
};

export default StockHeader;
