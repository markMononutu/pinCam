import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../components/pages/Login";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
