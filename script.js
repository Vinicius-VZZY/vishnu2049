document.addEventListener("DOMContentLoaded", () => {
  // Texto digitado no header
  const text = "TËCHNÖVÏSHNÜ";
  const element = document.querySelector(".neon-text");
  let index = 0;

  const typeEffect = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150); // Velocidade da digitação
    } else {
      setTimeout(() => {
        element.textContent = ""; // Limpa o texto para repetir o efeito
        index = 0;
        typeEffect();
      }, 2000); // Pausa antes de reiniciar
    }
  };

  typeEffect();

  // Carrossel
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const body = document.body;

  let carouselIndex = 0;

  const updateCarousel = () => {
    const imageWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(${-carouselIndex * imageWidth}px)`;
  };

  // Botão de navegação anterior
  prevBtn.addEventListener("click", () => {
    carouselIndex = carouselIndex > 0 ? carouselIndex - 1 : images.length - 1;
    updateCarousel();
  });

  // Botão de navegação próximo
  nextBtn.addEventListener("click", () => {
    carouselIndex = carouselIndex < images.length - 1 ? carouselIndex + 1 : 0;
    updateCarousel();
  });

  // Atualiza o carrossel no resize da janela
  window.addEventListener("resize", updateCarousel);

  // Adiciona o modal/popup para exibir imagens
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  popup.innerHTML = `
    <button class="close-btn">&times;</button>
    <img src="" alt="Imagem ampliada">
  `;
  body.appendChild(popup);

  const popupImage = popup.querySelector("img");
  const closeBtn = popup.querySelector(".close-btn");

  // Abre o popup ao clicar em uma imagem do carrossel
  images.forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.display = "flex"; // Mostra o popup
      popupImage.src = img.src; // Define o caminho da imagem ampliada
    });
  });

  // Fecha o popup ao clicar no botão de fechar
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Fecha o popup ao clicar fora da imagem
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
