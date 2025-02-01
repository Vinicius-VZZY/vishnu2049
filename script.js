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

// Popup de produtos
function initPopup() {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-desc");
  const popupQr = document.getElementById("popup-qr");
  const popupLink = document.getElementById("popup-link");

  const productData = {
    black: {
      img: "mockup-camisa-preta.jpg",
      title: "Camisa Preta - Edição 01",
      desc: "Descrição do produto aqui...",
      qr: "qr-code-preto.png",
      link: "https://pagamento-mercadopago-preto.com"
    },
    white: {
      img: "mockup-camisa-branca.jpg",
      title: "Camisa Branca - Edição 01",
      desc: "Descrição do produto aqui...",
      qr: "qr-code-branco.png",
      link: "https://pagamento-mercadopago-branco.com"
    }
  };

  document.querySelectorAll(".product").forEach((product) => {
    product.addEventListener("click", () => {
      const productType = product.dataset.product;
      const data = productData[productType];

      popupImg.src = data.img;
      popupTitle.innerText = data.title;
      popupDesc.innerText = data.desc;
      popupQr.src = data.qr;
      popupLink.href = data.link;

      popup.style.display = "flex";
    });
  });

  document.querySelector(".close-btn").addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}
