import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import CategoryList from "./Pages/CategoryList";
import SingleCategory from "./Pages/SingleCategory";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/category" element={<CategoryList/>} />
          <Route path="/singlecategory/:id" element={<SingleCategory/>} />
          <Route path="/users" element={<Users />} />

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
