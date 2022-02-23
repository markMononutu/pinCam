import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
