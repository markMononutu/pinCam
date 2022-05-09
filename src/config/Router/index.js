import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";
import Dashboard from "../../components/pages/Dashboard";
import Profile from "../../components/pages/Profile";
import EditProfile from "../../components/pages/EditProfile";
import UserType from "../../components/pages/UserType";
import LoginRental from "../../components/pages/LoginRental";
import DashboardRental from "../../components/pages/DashboardRental";
import TambahBarang from "../../components/pages/TambahBarang/index.";
import UpdatePage from "../../components/pages/UpdatePage";
import ProductDetail from "../../components/pages/ProductDetail";
import AboutP from "../../components/pages/AboutP";
import AboutR from "../../components/pages/AboutR";
import Pesan from "../../components/pages/Pesan";
import PTransaksi from "../../components/pages/PTransaksi";
import RTransaksi from "../../components/pages/RTransaksi";
import DetailTransaksi from "../../components/pages/DetailTransaksi";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserType />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/loginRental" element={<LoginRental />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/:uid/dashboard" element={<Dashboard />}></Route>
        <Route path="/:uid/update/:idProduk" element={<UpdatePage />}></Route>
        <Route
          path="/:uid/dashboardRental"
          element={<DashboardRental />}
        ></Route>
        <Route path="/:uid/profile" element={<Profile />}></Route>
        <Route path="/:uid/editProfile" element={<EditProfile />}></Route>
        <Route path="/:uid/tambahBarang" element={<TambahBarang />}></Route>
        <Route path="/:uid/:productID" element={<ProductDetail />}></Route>
        <Route path="/:uid/aboutP" element={<AboutP />}></Route>
        <Route path="/:uid/aboutR" element={<AboutR />}></Route>
        <Route path="/:uid/:productID/pesan" element={<Pesan />}></Route>
        <Route path="/:uid/Ptransaksi" element={<PTransaksi />}></Route>
        <Route path="/:uid/Rtransaksi" element={<RTransaksi />}></Route>
        <Route
          path="/:uid/:idTransaksi/detailTransaksi"
          element={<DetailTransaksi />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
