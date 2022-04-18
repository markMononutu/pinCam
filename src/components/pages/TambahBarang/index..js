import React, { useState, useEffect } from "react";
import { Button, Input } from "../../atoms";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import firebase from "../../../config/Firebase";
import { useNavigate, useParams } from "react-router-dom";

const TambahBarang = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [namaProduk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setGambar(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSubmit = () => {
    if (!namaProduk || !harga || !deskripsi || !gambar) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <strong>Tidak Boleh ada yang kosong</strong>,
        html: <i>Semua Data Diperlukan</i>,
        icon: "warning",
      });
    } else {
      const data = {
        namaProduk: namaProduk,
        biaya: harga,
        deskripsi: deskripsi,
        gambar: gambar,
      };

      firebase.database().ref(`users/rental/${uid}/barang`).push(data);

      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <strong>Produk Berhasil Ditambahkan</strong>,
        html: <i>Cek Dashboard</i>,
        icon: "success",
      });

      navigate(`/${uid}/dashboardRental`);

      setNamaProduk("");
      setHarga("");
      setJumlah("");
      setDeskripsi("");
      setGambar("");
    }
  };
  return (
    <div>
      <div class="container rounded bg-white mt-2 mb-5">
        <div class="row">
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Masukkan Data Barang</h4>
              </div>

              {/* Profile */}
              <Input
                className="form-control"
                label="Nama Produk"
                placeholder="Masukkan Nama Produk"
                value={namaProduk}
                onChange={(event) => setNamaProduk(event.target.value)}
              />
              <Input
                className="form-control"
                label="Biaya"
                placeholder="Masukkan Biaya Perhari"
                value={harga}
                onChange={(event) => setHarga(event.target.value)}
              />

              <Input
                className="form-control"
                label="Deskripsi"
                placeholder="Masukkan Deskripsi Barang"
                value={deskripsi}
                onChange={(event) => setDeskripsi(event.target.value)}
              />
              <br />
              <h5>Pilih Foto Produk</h5>
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
              <br />
              <br />
              <Button
                text="TAMBAH BARANG"
                marginTop={20}
                color="green"
                textColor="white"
                onSubmit={handleSubmit}
              />

              {/* End of Profile */}

              <div class="row mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahBarang;
