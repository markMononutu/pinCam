import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../atoms";
import firebase from "../../../config/Firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductDetail = () => {
  const { uid, productID } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [biaya, setBiaya] = useState("");
  const [users, setUsers] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref(`users/rental/PmpiG950r3ZsLxuvx6tdTX6rEvg1/barang/${productID}`)
      .on("value", (res) => {
        if (res.val()) {
          setProduct(res.val());
          setBiaya(res.val().biaya);
        }
        // setFirstName(SplitFullName(users.fullName));
      });
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/penyewa/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setUsers(res.val());
        }
        console.log("users", users);
        // setFirstName(SplitFullName(users.fullName));
      });
  }, []);

  const handleSubmit = () => {
    if (product.status !== "ready") {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Mengirimkan Permintaan</strong>,
        html: <i>Barang Sedang Dipinjam Pengguna Lain</i>,
        icon: "error",
      });
    } else {
      navigate(`/${uid}/${productID}/pesan`);
    }
  };

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
                  <a className="nav-link" href="/">
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
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img src={product.gambar} style={{ height: 300, width: 300 }} />
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Detail Barang</h4>
              </div>

              {/* Detail Barang */}
              <h6>Nama Barang</h6>
              <h4>{product.namaProduk}</h4>
              <br />
              <h6>Biaya Perjam</h6>
              <h4>
                {" "}
                Rp.
                {biaya.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </h4>
              <br />
              <h6>Deskripsi</h6>
              <h4>{product.deskripsi}</h4>
              <br />
              <h6>Status Barang</h6>
              {product.status === "ready" ? (
                <h4 style={{ color: "green" }}>Ready</h4>
              ) : (
                <h4 style={{ color: "red" }}>Sedang Dipinjam Pengguna Lain</h4>
              )}

              {/* End of Detail Barang */}

              <div class="row mt-2"></div>
              <div class="mt-2 text-center">
                <Button
                  block
                  text="Ajukan Penyewaan"
                  color="green"
                  textColor="white"
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
