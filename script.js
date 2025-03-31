let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const tempoDeEspera = 30000; // Tempo de espera entre os slides em milissegundos (3 segundos)

function mudarSlide(direcao) {
    index = (index + direcao + totalSlides) % totalSlides;
    slides.style.transition = "transform 0.5s ease-in-out"; // Transição suave
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Configuração para o carrossel funcionar automaticamente
setInterval(function() {
    mudarSlide(1); // Avançar para o próximo slide
}, tempoDeEspera);
