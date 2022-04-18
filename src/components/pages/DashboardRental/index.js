import React, { useState, useEffect } from "react";
import "../../../components/assets/css/templatemo.min.css";
import "../../../components/assets/css/templatemo.css";
import "../../../components/assets/css/custom.css";
import "../../../components/assets/css/bootstrap.min.css";

import { useParams, Link } from "react-router-dom";
import firebase from "../../../config/Firebase";
import { Button } from "../../atoms";

const DashboardRental = () => {
  const { uid } = useParams();
  const [onRental, setOnRental] = useState(false);
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/rental/${uid}/barang`)
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

  useEffect(() => {
    firebase
      .database()
      .ref(`users/rental/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnRental(true);
        }
      });
  }, []);

  return onRental === true ? (
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
                  <a className="nav-link" href={`/${uid}/dashboardRental`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Close Header --> */}
      <div style={{ marginLeft: 50, marginRight: 50 }} className="mt-5">
        <h2>Daftar Barang</h2>
        <br />
        <table className="table mb-0">
          <thead className=" whiteText">
            <tr>
              <th scope="col">Nama Barang</th>
              <th scope="col">Biaya</th>
              <th scope="col"></th>
              <th scope="col"></th>
              {/* <th scope="col">Hapus</th> */}
            </tr>
          </thead>

          <tbody>
            {barang.map((key) => (
              <tr>
                <td>{key.namaProduk}</td>
                <td>
                  Rp.
                  {key.biaya.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </td>

                <td className="row">
                  <Button
                    text="Update"
                    color="#F28F27"
                    textColor="white"
                    //   onSubmit={() => handleUpdate(key)}
                  />
                </td>
                <td>
                  <Button
                    text="Hapus"
                    color="red"
                    textColor="white"
                    // onSubmit={() => handleDelete(key)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className="nav-link navbarText" to={`/${uid}/tambahBarang`}>
          <Button text="TAMBAH PRODUK" color="green" textColor="white" />
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <h1>Kamu mungkin tidak menggunakan akun rental</h1>
    </div>
  );
};

export default DashboardRental;