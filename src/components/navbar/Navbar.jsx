import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import'./style.scss';

const Navbar = (props) => {

  const { addToCart, noOfProducts } = props;


  return (
    <nav className='navbar'>
      <h2>TeeRex Store</h2>
      <ul className='nav__list'>
        <li className='nav__products'>
          <Link to={"/"}  className="link">
            Products
          </Link>
          <div className='hover'></div>
        </li>

        <li className='nav__cart'>
          <Link to={"/cart"}  className="link cart">
            <AiOutlineShoppingCart className='cartLogo' />
          </Link>
          <div className='hover'></div>
          <div className='items'>{noOfProducts}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
