import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Product from "../components/Pages/Products/Product";
import Category from "../components/Pages/Category/Category";
import FoodPackaging from "../components/Pages/FoodPackaging/FoodPackaging";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/foodpackaging" Component={FoodPackaging} />
      <Route path="/products/:categoryId/:productId" Component={Product} />
      <Route path="/category/:categoryId" Component={Category} />
      <Route path="/aboutus" Component={AboutUs}/>
    </Routes>
  );
};

export default AppRouter;
