document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector('.menu-bar');
  const navContainer = document.querySelector('.nav-container2');

  menuBar.addEventListener('click', () => {
      if (navContainer.style.right === "0px") {
          navContainer.style.right = "-250px";
      } else {
          navContainer.style.right = "0px";
      }
  });

  // Tutup menu saat klik di luar sidebar
  document.addEventListener("click", function (event) {
      if (!menuBar.contains(event.target) && !navContainer.contains(event.target)) {
          navContainer.style.right = "-250px";
      }
  });
});

/* JavaScript */
const newsData = [
  { title: "PT. Cakra Guna Cipta Tingkatkan Efisiensi: Produksi 5.000 Batang Rokok Per Menit dengan Teknologi Canggih", image: "../asset/news-image/Image1.webp", content: "Proses produksi rokok batangan di PT Cakra Guna Cipta dimulai dengan pembuatan rokok menggunakan mesin canggih yang memiliki kapasitas produksi 5.000 batang per menit. Mesin ini beroperasi selama 7 jam per shift, memastikan produksi berjalan cepat dan efisien. Setelah batangan rokok diproduksi, langkah berikutnya adalah proses pengepakan, yang dilakukan dengan teliti untuk memastikan kualitas dan keamanan produk. <br>Selanjutnya, rokok diberi pemasangan cukai sesuai regulasi pemerintah, dan akhirnya dipindahkan ke dalam karton untuk distribusi. Dengan menggunakan teknologi modern dan proses yang terkontrol ketat, PT Cakra Guna Cipta mampu memenuhi permintaan pasar sambil menjaga standar kualitas yang tinggi." },
  { title: "Ketelitian dan Keterampilan: Produksi 3.600 Batang SKT Per Hari Secara Manual di PT Cakra Guna Cipta", image: "../asset/news-image/Image2.png", content: "PT Cakra Guna Cipta terus mempertahankan tradisi keahlian dalam produksi Sigaret Kretek Tangan (SKT), dengan kapasitas produksi mencapai 3.600 batang per hari. Berbeda dengan produksi rokok mesin, setiap langkah dalam pembuatan SKT dilakukan secara manual oleh tenaga terampil, memastikan kualitas dan cita rasa tetap terjaga. <br>Untuk menjamin kebersihan dan keamanan selama proses produksi, para pekerja dilengkapi dengan masker dan pelindung rambut, menjaga produk tetap higienis. Dengan kombinasi antara keterampilan manusia dan standar produksi yang ketat, PT Cakra Guna Cipta terus menghadirkan produk berkualitas tinggi bagi para konsumennya." },
  { title: "Cara mandor PT. Cakra Guna Cipta melakukan sortir pada rokok jenis SKT.", image: "../asset/news-image/Image3.png", content: "Bagaimana cara sortir rokok jenis SKT pada PT. Cakra Guna Cipta? Mari kita pelajari bersama! <br>Pertama akan dicek pada kertas pembungkus rokok, apakah ada bagian rusak atau tidak, lalu kedua akan dicek pada tembakau yang digulung dengan kertas, apakah terdapat tembakau yang berlebih atau tidak, dan yang terakhir mengecek jumlah yang disetorkan pada mandor, dan setiap hari pada setiap karyawan mempunyai target harian untuk membuat rokok SKT." },
];

const newsContainer = document.getElementById('newsContainer');

newsData.forEach(news => {
  const newsCard = document.createElement('div');
  newsCard.classList.add('news-card');

  newsCard.innerHTML = `
    <div class="news-image">
      <img src="${news.image}" alt="Berita">
    </div>
    <div class="news-content">
      <h2>${news.title}</h2>
      <hr class="underline">
      <p>${news.content}</p>
    </div>
  `;
  
  newsContainer.appendChild(newsCard);
});