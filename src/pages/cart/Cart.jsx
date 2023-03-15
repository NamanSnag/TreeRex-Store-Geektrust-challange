import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

// components
import { Navbar } from "../../components";

import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const { addToCart, noOfProducts, setAddTOCart, setNoOfProducts } = props;

  const handelDeleteProduct = (index) => {
    addToCart.splice(index, 1);
    setAddTOCart(addToCart);
    setNoOfProducts(addToCart.length);
    toast.success("Product Deleted Successfully");
  };

  const totalPrice = () => {
    let total = 0;
    addToCart.map((element) => {
      return (total = total + element.quantity * element.product.price);
    });
    return total;
  };

  const total = totalPrice();

  const handleQuantityChange = (type, index, quantity) => {
    let newCart = [...addToCart];
    let actualQ = newCart[index].product.quantity;
    let productName = newCart[index].product.name;
    if (type === "plus") {
      if (newCart[index].quantity < actualQ)
        newCart[index].quantity = quantity + 1;
      else toast.error(`${productName} avilable ${actualQ} only`);
    } else if (type === "minus") {
      if (newCart[index].quantity > 0) newCart[index].quantity = quantity - 1;
    }
    setAddTOCart(newCart);
  };

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
                    <div className="cart__quantity">
                      <AiOutlineMinusSquare
                        className="quantityBtn"
                        onClick={() => {
                          handleQuantityChange(
                            "minus",
                            index,
                            product.quantity
                          );
                        }}
                      />
                      <button className="span">Qty : {product.quantity}</button>
                      <AiOutlinePlusSquare
                        className="quantityBtn"
                        onClick={() => {
                          handleQuantityChange("plus", index, product.quantity);
                        }}
                      />
                    </div>
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
      <ToastContainer />
    </div>
  );
};

export default Cart;
