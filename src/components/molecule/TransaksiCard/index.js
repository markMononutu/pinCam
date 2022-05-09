import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const TransaksiCard = ({ gambar, namaProduk, link, durasi, total, status }) => {
  return (
    <div
      //   to={link}
      //   style={{ textDecoration: "none" }}
      className="link transaksiCard"
    >
      <div>
        <img
          src={gambar}
          style={{ height: 300, width: 300, marginRight: 20 }}
        />
      </div>
      <div className="mt-3 mb-3">
        <h6>Nama Barang</h6>
        <h5>{namaProduk}</h5>
        <br />
        <h6>Durasi Sewa</h6>
        <h5>{durasi}</h5>
        <br />
        <h6>Biaya Sewa</h6>
        <h5>
          {" "}
          Rp.
          {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </h5>
        <br />
        <h6>Status Sewa</h6>
        <h5>{status}</h5>
      </div>
    </div>
  );
};

export default TransaksiCard;
