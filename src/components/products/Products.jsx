import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import Card from "../product_card/Card";
import Sidebar from "../sidebar/Sidebar";

import "./style.scss";

const Products = (props) => {
  const [filterOn, setFilterOn] = useState(false);

  const {
    addToCart,
    setAddTOCart,
    data,
    loading,
    setNoOfProducts,
    filterProducts,
    setFilterProducts,
    setData,
    originalData,
  } = props;

  const filterProduct = data.filter((product) => {
    return product.name.toLowerCase().includes(filterProducts.toLowerCase());
  });

  return (
    <div className="products">
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search for produts..."
          className="search_input"
          onChange={(e) => setFilterProducts(e.target.value)}
        />
        <button className="btn-search">
          <MdOutlineSearch />
        </button>
        {filterOn ? (
          <>
            <button
              className="btn-search"
              id="btn-filter"
              onClick={() => setFilterOn(!filterOn)}
            >
              <RxCross1 />
            </button>
            <div className="filterSide">
              <Sidebar
                setData={setData}
                originalData={originalData}
                filterClass={"filterClass"}
              />
            </div>
          </>
        ):(
          <button
          className="btn-search"
          id="btn-filter"
          onClick={() => setFilterOn(!filterOn)}
          >
          <FiFilter />
        </button>
        )}
      </div>
      <div className="product__List">
        {loading ? (
          <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
          </div>
        ) : (
          filterProduct &&
          filterProduct.map((product) => (
            <Card
              key={product.id}
              product={product}
              addToCart={addToCart}
              setAddTOCart={setAddTOCart}
              setNoOfProducts={setNoOfProducts}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
