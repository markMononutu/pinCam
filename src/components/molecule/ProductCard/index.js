import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const ProdukCard = ({ gambar, namaProduk, link }) => {
  return (
    <div className="productCard">
      <Link to={link} style={{ textDecoration: "none" }} className="link">
        <img src={gambar} style={{ height: 300, width: 300, marginTop: 100 }} />
        <h4>{namaProduk}</h4>
      </Link>
    </div>
  );
};

export default ProdukCard;
