document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menu-bar");
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


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".news-slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let interval;
    let isDragging = false;
    let startX;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }
    
    function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(interval);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    const carousel = document.querySelector(".carousel");
    
    carousel.addEventListener("mousedown", function (e) {
        isDragging = true;
        startX = e.clientX;
        stopAutoSlide();
    });
    
    carousel.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        let diff = e.clientX - startX;
        if (diff > 50) {
            showSlide((currentIndex - 1 + slides.length) % slides.length);
            isDragging = false;
            startAutoSlide();
        } else if (diff < -50) {
            showSlide((currentIndex + 1) % slides.length);
            isDragging = false;
            startAutoSlide();
        }
    });
    
    carousel.addEventListener("mouseup", function () {
        isDragging = false;
    });
    
    carousel.addEventListener("mouseleave", function () {
        isDragging = false;
    });
    
    showSlide(currentIndex);
    startAutoSlide();
});



