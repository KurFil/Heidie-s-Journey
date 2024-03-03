document.addEventListener("DOMContentLoaded", function () {
    let parallaxElements = document.querySelectorAll('.bgParallax');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach(function (element) {
            let speed = element.getAttribute('data-speed');
            let yPos = -(window.scrollY * speed);
            element.style.transform = 'translateY(' + yPos + 'px)';
        });
    });
});