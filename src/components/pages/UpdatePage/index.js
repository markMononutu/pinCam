import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import firebase from "../../../config/Firebase";
import { Button, Input } from "../../atoms";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UpdatePage = () => {
  const { uid, idProduk } = useParams();

  console.log(uid);
  console.log(idProduk);
  const [produk, setProduk] = useState({});
  const [nama, setNama] = useState("");
  const [biaya, setBiaya] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // tidak mengubah semua data
    if (!nama && !biaya && !deskripsi) {
      const dataWithoutAll = {
        namaProduk: produk.namaProduk,
        deskripsi: produk.deskripsi,
        biaya: produk.biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutAll);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Deskripsi barang
    else if (!nama && !biaya) {
      const dataWithoutNamaandBiaya = {
        namaProduk: produk.namaProduk,
        deskripsi: deskripsi,
        biaya: produk.biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutNamaandBiaya);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Biaya
    else if (!nama && !deskripsi) {
      const dataWithoutNamaandDeskripsi = {
        namaProduk: produk.namaProduk,
        deskripsi: produk.deskripsi,
        biaya: biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutNamaandDeskripsi);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Nama
    else if (!biaya && !deskripsi) {
      const dataWithoutBiayaandDeskripsi = {
        namaProduk: nama,
        deskripsi: produk.deskripsi,
        biaya: produk.biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutBiayaandDeskripsi);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Nama dan biaya
    else if (!deskripsi) {
      const dataWithoutDeskripsi = {
        namaProduk: nama,
        deskripsi: produk.deskripsi,
        biaya: biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutDeskripsi);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Nama dan Deskripsi
    else if (!biaya) {
      const dataWithoutBiaya = {
        namaProduk: nama,
        deskripsi: deskripsi,
        biaya: produk.biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutBiaya);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah Biaya dan Deksripsi
    else if (!nama) {
      const dataWithoutNama = {
        namaProduk: produk.namaProduk,
        deskripsi: deskripsi,
        biaya: biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(dataWithoutNama);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }

    // Mengubah semua data
    else if (nama && biaya && deskripsi) {
      const data = {
        namaProduk: nama,
        deskripsi: deskripsi,
        biaya: biaya,
        gambar: produk.gambar,
      };

      firebase
        .database()
        .ref(`users/rental/${uid}/barang/${idProduk}`)
        .set(data);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Perubahan berhasil dilakukan</strong>,
        html: <i>Periksa halaman dashboard</i>,
        icon: "success",
      });
      navigate(`/${uid}/dashboardRental`);
    }
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`users/rental/${uid}/barang/${idProduk}`)
      .on("value", (res) => {
        if (res.val()) {
          //   setToko(res.val().keranjang);
          setProduk(res.val());
          console.log(produk);
        }
      });
  }, []);

  const handleBatal = () => {
    Swal.fire("Batal melakukan perubahan");
    navigate(`/${uid}/dashboardRental`);
  };

  return (
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

      <div class="container rounded bg-white mt-2 mb-5">
        <div class="row">
          <div class="col-md-5 border-right">
            <img
              src={`${produk.gambar}`}
              style={{ height: 400, width: 400, marginTop: 100 }}
            />
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Detail Barang</h4>
              </div>

              {/* Profile */}

              {/* <h5>Nama Produk</h5> */}
              {/* <h6>{produk.namaProduk}</h6> */}
              <Input
                className="form-control"
                label="Nama Barang"
                placeholder="Masukkan Nama barang"
                defaultValue={produk.namaProduk}
                onChange={(event) => setNama(event.target.value)}
              />

              <Input
                className="form-control"
                label="Biaya Per Jam"
                placeholder="Masukkan Biaya"
                defaultValue={produk.biaya}
                onChange={(event) => setBiaya(event.target.value)}
              />

              <Input
                className="form-control"
                label="Deskripsi"
                placeholder="Masukkan Deskripsi Barang"
                defaultValue={produk.deskripsi}
                onChange={(event) => setDeskripsi(event.target.value)}
              />
              <br />

              <Button
                text="SIMPAN PERUBAHAN"
                marginTop={20}
                color="#30809b"
                textColor="white"
                onSubmit={handleSubmit}
              />
              <Button
                text="BATAL"
                marginTop={20}
                color="grey"
                textColor="white"
                onSubmit={handleBatal}
              />

              {/* End of Profile */}

              <div class="row mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
