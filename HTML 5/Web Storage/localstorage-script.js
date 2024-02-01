const judul = document.querySelector("h1");

let nama = localStorage.getItem("nama");
if (!nama) {
  nama = prompt("Masukkan Nama Anda :");
  localStorage.setItem("nama", nama);
}

judul.innerHTML = `Halo, ${nama}`;

// Ganti Nama
const gantiNama = (e) => {
  nama = prompt("Ubah Nama Anda :");
  localStorage.setItem("nama", nama);
  judul.innerHTML = `Halo, ${nama}`;
  e.preventDefault();
};

const ubahNamaBtn = document.getElementById("ubahNamaBtn");
ubahNamaBtn.addEventListener("click", gantiNama);
