import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import AddUpdateProduct from "./components/AddUpdateProduct";
import { fetchProducts } from "./redux/actions/productActions";
import Notification from "./components/Notification";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <h1>Product List</h1>

      <AddUpdateProduct />
      <ProductList products={products} />

      <Notification />
    </div>
  );
};

export default App;
