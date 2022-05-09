import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutP = () => {
  const { uid } = useParams();

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
                  <a className="nav-link" href={`/${uid}/PTransaksi`}>
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
      <div className="mt-5 ms-5">
        <h4 style={{ textAlign: "justify", width: "50%" }}>
          Aplikasi memiliki tujuan untuk memberikan kemudahan dalam menyewa
          peralatan yang berhubungan dengan fotografi dan semua yang diperlukan
          oleh Content Creator
        </h4>
        <h4 style={{ textAlign: "justify", width: "50%" }}>
          Aplikasi ini adalah Project dari kelas Full-Stack Web Development,
          Fakultas Ilmu Komputer, Universitas Klabat.
        </h4>
        <br />
        <br />
        <h5>Pembuat Aplikasi :</h5>
        <ul>
          <li>Mark Jibril Mononutu</li>
          <li>Claudio Sebastian Mambu</li>
        </ul>
        <br />

        <h5>Dosen Pengampu:</h5>
        <ul>
          <li>Reymon Rotikan, S.Kom., MS.</li>
        </ul>
        <br />
        <h5>Teknologi yang digunakan :</h5>
        <ul>
          <li>
            Bahasa Pemrograman : <i class="fab fa-js"></i> Javascript
          </li>
          <li>
            Library untuk Front-End : <i class="fab fa-react"></i> ReactJS
          </li>
          <li>Database : Firebase</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutP;
