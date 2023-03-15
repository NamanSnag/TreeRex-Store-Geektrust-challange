import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

import Card from "../product_card/Card";

import "./style.scss";

const Products = (props) => {
  
  const { addToCart, setAddTOCart, data, loading, setNoOfProducts, filterProducts, setFilterProducts } = props;

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
        <button className="btn-search" id="btn-filter">
          <FiFilter />
        </button>
      </div>
      <div className="product__List">
      {
        loading ? (
          <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
          </div>
        ):(filterProduct && (
          filterProduct.map((product) => (
            <Card key={product.id} product={product} addToCart={addToCart} setAddTOCart={setAddTOCart}  setNoOfProducts={setNoOfProducts}/>
          ))
        ))
      }
      </div>
    </div>
  );
};

export default Products;
