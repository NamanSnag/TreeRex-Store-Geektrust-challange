import React, { useState } from "react";

// components
import { Navbar } from "../../components";

import "./style.scss";

const Cart = (props) => {
  const { addToCart, noOfProducts, setAddTOCart, setNoOfProducts } = props;

  const handelDeleteProduct = (index) => {
    addToCart.splice(index, 1);
    setAddTOCart(addToCart);
    setNoOfProducts(addToCart.length);
  };

  const totalPrice = () => {
    let total = 0;
    addToCart.map((element) => {
      total = total + element.quantity * element.product.price;
    });
    return total;
  };
  const total = totalPrice();

  return (
    <div className="cart">
      <Navbar addToCart={addToCart} noOfProducts={noOfProducts} />
      <div className="cart__container">
        <h3>Shopping Cart</h3>

        <div className="cart__productList">
          {addToCart.length === 0 ? (
            <h3>No Item is added</h3>
          ) : (
            addToCart.map((product, index) => {
              return (
                <div key={index} className="cart__product">
                  <img
                    src={product.product.imageURL}
                    alt={product.product.name}
                  />
                  <div className="cart__productDetail">
                    <h4>{product.product.name}</h4>
                    <p>
                      {product.product.currency} {product.product.price}
                    </p>
                  </div>
                  <div className="cart__productAA">
                    <span>Qty: {product.quantity}</span>
                    <button
                      className="cart__deleteBtn"
                      onClick={(e) => handelDeleteProduct(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
          {/* <div className='line'></div */}
        </div>
        {addToCart.length === 0 ? null : (
          <div className="cart__totalAmount">
            <h3>Total amount : {total}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
