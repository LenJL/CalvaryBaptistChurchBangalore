let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots-container");

function createDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", `currentSlide(${i})`);
        if (i === currentIndex) {
            dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
    });
    dots = document.querySelectorAll(".dot");
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function initSlideshow() {
    slides = document.querySelectorAll(".slide");
    createDots();
    showSlide(currentIndex);
}

setInterval(nextSlide, 10000); 
window.onload = initSlideshow;
