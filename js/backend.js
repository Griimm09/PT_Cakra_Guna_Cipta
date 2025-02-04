document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const imageWidth = 210; // Lebar gambar + margin (200px + 10px)
  let autoSlide;

  function nextSlide() {
      const firstImage = carousel.firstElementChild;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${-imageWidth}px)`;

      setTimeout(() => {
          carousel.style.transition = "none";
          carousel.appendChild(firstImage);
          carousel.style.transform = "translateX(0)";
      }, 500);
  }

  function prevSlide() {
      const lastImage = carousel.lastElementChild;
      carousel.style.transition = "none";
      carousel.prepend(lastImage);
      carousel.style.transform = `translateX(${-imageWidth}px)`;

      setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out";
          carousel.style.transform = "translateX(0)";
      }, 10);
  }

  function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
      clearInterval(autoSlide);
  }

  nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
  });

  startAutoSlide();
});