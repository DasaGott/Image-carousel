const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const images = document.getElementById("images");

const img = document.querySelectorAll(
  "#images img"
);

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  //We have to make img.length -1 because length is 4 however, idx of the last img is 3 and idx 0 is for the first image.
  //We would go beyond our nodelist
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  images.style.transform = `translateX(${
    -idx * 500
  }px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
