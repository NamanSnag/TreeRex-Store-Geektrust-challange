import React from 'react'

// components
import { Navbar } from '../../components'

import './style.scss'

const Cart = (props) => {

  const { addToCart, noOfProducts } = props;

  return (
    <div className='cart'>
      <Navbar addToCart={addToCart} noOfProducts={noOfProducts} />
      cart
    </div>
  )
}

export default Cart
