

// StockList.jsx
import React, { useState, useEffect } from 'react';
import data from '../../Utils/data.json';
import MainCard from '../../components/card/MainCard';

const StockList = ({ filter }) => {
  const [filteredData, setFilteredData] = useState(data.machineData);

  useEffect(() => {
    const filtered = data.machineData.filter(item =>
      (!filter.keyword || item.title.toLowerCase().includes(filter.keyword.toLowerCase())) &&
      (!filter.category || item.category.toLowerCase() === filter.category.toLowerCase()) &&
      (!filter.manufacturer || item.manufacturer.toLowerCase() === filter.manufacturer.toLowerCase())
    );

    console.log("Filtered data after applying filter:", filtered);
    setFilteredData(filtered);
  }, [filter]);

  console.log("FilteredData in StockList:", filteredData);

  return (
    <div className="max-w-6xl mx-auto my-5 flex justify-center gap-3 py-6" style={{justifyContent:"center"}}>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <MainCard key={item.serialNo} data={item} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default StockList;
