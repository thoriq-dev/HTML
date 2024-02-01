const subJudul = document.querySelector("h2");

let nama = localStorage.getItem("nama");
if (!nama) {
  nama = prompt("Masukkan Nama Kamu😃: ");
  localStorage.setItem("nama", nama);
}

subJudul.innerHTML = `Salam kenal ya, ${nama}`;

// Function ubah Nama
const ubahNama = (e) => {
  nama = prompt("Ubah nama kamu❓: ");
  localStorage.setItem("nama", nama);
  subJudul.innerHTML = `Salam kenal ya ${nama}`;
  e.preventDefault();
};

const ubahNamaBtn = document.getElementById("ubahNamaBtn");
ubahNamaBtn.addEventListener("click", ubahNama);

// Funcion Hapus Nama
const hapusNama = (e) => {
  console.log("Sebelum dihapus, Nama: ", localStorage.getItem("nama"));
  localStorage.removeItem("nama");

  console.log("Setelah dihapus, Nama: ", localStorage.getItem("nama"));

  let namaBaru = prompt("Masukkan nama Anda 😃");
  console.log("Nama baru: ", namaBaru);
  if (namaBaru) {
    localStorage.setItem("nama", namaBaru);
    subJudul.innerHTML = `Salam kenal ya, ${namaBaru}`;
  } else {
    subJudul.innerHTML = "Nama telah Dihapus";
  }
  e.preventDefault();
};

const hapusNamaBtn = document.getElementById("hapusNamaBtn");
hapusNamaBtn.addEventListener("click", hapusNama);

// Function Dark Mode
const toggleBtn = document.getElementById("temaBtn");
const body = document.body;

// Mengecek tema sebelumnya dari Local Storage
const savedTheme = localStorage.getItem("tema");
if (savedTheme) {
  body.classList.add(savedTheme);
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Menyimpan tema ke Local Storage setiap kali tombol diklik
  const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
  localStorage.setItem("tema", currentTheme);
});

// Cara Pak Dhika karena ingin menggunakan fungsi Remove jadi yang digunakan adalah class dengan dark mode ()
// const darkMode = () => {
//   document.body.classList.add("dark-mode");
//   toggle.innerHTML = "Light Mode";
//   localStorage.setItem("tema", "light");
// };

// if (tema === "dark") {
//   darkMode();
// }

// const lightMode = () => {
//   document.body.classList.remove("dark-mode");
//   toggle.innerHTML = "Light Mode";
//   localStorage.setItem("tema", "dark");
// };

// toggle.addEventListener("click", function () {
//   tema = localStorage.getItem("item");
//   if (tema === "light") {
//     darkMode();
//   } else {
//     lightMode();
//   }
// });

// Menghapus Isi Storage
const hapusStorage = (e) => {
  localStorage.clear();
  e.preventDefault();
};
