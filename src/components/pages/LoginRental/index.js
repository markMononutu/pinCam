import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../../../App.css";

const firebaseError = {
  "auth/invalid-email": "Kesalahan penulisan format email",

  "auth/wrong-password": "Password Salah.",

  "auth/user-not-found":
    "Tidak ada data pengguna yang sesuai dengan pengenal yang diberikan.",

  else: "Server error.",
};

const LoginRental = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email && !password) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Login!</strong>,
        html: <i>Masukkan Email dan Password</i>,
        icon: "error",
      });
    } else if (!email) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Login!</strong>,
        html: <i>Masukkan Email</i>,
        icon: "error",
      });
    } else if (!password) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Gagal Login!</strong>,
        html: <i>Masukkan Password</i>,
        icon: "error",
      });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const uid = res.user.uid;
          // console.log(res.user.uid);
          Navigate(`/${uid}/dashboardRental`);
        })
        .catch((error) => {
          console.log("error", error);
          const MySwal = withReactContent(Swal);

          MySwal.fire({
            title: <strong>Gagal Login!</strong>,
            html: <i>{firebaseError[error.code]}</i>,
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="background">
      <div style={{ position: "absolute", marginTop: 80, marginLeft: 200 }}>
        <h1 style={{ fontSize: 50 }}>Selamat Datang di PinCam !</h1>
        <h1
          style={{
            fontSize: 50,
            marginLeft: -40,
            width: 700,
            textAlign: "center",
          }}
        >
          Silahkan Masuk dengan akun Rental
        </h1>
      </div>
      <div className="containerLogin">
        <h1>Log In</h1>
        <hr />
        <div style={{ width: "65%" }}>
          <Input
            className="form-control"
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className="form-control"
            label="Password"
            placeholder="Masukkan password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <br />
          <Button
            block
            text="Login"
            textColor="white"
            color="black"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRental;
