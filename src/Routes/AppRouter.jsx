import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Product from "../components/Pages/Products/Product";
import Category from "../components/Pages/Category/Category";
import FoodPackaging from "../components/Pages/FoodPackaging/FoodPackaging";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import Blogs from "../components/Pages/Policy/Blogs";
import Btc from "../components/Pages/Policy/Btc";
import PrivacyPolicy from "../components/Pages/Policy/PrivacyPolicy";
import Rrp from "../components/Pages/Policy/Rrp";
import ServiceBenifits from "../components/Pages/Policy/ServiceBenifits";
import Contact from "../components/Pages/ContcatUs/Contact";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/foodpackaging" Component={FoodPackaging} />
      <Route path="/products/:categoryId/:productId" Component={Product} />
      <Route path="/category/:categoryId" Component={Category} />
      <Route path="/aboutus" Component={AboutUs}/>
 <Route path="/contact" Component={Contact}/>
        <Route path="/blogs" Component={Blogs}/>
<Route path="/btc" Component={Btc}/>
<Route path="/privacypolicy" Component={PrivacyPolicy}/>
<Route path="/rrp" Component={Rrp}/>
<Route path="/servicebenifits" Component={ServiceBenifits}/>
    </Routes>
  );
};

export default AppRouter;
