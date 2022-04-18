import React from "react";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";

const UserType = () => {
  return (
    <div className="background">
      <div className="UserType">
        <h2>Selamat Datang</h2>
        <h2>di PinCam</h2>
        <br />
        <h4>Masuk Sebagai</h4>
        <br />
        <div style={{ width: "65%" }}>
          <Link to={`/loginRental`} style={{ textDecoration: "none" }}>
            <Button text="Rental" textColor="white" color="black" height={70} />
          </Link>
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <Button
              text="Penyewa"
              textColor="white"
              color="black"
              height={70}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserType;
