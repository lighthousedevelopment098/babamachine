// import React, { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import data from '../../static-util/data.json';

// const Category = () => {
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [selectedManufacturer, setSelectedManufacturer] = useState('');

//   const handleSearchChange = (e) => setSearchKeyword(e.target.value);
//   const handleManufacturerChange = (e) => setSelectedManufacturer(e.target.value);

//   return (
//     <section id="secStock" className="content bg-gray02">
//       <div className="inner">
//         <h2 className="sec-title">Stock</h2>
//         <form className="search">
//           <dl className="search-wrap w-full flex  flex-col md:flex-row">
//             <div>
//               <dt>Keyword</dt>
//               <dd>
//                 <div className="input-search">
//                   <input
//                     type="search"
//                     className='h-auto'
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
//               <dt className='mt-4 md:mt-0'>Search by manufacturer</dt>
//               <dd>
//                 <div className="select-wrap">
//                   <select value={selectedManufacturer} onChange={handleManufacturerChange}>
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
//           <span className="btn-arrow right mt-3 md:mt-0">
//             <Link to={'/stock'}>VIEW MORE</Link>
//           </span>
//         </h3>

//         <ul className="category-icon-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4 six">
//           {data.categories.map((category) => (
//             <li key={category.name}>
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slices/categorySlice';
import { fetchManufacturers } from '../../redux/slices/manufacturersSlice';
import { Link } from 'react-router-dom';

const Category = () => {
  const dispatch = useDispatch();

  // Local state for search and filtering
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  // Get categories and manufacturers from the Redux store
  const { categories, loading: categoriesLoading } = useSelector((state) => state.productCategory);
  const { manufacturers, loading: manufacturersLoading } = useSelector((state) => state.manufacturers);

  // Fetch categories and manufacturers on component mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchManufacturers());
  }, [dispatch]);

  const language = 'en';

  // Handlers for search and filtering
  const handleSearchChange = (e) => setSearchKeyword(e.target.value);
  const handleManufacturerChange = (e) => setSelectedManufacturer(e.target.value);

  // Filtered categories
  const filteredCategories = categories?.filter((category) =>
    category?.name[language]?.toLowerCase().includes(searchKeyword.toLowerCase()) &&
    (selectedManufacturer === '' || category.manufacturerId === selectedManufacturer)
  );

  return (
    <section id="secStock" className="content bg-gray02">
      <div className="inner">
        <h2 className="sec-title">Stock</h2>

        {/* Search Form */}
        <form className="search">
          <dl className="search-wrap w-full flex flex-col md:flex-row">
            {/* Search Keyword */}
            <div>
              <dt>Keyword</dt>
              <dd>
                <div className="input-search">
                  <input
                    type="search"
                    className="h-auto"
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

            {/* Manufacturer Filter */}
            <div>
              <dt className="mt-4 md:mt-0">Search by manufacturer</dt>
              <dd>
                <div className="select-wrap">
                  <select value={selectedManufacturer} onChange={handleManufacturerChange}>
                    <option value="">Please select a manufacturer</option>
                    {manufacturers?.map((manufacturer) => (
                      <option key={manufacturer._id} value={manufacturer.name[language]}>
                        {manufacturer.name[language]}
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

        {/* Categories List */}
        <ul className="category-icon-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4 six">
          {filteredCategories?.map((category) => (
            <li key={category._id}>
              <Link to={`/category/${category?.name[language].toLowerCase()}`}>
                <figure className="icon">
                  <img src={category.image} alt={category.name[language]} />
                </figure>
                <span className="name">{category.name[language]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
