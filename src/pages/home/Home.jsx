import React, {useState, useEffect} from 'react'

// components
import { Navbar, Products, Sidebar } from '../../components'

import './style.scss'

const Home = (props) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filterProducts, setFilterProducts ] = useState("");
  const [loading, setLoading] = useState(false);

  const { addToCart, setAddTOCart, noOfProducts, setNoOfProducts } = props;

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setOriginalData(data);
      })
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
        setAddTOCart={setAddTOCart}
      />
      <div className='home__container'>
        <Sidebar
          setData={setData}
          originalData={originalData}
          filterClass={'sidebar'}
        />
        <Products 
          addToCart={addToCart}
          setAddTOCart={setAddTOCart}
          data={data}
          loading={loading}
          setNoOfProducts={setNoOfProducts}
          filterProducts={filterProducts}
          setFilterProducts={setFilterProducts}
          setData={setData}
          originalData={originalData}
        />
      </div>
    </div>
  )
}

export default Home
