const logo = document.getElementById("logo");

let x = Math.random() * window.innerWidth * 0.7;
let y = Math.random() * window.innerHeight * 0.7;
let dx = 3;
let dy = 2;

function bounce() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const rect = logo.getBoundingClientRect();

  x += dx;
  y += dy;

  // Bounce off edges
  if (x + rect.width >= vw || x <= 0) dx = -dx;
  if (y + rect.height >= vh || y <= 0) dy = -dy;

  logo.style.left = x + "px";
  logo.style.top = y + "px";

  requestAnimationFrame(bounce);
}

bounce();
