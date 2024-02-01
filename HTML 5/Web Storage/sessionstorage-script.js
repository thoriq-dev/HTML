const subJudul = document.querySelector("h2");

let nama = sessionStorage.getItem("nama");
if (!nama) {
  nama = prompt("Masukkan Nama Anda😃 : ");
  sessionStorage.setItem("nama", nama);
}

subJudul.innerHTML = `Halo, ${nama}`;

// Ganti Nama
const gantiNama = (e) => {
  nama = prompt("Masukkan Nama Anda :");
  sessionStorage.setItem("nama", nama);
  subJudul.innerHTML = `Halo, ${nama}`;
  e.preventDefault();
};
const ubahNamaBtn = document.getElementById("ubahNamaBtn");
ubahNamaBtn.addEventListener("click", gantiNama);

// Hapus Nama
const hapusNama = (e) => {
  console.log("Sebelum dihapus, Nama: ", sessionStorage.getItem("nama"));
  sessionStorage.removeItem("nama");
  console.log("Setelah dihapus, Nama: ", sessionStorage.getItem("nama"));

  let namaBaru = prompt("Masukkan Nama Anda😃 :");
  console.log("Nama yang dimasukkan: ", namaBaru);
  if (namaBaru) {
    sessionStorage.setItem("nama", namaBaru);
    subJudul.innerHTML = `Halo, ${namaBaru}`;
  } else {
    subJudul.innerHTML = "Nama telah dihapus";
  }
  e.preventDefault();
};

const hapusNamaBtn = document.getElementById("hapusNamaBtn");
hapusNamaBtn.addEventListener("click", hapusNama);
