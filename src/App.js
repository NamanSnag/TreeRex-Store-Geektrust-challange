import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import { Home, Cart } from "./pages";

function App() {
  const [addToCart, setAddTOCart] = useState([]);
  const [noOfProducts, setNoOfProducts] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                addToCart={addToCart}
                setAddTOCart={setAddTOCart}
                noOfProducts={noOfProducts}
                setNoOfProducts={setNoOfProducts}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                addToCart={addToCart}
                setAddTOCart={setAddTOCart}
                noOfProducts={noOfProducts}
                setNoOfProducts={setNoOfProducts}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
