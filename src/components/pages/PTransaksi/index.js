import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../../../config/Firebase";
import TransaksiCard from "../../molecule/TransaksiCard";

const PTransaksi = () => {
  const { uid } = useParams();
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`transaksi`)
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
          setTransaksi(productArray);

          // console.log(products);
        }
      });
  }, []);
  return (
    <div>
      {/* Start Header */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href={`/${uid}/dashboard`}
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
                  <a className="nav-link" href={`/${uid}/Ptransaksi`}>
                    Transaksi
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

      <h3 className="mt-5 ms-5">Daftar Transaksi</h3>
      {transaksi ? (
        transaksi
          .filter((item) => item.idPenyewa.includes(uid))
          .map((key) => (
            <TransaksiCard
              gambar={`${key.gambarProduk}`}
              namaProduk={key.namaProduk}
              // link={`/${uid}/${key.id}`}
              durasi={`${key.durasiSewa} jam`}
              total={key.total}
              status={key.statusTransaksi}
            />
          ))
      ) : (
        <h4>Belum Ada Transaksi</h4>
      )}
    </div>
  );
};

export default PTransaksi;
