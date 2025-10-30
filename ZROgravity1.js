const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
let numStars = 150; // number of stars
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2 + 0.5, // speed/depth
      size: Math.random() * 2,
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";

  for (let star of stars) {
    star.y += star.z;

    // recycle star at top
    if (star.y > h) {
      star.y = 0;
      star.x = Math.random() * w;
      star.z = Math.random() * 2 + 0.5;
    }

    ctx.globalAlpha = 0.7 * Math.random(); // twinkle
    ctx.fillRect(star.x, star.y, star.size, star.size);
  }

  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateStars();
