import React, { useState, useEffect } from "react";
import { Button } from "../../atoms";
import { Link, useNavigate, useParams } from "react-router-dom";
import firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Profile = () => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const [users, setUsers] = useState({});

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
        navigate("/");
      }
    });
  };

  const getUserProfile = () => {
    firebase
      .database()
      .ref(`users/penyewa/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setUsers(res.val());
        }
        // setFirstName(SplitFullName(users.fullName));
      });
  };
  useEffect(() => {
    getUserProfile();
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
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">{users.fullName}</span>
              <span class="text-black-50">{users.email}</span>
              <br />
              <span>
                <Button
                  text="Keluar"
                  width={200}
                  textColor="white"
                  color="red"
                  onSubmit={onExit}
                />
              </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile</h4>
              </div>

              {/* Profile */}
              <h6>Full Name</h6>
              <h4>{users.fullName}</h4>
              <br />
              <h6>Email</h6>
              <h4>{users.email}</h4>
              <br />
              <h6>Address</h6>
              <h4>{users.address}</h4>
              <br />
              <h6>Phone Number</h6>
              <h4>{users.phoneNumber}</h4>

              {/* End of Profile */}

              <div class="row mt-2"></div>
              <div class="mt-5 text-center">
                <Link
                  to={`/${uid}/editProfile`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    block
                    text="Edit Profil"
                    color="black"
                    textColor="white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
