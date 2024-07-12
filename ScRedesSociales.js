function redirigir(url) {
    window.location.href = url;
}

let currentScrollPosition = 0;
const scrollAmount = 300;

function moverCarrusel(direction) {
    const carousel = document.querySelector('.carousel');
    currentScrollPosition += direction * scrollAmount;
    carousel.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
}
