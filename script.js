
document.addEventListener("DOMContentLoaded", () => {
    initTypeEffect();
    initCarousel();
    initPopup();
});

// Efeito de digitação no header
function initTypeEffect() {
    const text = "VÏSHNÜ2049";
    const element = document.querySelector(".neon-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                element.textContent = "";
                index = 0;
                typeEffect();
            }, 2000);
        }
    }

    typeEffect();
}

// Carrossel de imagens
function initCarousel() {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * images[0].clientWidth}px)`;
    }

    prevBtn.addEventListener("click", () => {
        index = index > 0 ? index - 1 : images.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        index = index < images.length - 1 ? index + 1 : 0;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
}

// Função de inicialização dos popups
function initPopup() {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");

    // Função para abrir o popup com os dados da imagem
    function openPopup(imgSrc, desc) {
        popupImg.src = imgSrc;
        popupTitle.textContent = "Imagem Ampliada"; // Definindo um título fixo, você pode customizar
        popupDesc.textContent = desc || "Sem descrição."; // Se não houver descrição, usa "Sem descrição."
        popup.style.display = "flex"; // Exibe a popup
        document.body.classList.add("popup-active"); // Adiciona a classe para ativar a popup
    }

    // Função para fechar o popup
    function closePopup() {
        popup.style.display = "none"; // Esconde a popup
        document.body.classList.remove("popup-active"); // Remove a classe de popup ativa
    }

    // Função para abrir a imagem em fullscreen
    const fullscreenPopup = document.getElementById("fullscreen-popup");
    const fullscreenImg = document.getElementById("fullscreen-img");
    const closeFullscreenBtn = document.getElementById("close-fullscreen");

    function openFullscreen(imgSrc) {
        fullscreenImg.src = imgSrc;
        fullscreenPopup.style.display = "flex"; // Exibe o fullscreen
    }

    function closeFullscreen() {
        fullscreenPopup.style.display = "none"; // Fecha o fullscreen
    }

    // Abrir popup ao clicar em imagens de produto e carrossel
    document.querySelectorAll(".product img, .carousel-img").forEach(element => {
        element.addEventListener("click", function() {
            const imgSrc = this.src; // Pega a fonte da imagem clicada
            const desc = this.alt || "Descrição da imagem"; // Usa o atributo alt como descrição
            openPopup(imgSrc, desc); // Abre a popup com esses dados
        });
    });

    // Fechar popup ao clicar no botão X (fechar)
    document.querySelector(".close-btn").addEventListener("click", closePopup);

    // Fechar popup ao clicar no fundo escuro, mas não ao clicar na imagem ou conteúdo
    popup.addEventListener("click", function(event) {
        if (!popupContent.contains(event.target)) {
            closePopup();
        }
    });

    // Abrir imagem em fullscreen ao clicar na imagem da popup principal
    popupImg.addEventListener("click", function() {
        openFullscreen(popupImg.src);
    });

    // Fechar a visualização em fullscreen ao clicar no botão X
    closeFullscreenBtn.addEventListener("click", closeFullscreen);
}

// Garantir que a função initPopup seja chamada após a carga do DOM
document.addEventListener("DOMContentLoaded", initPopup);
