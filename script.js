const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let index = 0;

function slide() {
  images.forEach((el) => {
    el.classList.remove("active");
  });
  images[index++ % images.length].classList.add("active");
}

// Automatically advance the slider every 3 seconds
setInterval(slide, 3000);
