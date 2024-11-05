
import React from 'react';
import { FaSearch } from 'react-icons/fa';
const Category = () => {
  const categories = [
    { name: 'Wheel loader', url: 'https://www.machinelines.com/stock-cat/wheel-loader', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category02.png' },
    { name: 'Excavator', url: 'https://www.machinelines.com/stock-cat/excavator', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category01.png' },
    { name: 'Bulldozer', url: 'https://www.machinelines.com/stock-cat/bulldozer', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category03.png' },
    { name: 'Grader', url: 'https://www.machinelines.com/stock-cat/grader', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category04.png' },
    { name: 'Dump truck', url: 'https://www.machinelines.com/stock-cat/dump-truck', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category05.png' },
    { name: 'Roller', url: 'https://www.machinelines.com/stock-cat/roller', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category06.png' },
    { name: 'Crane', url: 'https://www.machinelines.com/stock-cat/crane', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category07.png' },
    { name: 'Wheele excavator', url: 'https://www.machinelines.com/stock-cat/wheele-excavator', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category08.png' },
    { name: 'Rotary snowplow', url: 'https://www.machinelines.com/stock-cat/rotary-snowplow', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category09.png' },
    { name: 'Forklift', url: 'https://www.machinelines.com/stock-cat/forklift', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category10.png' },
    { name: 'Tire', url: 'https://www.machinelines.com/stock-cat/tire', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category11.png' },
    { name: 'Parts', url: 'https://www.machinelines.com/stock-cat/parts', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category12.png' },
    { name: 'Attachment', url: 'https://www.machinelines.com/stock-cat/attachment', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category13.png' },
    { name: 'Others', url: 'https://www.machinelines.com/stock-cat/others', img: 'https://www.machinelines.com/wp-content/uploads/2022/08/icon_category14.png' },
  ];

  return (
    <section id="secStock" className="content bg-gray02 snipcss-GLp3E">
      <div className="inner">
        <h2 className="sec-title">Stock</h2>
        <form method="get" className="search" action="https://www.machinelines.com/en/">
          <input type="hidden" name="post_type" value="product" />
          <dl className="search-wrap flex double">
            <div>
              <dt>Keyword</dt>
              <dd>
                <div className="input-search">
                  <input type="search" name="s" placeholder="Please enter a keyword" />
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
                  <select name="maker" onChange={(e) => (window.location.href = e.target.value)} className="none">
                    <option value="" selected>Please select a manufacturer</option>
                    <option value="stock-tag/komatsu">Komatsu</option>
                    <option value="stock-tag/hitachi">Hitachi</option>
                    <option value="stock-tag/cat">Cat</option>
                    <option value="stock-tag/kawasaki">Kawasaki</option>
                    <option value="stock-tag/tcm">Tcm</option>
                    <option value="stock-tag/kubota">Kubota</option>
                    <option value="stock-tag/niigata">Niigata</option>
                    <option value="stock-tag/nichijo">Nichijo</option>
                    <option value="stock-tag/hino">Hino</option>
                    <option value="stock-tag/mitsubishi">Mitsubishi</option>
                    <option value="stock-tag/yanmar">Yanmar</option>
                    <option value="stock-tag/others">Others</option>
                  </select>
                </div>
              </dd>
            </div>
          </dl>
        </form>
        <h3 className="more-title">
          <span className="title">Search by category</span>
          <span className="btn-arrow right">
            <a href="https://www.machinelines.com/stocks">VIEW MORE</a>
          </span>
        </h3>
        <ul className="category-icon-list flex six">
          {categories.map((category, index) => (
            <li key={index}>
              <a href={category.url}>
                <figure className="icon">
                  <img src={category.img} alt={category.name} />
                </figure>
                <span className="name">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
