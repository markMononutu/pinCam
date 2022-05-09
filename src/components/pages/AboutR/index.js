import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AboutR = () => {
  const { uid } = useParams();
  const Navigate = useNavigate();

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
      {/* <!-- Close Header --> */}
    </div>
  );
};

export default AboutR;
