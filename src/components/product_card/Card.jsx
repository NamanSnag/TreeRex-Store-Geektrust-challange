import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';

import "./style.scss";
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
  const [addToQ, setAddToQ] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const { product, addToCart, setAddTOCart, setNoOfProducts } = props;

  //handling quantity changes
  const handleQuantity = (type) => {
    let actualQ = product.quantity;
    let productName = product.name;

    if (type === "plus") {
      if(quantity >= actualQ){
        toast.error(`${productName} avilable ${actualQ} only`);
        return
      }
      setQuantity(quantity + 1);
    } else if (type === "minus") {
      if (quantity !== 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  // add to cart
  const handleAddToCart = () => {
      setAddToQ(true);
      addToCart.push({
        id : product.id,
        product : product,
        quantity : quantity
      }); 
      setAddTOCart(addToCart);
      setNoOfProducts(addToCart.length);
      setQuantity(0);
      toast.success(product.name+" added to cart");
  };

  return (
    <div className="card">
      <div
        className="product__view"
        style={{ backgroundImage: `url(${product.imageURL})` }}
      >
        <h4> {product.name} </h4>
      </div>

      <div className="product__description">
        <p className="product__price">
          {" "}
          {product.currency} {product.price}
        </p>
        {addToQ ? (
          <button className="add-btn" onClick={() => setAddToQ(!addToQ)}>
            Add to cart
          </button>
        ) : (
          <div className="quantity">
            <AiOutlinePlusCircle onClick={() => handleQuantity("plus")} />
            <div>{quantity}</div>
            <AiOutlineMinusCircle onClick={() => handleQuantity("minus")} />
            <BiCartAdd onClick={handleAddToCart}/>
          </div>
        )}
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Card;
