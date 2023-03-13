import React, {useState, useEffect} from 'react'

// components
import { Navbar, Products, Sidebar } from '../../components'

import './style.scss'

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { addToCart, setAddTOCart, noOfProducts, setNoOfProducts } = props;

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
      setTimeout(() => {
        setLoading(false);
      }, 300);
  }, []);


  return (
    <div className='home'>
      <Navbar 
        addToCart={addToCart}
        noOfProducts={noOfProducts}
      />
      <div className='home__container'>
        <Sidebar />
        <Products 
          addToCart={addToCart}
          setAddTOCart={setAddTOCart}
          data={data}
          loading={loading}
          setNoOfProducts={setNoOfProducts}
        />
      </div>
    </div>
  )
}

export default Home
