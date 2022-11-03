//import React from "react";
import Who from "./pages/Who";
import CustomerData from "./pages/CustomerData";
import CustomerOrder from "./pages/CustomerOrder";
import Kitchen from "./pages/Kitchen";

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

const RouteApp = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Who />} />
        <Route path="/CustomerData" element={<CustomerData />} />
        <Route path="/CustomerOrder" element={<CustomerOrder />} />
        <Route path="/Kitchen" element={<Kitchen />} />
      </Routes>
    </>
  );
};

export default RouteApp;
