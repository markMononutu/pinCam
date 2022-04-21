import React, { useState, useEffect } from "react";
import { Button, Input } from "../../atoms";
import { Link, useNavigate, useParams } from "react-router-dom";
import firebase from "../../../config/Firebase";

const Profile = () => {
  const navigate = useNavigate();

  const { uid } = useParams();
  const [users, setUsers] = useState({});
  //const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleSubmit = () => {
    const data = {
      fullName: fullName,
      email: users.email,
      phoneNumber: phoneNumber,
      address: address,
    };
    const dataWithoutfullName = {
      fullName: users.fullName,
      email: users.email,
      phoneNumber: phoneNumber,
      address: address,
    };
    const dataWithoutPhoneNumber = {
      fullName: fullName,
      email: users.email,
      phoneNumber: users.phoneNumber,
      address: address,
    };
    const dataWithoutAddress = {
      fullName: fullName,
      email: users.email,
      phoneNumber: phoneNumber,
      address: users.address,
    };

    const dataWithoutfullNameAndPhoneNumber = {
      fullName: users.fullName,
      email: users.email,
      phoneNumber: users.phoneNumber,
      address: address,
    };
    const dataWithoutFullNameAndAddress = {
      fullName: users.fullName,
      email: users.email,
      phoneNumber: phoneNumber,
      address: users.address,
    };
    const dataWithoutPhoneNumberAndAddress = {
      fullName: fullName,
      email: users.email,
      phoneNumber: users.phoneNumber,
      address: users.address,
    };

    const dataWithoutAll = {
      fullName: users.fullName,
      email: users.email,
      phoneNumber: users.phoneNumber,
      address: users.address,
    };
    if (!fullName && !phoneNumber && !address) {
      firebase.database().ref(`users/penyewa/${uid}`).set(dataWithoutAll);
      console.log("withoutAll");
      navigate(`/${uid}/profile`);
    } else if (!fullName && !phoneNumber) {
      firebase
        .database()
        .ref(`users/penyewa/${uid}`)
        .set(dataWithoutfullNameAndPhoneNumber);
      console.log("withoutFullNameAndPhoneNumber");
      navigate(`/${uid}/profile`);
    } else if (!fullName && !address) {
      firebase
        .database()
        .ref(`users/penyewa/${uid}`)
        .set(dataWithoutFullNameAndAddress);
      console.log("withoutFullNameAndAddress");
      navigate(`/${uid}/profile`);
    } else if (!phoneNumber && !address) {
      firebase
        .database()
        .ref(`users/penyewa/${uid}`)
        .set(dataWithoutPhoneNumberAndAddress);
      console.log("withoutPhoneNumberAndAddress");
      navigate(`/${uid}/profile`);
    } else if (!fullName) {
      firebase.database().ref(`users/penyewa/${uid}`).set(dataWithoutfullName);
      console.log("withoutFullName");
      navigate(`/${uid}/profile`);
    } else if (!phoneNumber) {
      firebase
        .database()
        .ref(`users/penyewa/${uid}`)
        .set(dataWithoutPhoneNumber);
      console.log("withoutPhoneNumber");
      navigate(`/${uid}/profile`);
    } else if (!address) {
      firebase.database().ref(`users/penyewa/${uid}`).set(dataWithoutAddress);
      console.log("withoutAddress");
      navigate(`/${uid}/profile`);
    } else {
      firebase.database().ref(`users/penyewa/${uid}`).set(data);
      console.log("with all (else)");
      navigate(`/${uid}/profile`);
    }
    console.log("nama", fullName);
    console.log("alamat", address);
    console.log("nomor", phoneNumber);
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
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile</h4>
              </div>

              {/* Profile */}
              <Input
                className="form-control"
                label="Full Name"
                placeholder="Masukkan nama"
                defaultValue={users.fullName}
                // value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                // defaultValue={users.fullName}
                // onChangeText={(fullName) => setFullName(fullName)}
              />
              <Input
                className="form-control"
                label="Phone Number"
                placeholder="Masukkan nomor telepon"
                defaultValue={users.phoneNumber}
                // value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                // defaultValue={users.phoneNumber}
                // onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
              />
              <Input
                className="form-control"
                label="Address"
                placeholder="Masukkan Alamat"
                defaultValue={users.address}
                // value={address}
                onChange={(event) => setAddress(event.target.value)}
                // defaultValue={users.address}
                // onChangeText={(address) => setAddress(address)}
              />

              {/* End of Profile */}

              <div class="row mt-2"></div>
              <div class="mt-5 text-center">
                <Button
                  block
                  text="Save Changes"
                  color="black"
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

export default Profile;
