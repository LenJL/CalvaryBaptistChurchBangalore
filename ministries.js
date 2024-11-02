function createSlider(sliderClass) {
    let currentIndex = 0;
    const images = document.querySelectorAll(`.${sliderClass} .imgsize`);
    const totalImages = images.length;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
            img.style.transition = 'opacity 1s ease';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 5000);

    createDots(sliderClass);
}

function createDots(sliderClass) {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    const images = document.querySelectorAll(`.${sliderClass} .imgsize`);
    let localIndex = 0;

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            localIndex = index;
            showSlide(localIndex);
        });
        dotsContainer.appendChild(dot);
    });

    document.querySelector(`.${sliderClass}`).appendChild(dotsContainer);
}

createSlider("tribal");
createSlider("children");
createSlider("church");
createSlider("rhema");


 
