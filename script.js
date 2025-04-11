let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("ativo");
    });

    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add("ativo");
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndex);
});
