import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Product from "../components/Pages/Products/Product";
import Category from "../components/Pages/Category/Category";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/products/:categoryId/:productId" Component={Product} />
      <Route path="/category/:categoryId" Component={Category} />

    </Routes>
  );
};

export default AppRouter;
