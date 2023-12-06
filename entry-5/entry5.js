document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showSlide(index) {
        const newTransformValue = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showSlide(currentIndex);
    }

    // Optional: Auto-advance to the next slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Optional: Add event listeners for next/prev buttons or user interactions
    // const nextButton = document.getElementById('nextButton');
    // const prevButton = document.getElementById('prevButton');
    // nextButton.addEventListener('click', nextSlide);
    // prevButton.addEventListener('click', prevSlide);
});
