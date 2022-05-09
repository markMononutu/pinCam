import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../../atoms";
import firebase from "../../../config/Firebase";

const DetailTransaksi = () => {
  const { uid, idTransaksi } = useParams();
  const [transaksi, setTransaksi] = useState({});
  const [biaya, setBiaya] = useState("");
  const [total, setTotal] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    firebase
      .database()
      .ref(`transaksi/${idTransaksi}`)
      .on("value", (res) => {
        if (res.val()) {
          setTransaksi(res.val());
          setBiaya(res.val().biayaPerjam);
          setTotal(res.val().total);
        }
      });
  }, []);

  const onExit = () => {
    Swal.fire({
      title: "Ingin Keluar?",
      text: "Klik Yakin untuk Keluar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Kamu telah keluar dari PinCam!",
          "Kembali masuk untuk menikmati layanan PinCam",
          "success"
        );
        Navigate("/");
      }
    });
  };

  return (
    <div>
      {/* Start Header */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href={`/${uid}/dashboardRental`}
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
                  <a className="nav-link" href={`/${uid}/RTransaksi`}>
                    Transaksi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/${uid}/aboutR`}>
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
                className="nav-link"
                style={{ color: "red", cursor: "pointer" }}
                onClick={onExit}
              >
                Keluar
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                src={transaksi.gambarProduk}
                style={{ height: 300, width: 300 }}
              />
            </div>
          </div>
          <div class="col-md-3 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Detail Transaksi</h4>
              </div>

              {/* Detail Barang */}
              <h6>Nama Barang</h6>
              <h4>{transaksi.namaProduk}</h4>

              <h6>Biaya Sewa Perjam</h6>
              <h4>
                {" "}
                Rp.
                {biaya.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </h4>

              <h6>Durasi Sewa</h6>
              <h4>{transaksi.durasiSewa} jam</h4>
              <h6>Total Biaya Sewa</h6>
              <h4>
                {" "}
                Rp.
                {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </h4>

              <div class="row mt-2"></div>
            </div>
          </div>

          {/* Informasi Penyewa */}
          <div class="col-md-3 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Informasi Penyewa</h4>
              </div>

              {/* Info Penyewa */}
              <h6>Nama Penyewa</h6>
              <h4>{transaksi.fullName}</h4>

              <h6>Email</h6>
              <h4>{transaksi.email}</h4>

              <h6>Nomor Telepon</h6>
              <h4>{transaksi.phoneNumber}</h4>
              <h6>Alamat</h6>
              <h4>{transaksi.address}</h4>

              <div class="row mt-2"></div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-center">
          <Button
            block
            text="Terima Permintaan Sewa"
            color="green"
            textColor="white"
            width="70%"
            //   onSubmit={handleSubmit}
          />
        </div>
      </div>
      {/* <!-- Close Header --> */}
    </div>
  );
};

export default DetailTransaksi;
