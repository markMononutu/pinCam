import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useHistory } from "react-router-dom";

import "../../../App.css";

const Login = () => {
  return (
    <div className="background">
      <div style={{ position: "absolute", marginTop: 80, marginLeft: 200 }}>
        <h1 style={{ fontSize: 50 }}>Selamat Datang di PinCam !</h1>
      </div>
      <div className="containerLogin">
        <h1>Log In</h1>
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
            text="Login"
            textColor="white"
            color="black"
            //   onSubmit={handleSubmit}
          />
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button block text="Register" color="grey" textColor="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
