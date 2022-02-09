import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="border mt-5 p-5"
      style={{ marginLeft: 500, marginRight: 500 }}
    >
      <h1 className="text-center">Log In</h1>
      <hr />
      <div className="mt-5">
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
          color="brown"
          //   onSubmit={handleSubmit}
        />
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button block text="Register" color="grey" textColor="white" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
