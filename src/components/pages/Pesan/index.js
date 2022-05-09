import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../atoms";
import firebase from "../../../config/Firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Pesan = () => {
  const { uid, productID } = useParams();
  const Navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [biaya, setBiaya] = useState("");
  const [users, setUsers] = useState({});
  const [durasi, setDurasi] = useState(null);

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
    if (durasi === null || durasi === "") {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Mengirimkan Permintaan</strong>,
        html: <i>Data harus diisi!</i>,
        icon: "warning",
      });
    } else if (!isNaN(+`${durasi}`) === false) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Mengirimkan Permintaan</strong>,
        html: <i>Masukkan Angka Sebagai durasi perjam</i>,
        icon: "error",
      });
    } else if (!isNaN(+`${durasi}`) === true && durasi.length > 0) {
      const total = product.biaya * durasi;
      const data = {
        //   data barang
        namaProduk: product.namaProduk,
        biayaPerjam: product.biaya,
        gambarProduk: product.gambar,
        idProduk: productID,

        // data penyewa
        fullName: users.fullName,
        email: users.email,
        address: users.address,
        phoneNumber: users.phoneNumber,
        idPenyewa: uid,

        // data tambahan mengenai transaksi
        total: total,
        durasiSewa: durasi,
        statusTransaksi: "Menunggu Konfirmasi Rental",
      };
      firebase.database().ref(`transaksi`).push(data);
      //   firebase.database().ref(`users/penyewa/${uid}`).push(data);
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Permintaan Sewa Berhasil Dikirimkan</strong>,
        html: <i>Mohon Tunggu Konfirmasi dari Rental</i>,
        icon: "success",
      });
      Navigate(`/${uid}/PTransaksi`);
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
                <h4 class="text-right">Input Data</h4>
              </div>
              {/* Form */}

              <Input
                className="form-control"
                label="Durasi Peminjaman"
                placeholder="Contoh: 1 *Artinya 1 jam"
                value={durasi}
                onChange={(event) => setDurasi(event.target.value)}
              />
              {/* End of Form */}
              <div class="row mt-2"></div>
              <div class=" text-center">
                <Button
                  block
                  text="Kirim"
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

export default Pesan;
