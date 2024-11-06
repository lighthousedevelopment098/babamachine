// import React, { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';

// // Example of importing your JSON data
// import data from '../../Utils/data.json'; // Assuming you have data.json in the same directory
// import { Link } from 'react-router-dom';

// const Category = () => {
//   const [filteredProducts, setFilteredProducts] = useState(data.machineData);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [selectedManufacturer, setSelectedManufacturer] = useState('');
  
//   useEffect(() => {
//     // Filter products based on search and manufacturer
//     let filtered = data.machineData;
    
//     if (searchKeyword) {
//       filtered = filtered.filter(product =>
//         product.title.toLowerCase().includes(searchKeyword.toLowerCase())
//       );
//     }

//     if (selectedManufacturer) {
//       filtered = filtered.filter(product =>
//         product.manufacturer.toLowerCase() === selectedManufacturer.toLowerCase()
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [searchKeyword, selectedManufacturer]);

//   const handleSearchChange = (e) => {
//     setSearchKeyword(e.target.value);
//   };

//   const handleManufacturerChange = (e) => {
//     setSelectedManufacturer(e.target.value);
//   };

//   return (
//     <section id="secStock" className="content bg-gray02 snipcss-GLp3E">
//       <div className="inner">
//         <h2 className="sec-title">Stock</h2>
//         <form method="get" className="search" action="">
//           <dl className="search-wrap flex double">
//             <div>
//               <dt>Keyword</dt>
//               <dd>
//                 <div className="input-search">
//                   <input
//                     type="search"
//                     className='h-auto'
//                     name="s"
//                     placeholder="Please enter a keyword"
//                     value={searchKeyword}
//                     onChange={handleSearchChange}
//                   />
//                   <button type="submit">
//                     <FaSearch />
//                   </button>
//                 </div>
//               </dd>
//             </div>
//             <div>
//               <dt>Search by manufacturer</dt>
//               <dd>
//                 <div className="select-wrap">
//                   <select
//                     name="maker"
//                     value={selectedManufacturer}
//                     onChange={handleManufacturerChange}
//                     className="none"
//                   >
//                     <option value="">Please select a manufacturer</option>
//                     {data.manufacturers.map((manufacturer) => (
//                       <option key={manufacturer.name} value={manufacturer.name}>
//                         {manufacturer.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </dd>
//             </div>
//           </dl>
//         </form>

//         <h3 className="more-title">
//           <span className="title">Search by category</span>
//           <span className="btn-arrow right">
//             <a href="#">VIEW MORE</a>
//           </span>
//         </h3>

//         <ul className="category-icon-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4 six">
//           {data.categories.map((category, index) => (
//             <li key={index}>
//               <Link to={`/category/${category.name.toLowerCase()}`}>
//                 <figure className="icon">
//                   <img src={category.img} alt={category.name} />
//                 </figure>
//                 <span className="name">{category.name}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>

      
//       </div>
//     </section>
//   );
// };

// export default Category;





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
          <dl className="search-wrap flex double">
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
              <dt>Search by manufacturer</dt>
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
          <span className="btn-arrow right">
            <Link to="#">VIEW MORE</Link>
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
