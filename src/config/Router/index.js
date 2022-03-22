import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";
import Dashboard from "../../components/pages/Dashboard";
import Profile from "../../components/pages/Profile";
import EditProfile from "../../components/pages/EditProfile";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/:uid/dashboard" element={<Dashboard />}></Route>
        <Route path="/:uid/profile" element={<Profile />}></Route>
        <Route path="/:uid/editProfile" element={<EditProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
