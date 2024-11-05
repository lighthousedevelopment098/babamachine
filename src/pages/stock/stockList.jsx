// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Stock = () => {
//   const { t } = useTranslation(); // Hook to access the translation function

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">{t('our_services')}</h1> 
//       <p className="mt-2 text-lg">{t('service_description')}</p> Translated description
//       <ul className="mt-4 list-disc list-inside">
//         <li>{t('service_1')}</li> 
//         <li>{t('service_2')}</li> 
//         <li>{t('service_3')}</li> 
//       </ul>
//     </div>
//   );
// };

// export default Stock;



import React, { useState, useEffect } from 'react';
import data from '../../Utils/data.json'; // Assuming data.json is in the same directory
import MainCard from '../../components/card/MainCard';

const StockList = ({ filter }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter(item => 
        (!filter.keyword || item.title.includes(filter.keyword)) &&
        (!filter.category || item.category === filter.category)
      )
    );
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto my-5 flex justify-center gap-3 py-6" style={{justifyContent:"center"}}>
      {filteredData.map(item => (
        <MainCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default StockList;


