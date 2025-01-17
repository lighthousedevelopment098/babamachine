// import React from 'react'
// import PageHeader from './header/detailHeader'
// import Gallery from './gallary/Gallery'
// import DetailTexts from './detailtext/detailtext'
// import RelatedMachines from './relatedData/relatedData'

// const stockDetail = () => {
//   return (
//     <div className='bg-[#2F2F2F] '>
//     <PageHeader />
//     <Gallery />
//     <DetailTexts />
//     <RelatedMachines />
//     </div>
//   )
// }

// export default stockDetail


import React, { useEffect, useState } from 'react';
import PageHeader from './header/detailHeader';
import Gallery from './gallary/Gallery';
import DetailTexts from './detailtext/detailtext';
import RelatedMachines from './relatedData/relatedData';

const StockDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the API by ID (example ID '678a273a021c19c77483e6c7')
    const fetchProductData = async () => {
      const response = await fetch('http://localhost:5000/api/products/678a273a021c19c77483e6c7');
      const data = await response.json();
      if (data.success) {
        setProduct(data.data.product); // Set product data
      }
    };

    fetchProductData();
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='bg-[#2F2F2F]'>
      <PageHeader />
      <Gallery images={product.images} />
      <DetailTexts product={product} /> {/* Passing the product data to DetailTexts */}
      <RelatedMachines />
    </div>
  );
};

export default StockDetail;
