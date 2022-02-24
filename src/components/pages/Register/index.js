import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../../config/Firebase";

import "../../../App.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const data = {
          email: email,
          fullName: fullName,
        };
        const userId = userCredential.user.uid;
        console.log(userId);
        firebase.database().ref(`users/${userId}`).set(data);

        setFullName("");
        setEmail("");
        setPassword("");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div style={{ position: "absolute", marginTop: 80, marginLeft: 200 }}>
        <h1 style={{ fontSize: 50 }}>Buat Akunmu Sekarang</h1>
      </div>
      <div className="containerLogin">
        <h1 className="text-center">Register</h1>
        <hr />
        <div style={{ width: "65%" }}>
          <Input
            className="form-control"
            label="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap Anda"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
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
            text="Register"
            textColor="white"
            color="brown"
            onSubmit={handleSubmit}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              block
              text="Kembali ke Halaman Login"
              color="grey"
              textColor="white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
