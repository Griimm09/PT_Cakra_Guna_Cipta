document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const imageWidth = 240; // 200px gambar + 20px margin kiri dan kanan
    let autoSlide;

    function nextSlide() {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(-${imageWidth}px)`;

        setTimeout(() => {
            const firstImage = carousel.firstElementChild;
            carousel.appendChild(firstImage);
            carousel.style.transition = "none";
            carousel.style.transform = "translateX(0)";
        }, 500);
    }

    function prevSlide() {
        const lastImage = carousel.lastElementChild;
        carousel.style.transition = "none";
        carousel.prepend(lastImage);
        carousel.style.transform = `translateX(-${imageWidth}px)`;

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
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    startAutoSlide();
});
