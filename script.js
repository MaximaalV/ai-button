const confettiBtn = document.querySelector(".confetti-button");

confettiBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const container = document.querySelector(".wrapper");

  // set dimensions for canvas
  canvas.width = 1000;
  canvas.height = 1000;

  container.appendChild(canvas);

  // create confetti inside the canvas
  const confetti_btn = confetti.create(canvas);

  // remove the canvas after spreading confetti
  confetti_btn().then(() => canvas.remove());
});