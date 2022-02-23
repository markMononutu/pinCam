import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useHistory } from "react-router-dom";

import "../../../App.css";

const Register = () => {
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
            label="Email"
            placeholder="Masukkan email"
            //   value={email}
            //   onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className="form-control"
            label="Password"
            placeholder="Masukkan password"
            //   value={password}
            //   onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <br />
          <Button
            block
            text="Register"
            textColor="white"
            color="brown"
            //   onSubmit={handleSubmit}
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
