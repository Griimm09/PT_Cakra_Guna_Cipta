/* JavaScript */
const newsData = [
  { title: "PT Cakra Guna Cipta Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Lorem ipsum dolor sit amet", image: "../asset/news-image/Image1.webp", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
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