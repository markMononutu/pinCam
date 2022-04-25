import React, { useState, useEffect } from "react";
import "../../../components/assets/css/templatemo.min.css";
import "../../../components/assets/css/templatemo.css";
import "../../../components/assets/css/custom.css";
import "../../../components/assets/css/bootstrap.min.css";
import "../../../App.css";

import { useParams, Link } from "react-router-dom";
import firebase from "../../../config/Firebase";
import ProdukCard from "../../molecule/ProductCard";

const Dashboard = () => {
  const { uid } = useParams();
  const [onPenyewa, setOnPenyewa] = useState(false);
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/penyewa/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnPenyewa(true);
        }
      });
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/rental/PmpiG950r3ZsLxuvx6tdTX6rEvg1/barang`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map((key) => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setBarang(productArray);

          // console.log(products);
        }
      });
  }, []);

  return onPenyewa === true ? (
    <div>
      {/* Start Header */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="index.html"
          >
            PinCam
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav  mx-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href={`/${uid}/dashboard`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/${uid}/aboutP`}>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <a
                className="nav-icon d-none d-lg-inline"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                className="nav-icon position-relative text-decoration-none"
                href="#"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
              </a>
              <Link to={`/${uid}/profile`} style={{ textDecoration: "none" }}>
                <div className="nav-icon position-relative text-decoration-none">
                  <i className="fa fa-fw fa-user text-dark mr-3"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Close Header --> */}
      <div style={{ paddingLeft: 20 }}>
        {barang ? (
          <div className="productContainer">
            {barang.map((key) => (
              <ProdukCard
                gambar={`${key.gambar}`}
                namaProduk={key.namaProduk}
                link={`/${uid}/${key.id}`}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1>Tidak ada barang</h1>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div>
      <h1>Memuat...</h1>
      <h1>
        Jika tetap berada pada halaman ini, kamu mungkin tidak menggunakan akun
        penyewa
      </h1>
    </div>
  );
};

export default Dashboard;
